// Vercel serverless funkcija — prima podatke sa kontakt forme i šalje ih
// mejlom preko Resend-a. API ključ NIKADA ne ide u kod, nego u environment
// varijablu (Vercel → Project → Settings → Environment Variables, a lokalno u .env.local).
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Pošiljalac mora biti sa domena verifikovanog u Resend-u.
// Dok domen nije verifikovan, koristi se Resend-ov test domen (onboarding@resend.dev),
// koji može slati SAMO na mejl adresu vlasnika Resend naloga.
const FROM = process.env.CONTACT_FROM || 'Sajt MADEX <onboarding@resend.dev>';
const TO = (process.env.CONTACT_TO || 'stamparijamadex@gmail.com')
  .split(',')
  .map((address) => address.trim())
  .filter(Boolean);

const LIMITS = {
  name: 100,
  email: 150,
  phone: 40,
  subject: 150,
  message: 1000,
};

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// Sprječava da se sadržaj forme protumači kao HTML u mejlu.
const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Poruke greške na jeziku stranice sa koje je forma poslata (sr / en)
const MESSAGES = {
  sr: {
    nameShort: 'Ime mora imati najmanje 2 karaktera.',
    emailInvalid: 'Unesite validnu email adresu.',
    subjectShort: 'Naslov mora imati najmanje 5 karaktera.',
    messageShort: 'Poruka mora imati najmanje 10 karaktera.',
    tooLong: (field, max) => `Polje "${field}" je duže od ${max} karaktera.`,
    methodNotAllowed: 'Dozvoljena je samo POST metoda.',
    unavailable: 'Slanje poruka trenutno nije dostupno. Pozovite nas telefonom.',
    sendFailed: 'Slanje nije uspjelo. Pokušajte ponovo ili nas pozovite telefonom.',
    serverError: 'Greška servera. Pokušajte ponovo za koji trenutak.',
  },
  en: {
    nameShort: 'Name must be at least 2 characters.',
    emailInvalid: 'Please enter a valid email address.',
    subjectShort: 'Subject must be at least 5 characters.',
    messageShort: 'Message must be at least 10 characters.',
    tooLong: (field, max) => `The "${field}" field is longer than ${max} characters.`,
    methodNotAllowed: 'Only the POST method is allowed.',
    unavailable: 'Sending messages is currently unavailable. Please call us.',
    sendFailed: 'Sending failed. Please try again or give us a call.',
    serverError: 'Server error. Please try again in a moment.',
  },
};

const validate = (data, m) => {
  const errors = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push(m.nameShort);
  }
  if (!data.email || !isEmail(data.email)) {
    errors.push(m.emailInvalid);
  }
  if (!data.subject || data.subject.trim().length < 5) {
    errors.push(m.subjectShort);
  }
  if (!data.message || data.message.trim().length < 10) {
    errors.push(m.messageShort);
  }

  for (const [field, max] of Object.entries(LIMITS)) {
    if (data[field] && String(data[field]).length > max) {
      errors.push(m.tooLong(field, max));
    }
  }

  return errors;
};

export default async function handler(req, res) {
  let m = MESSAGES.sr;

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: m.methodNotAllowed });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const { name = '', email = '', phone = '', subject = '', message = '', website = '', lang = 'sr' } = body;
    const isEnglish = lang === 'en';
    m = isEnglish ? MESSAGES.en : MESSAGES.sr;

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY nije postavljen.');
      return res.status(500).json({ error: m.unavailable });
    }

    // Honeypot: polje je skriveno u formi, pa ga popunjavaju samo botovi.
    // Njima vraćamo uspjeh da ne pokušavaju ponovo, ali mejl ne šaljemo.
    if (website) {
      return res.status(200).json({ success: true });
    }

    const errors = validate({ name, email, phone, subject, message }, m);
    if (errors.length > 0) {
      return res.status(400).json({ error: errors.join(' ') });
    }

    const { data, error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email.trim(),
      // [EN] u naslovu — upit je stigao sa engleske verzije sajta
      subject: `${isEnglish ? '[EN] ' : ''}Sajt — ${subject.trim()} (${name.trim()})`,
      html: `
        <h2>Nova poruka sa sajta stamparijamadex.com${isEnglish ? ' (engleska verzija)' : ''}</h2>
        <p><strong>Ime i prezime:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone.trim()) || '—'}</p>
        <p><strong>Naslov:</strong> ${escapeHtml(subject.trim())}</p>
        <h3>Poruka</h3>
        <p>${escapeHtml(message.trim()).replace(/\n/g, '<br />')}</p>
        <hr />
        <p style="color:#666;font-size:12px">
          Na ovaj mejl možete odgovoriti direktno — odgovor ide na adresu pošiljaoca.
        </p>
      `,
      text: [
        `Nova poruka sa sajta stamparijamadex.com${isEnglish ? ' (engleska verzija)' : ''}`,
        '',
        `Ime i prezime: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Telefon: ${phone.trim() || '—'}`,
        `Naslov: ${subject.trim()}`,
        '',
        'Poruka:',
        message.trim(),
      ].join('\n'),
    });

    if (error) {
      console.error('Resend greška:', error);
      return res.status(502).json({ error: m.sendFailed });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Greška u /api/contact:', err);
    return res.status(500).json({ error: m.serverError });
  }
}
