import { useState } from 'react';
import { Send, Mail, User, Phone, MessageSquare, AlertCircle, CheckCircle, Type, Zap, ShieldCheck, Calculator } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';
import {
  EMAIL,
  PHONE_PRIMARY_DISPLAY,
  PHONE_PRIMARY_TEL,
  PHONE_SECONDARY_DISPLAY,
  PHONE_SECONDARY_TEL,
} from '../data/site';
import { CmykBar, GridLines, Halftone, RegistrationMark } from './Decor';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  website: '', // honeypot — skriveno polje koje popunjavaju samo botovi
};

const FIELD_ICONS = { name: User, email: Mail, phone: Phone, subject: Type, message: MessageSquare };
const FIELD_TYPES = { name: 'text', email: 'email', phone: 'tel', subject: 'text', message: 'textarea' };
const AUTOCOMPLETE = { name: 'name', email: 'email', phone: 'tel', subject: 'off', message: 'off' };
const PERK_ICONS = [Zap, Calculator, ShieldCheck];
const MAX_MESSAGE = 1000;
// Fiksni prefiks umjesto useId — isti ID u prerenderu i pri hidraciji
// (na stranici je uvijek samo jedna forma).
const FORM_ID = 'contact';

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone) => !phone || /^[+]?[0-9\s\-()]+$/.test(phone);

const ContactForm = ({ badge, headingStart, headingAccent, intro }) => {
  const { lang, t } = useLanguage();
  const f = t.form;

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const validateForm = () => {
    const e = f.errors;
    const newErrors = {};
    const name = formData.name.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name) newErrors.name = e.nameRequired;
    else if (name.length < 2) newErrors.name = e.nameShort;

    if (!formData.email.trim()) newErrors.email = e.emailRequired;
    else if (!validateEmail(formData.email)) newErrors.email = e.emailInvalid;

    if (!validatePhone(formData.phone)) newErrors.phone = e.phoneInvalid;

    if (!subject) newErrors.subject = e.subjectRequired;
    else if (subject.length < 5) newErrors.subject = e.subjectShort;

    if (!message) newErrors.message = e.messageRequired;
    else if (message.length < 10) newErrors.message = e.messageShort;
    else if (message.length > MAX_MESSAGE) newErrors.message = e.messageLong;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Greška polja nestaje čim korisnik počne da kuca
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus('error');
      setStatusMessage(f.fixErrors);
      return;
    }

    setStatus('sending');
    setStatusMessage(f.sending);

    try {
      // Poruka ide na naš serverless endpoint (/api/contact), koji je dalje
      // šalje mejlom preko Resend-a. API ključ ostaje na serveru.
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, lang }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || f.tryAgain);

      setStatus('success');
      setStatusMessage(f.success);
      setFormData(EMPTY_FORM);
      setErrors({});
    } catch (error) {
      console.error('Greška pri slanju forme:', error);
      setStatus('error');
      setStatusMessage(`${f.errorPrefix} ${error.message || f.tryAgain}`);
    }
  };

  const renderStatus = () => {
    if (!statusMessage || status === 'sending') return null;
    const success = status === 'success';
    const fieldErrors = Object.values(errors).filter(Boolean);

    return (
      <div
        role={success ? 'status' : 'alert'}
        className={`animate-slideDown mb-6 rounded-2xl border p-4 ${
          success ? 'border-green-200 bg-green-50 text-green-800' : 'border-red-200 bg-red-50 text-red-800'
        }`}
      >
        <div className="flex items-start gap-3">
          {success ? (
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
          ) : (
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
          )}
          <div>
            <p className="font-medium">{statusMessage}</p>
            {!success && fieldErrors.length > 0 && (
              <ul className="mt-2 list-inside list-disc text-sm">
                {fieldErrors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderField = (field) => {
    const Icon = FIELD_ICONS[field];
    const config = f.fields[field];
    const id = `${FORM_ID}-${field}`;
    const errorId = `${id}-error`;
    const required = field !== 'phone';
    const hasError = Boolean(errors[field]);
    const inputClass = `w-full rounded-xl border bg-gray-50/60 px-4 py-3.5 pl-11 text-gray-900 placeholder:text-gray-400 transition-all duration-300 focus:bg-white focus:outline-none focus:ring-4 ${
      hasError
        ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
        : 'border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-100'
    }`;

    const common = {
      id,
      name: field,
      value: formData[field],
      onChange: handleChange,
      required,
      placeholder: config.placeholder,
      autoComplete: AUTOCOMPLETE[field],
      'aria-invalid': hasError || undefined,
      'aria-describedby': hasError ? errorId : undefined,
    };

    return (
      <div>
        <label htmlFor={id} className="mb-2 block text-sm font-semibold text-gray-700">
          {config.label}
          {required && <span className="text-ink-magenta"> *</span>}
        </label>
        <div className="relative">
          <Icon
            className={`pointer-events-none absolute left-4 h-4 w-4 text-gray-400 ${field === 'message' ? 'top-4' : 'top-1/2 -translate-y-1/2'}`}
            aria-hidden="true"
          />
          {FIELD_TYPES[field] === 'textarea' ? (
            <textarea {...common} rows="5" maxLength={MAX_MESSAGE + 200} className={`${inputClass} resize-none`} />
          ) : (
            <input {...common} type={FIELD_TYPES[field]} className={inputClass} />
          )}
        </div>
        {hasError && (
          <p id={errorId} className="animate-slideDown mt-2 flex items-center gap-1 text-sm text-red-600">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors[field]}
          </p>
        )}
      </div>
    );
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50/60 py-20 md:py-28">
      <Halftone className="-left-16 bottom-20 h-80 w-80 text-blue-300/50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={Mail}
          badge={badge || f.badge}
          titleTop={headingStart || f.headingStart}
          titleAccent={headingAccent || f.headingAccent}
          lead={intro || f.intro}
        />

        <Reveal variant="scale">
          <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-blue-900/10 ring-1 ring-gray-100 lg:grid-cols-5">
            {/* Lijevo: direktan kontakt */}
            <div className="relative overflow-hidden bg-gray-950 p-8 text-white md:p-12 lg:col-span-2">
              <GridLines className="text-white/[0.06]" />
              <Halftone className="-right-10 -top-10 h-56 w-56 text-ink-cyan/30" />
              <RegistrationMark size={180} strokeWidth={0.5} className="absolute -bottom-14 -left-14 text-white/10 animate-spin-slow" />

              <div className="relative flex h-full flex-col">
                <h3 className="text-2xl font-bold md:text-3xl">{f.directTitle}</h3>
                <CmykBar className="mt-4 h-1 w-20" k="bg-white" />

                <div className="mt-10 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                      <Phone className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="mb-1 font-semibold">{f.phone}</p>
                      <a href={PHONE_PRIMARY_TEL} className="block text-gray-300 transition-colors hover:text-white">{PHONE_PRIMARY_DISPLAY}</a>
                      <a href={PHONE_SECONDARY_TEL} className="block text-gray-300 transition-colors hover:text-white">{PHONE_SECONDARY_DISPLAY}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                      <Mail className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="mb-1 font-semibold">{f.email}</p>
                      <a href={`mailto:${EMAIL}`} className="block break-all text-gray-300 transition-colors hover:text-white">{EMAIL}</a>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-10">
                  <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                    <p className="flex items-center gap-2 font-semibold">
                      <Zap className="h-5 w-5 text-ink-yellow" aria-hidden="true" />
                      {f.fastTitle}
                    </p>
                    <p className="mt-2 text-sm text-gray-400">{f.fastText}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desno: forma */}
            <div className="relative p-6 md:p-10 lg:col-span-3 lg:p-12">
              {status === 'sending' && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/90 backdrop-blur-sm" role="status">
                  <div className="text-center">
                    <div className="relative mx-auto h-14 w-14">
                      <div className="absolute inset-0 rounded-full border-4 border-blue-100" />
                      <div className="absolute inset-0 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
                    </div>
                    <p className="mt-4 font-semibold text-blue-700">{f.sendingOverlay}</p>
                    <p className="mt-1 text-sm text-gray-500">{f.pleaseWait}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {renderStatus()}

                {/* Honeypot — sakriveno od ljudi, popunjavaju ga samo botovi */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor={`${FORM_ID}-website`}>{f.honeypot}</label>
                  <input
                    type="text"
                    id={`${FORM_ID}-website`}
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {renderField('name')}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {renderField('email')}
                  {renderField('phone')}
                </div>
                {renderField('subject')}
                {renderField('message')}

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{f.requiredNote}</span>
                  <span className={formData.message.length > MAX_MESSAGE ? 'font-semibold text-red-600' : ''}>
                    {formData.message.length}/{MAX_MESSAGE}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-shine group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 py-4 text-lg font-semibold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/50 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  <Send className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:translate-x-0.5" aria-hidden="true" />
                  {status === 'sending' ? f.submitting : f.submit}
                </button>
              </form>
            </div>
          </div>
        </Reveal>

        {/* Prednosti */}
        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
          {f.perks.map((perk, idx) => {
            const Icon = PERK_ICONS[idx];
            return (
              <Reveal key={perk.title} delay={idx * 90}>
                <div className="flex h-full items-start gap-4 rounded-3xl bg-white p-6 shadow-lg shadow-gray-900/5 ring-1 ring-gray-100 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{perk.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{perk.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
