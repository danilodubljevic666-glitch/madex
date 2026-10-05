// Galerija radova na početnoj strani. Svaka slika postoji u dvije veličine u
// public/radovi/: <naziv>.webp (1600px, za uvećan prikaz) i <naziv>-sm.webp
// (720px, za mrežu). Opis je ujedno i alt tekst slike.
//
// Prva slika u kategoriji je istaknuta (velika) — najbolje izgleda položena
// (landscape) fotografija. Kategorije imaju 3 ili 6 slika da mreža bude puna.

export const workImage = (name, alt) => ({
  src: `/radovi/${name}.webp`,
  sm: `/radovi/${name}-sm.webp`,
  alt,
});

export const GALLERY = [
  {
    id: 'branding',
    name: { sr: 'Vozila i izlozi', en: 'Vehicles & storefronts' },
    images: [
      workImage('brendiranje-kombija-st-decorations', {
        sr: 'Brendiran kombi za dekoraciju balona — ST Decorations, Nikšić',
        en: 'Wrapped van for a balloon decoration business — ST Decorations, Nikšić',
      }),
      workImage('brendiranje-izloga-kafica', {
        sr: 'Brendiranje izloga i ulaza kafe bara Treska u Nikšiću',
        en: 'Window and entrance branding for Treska café bar in Nikšić',
      }),
      workImage('brendiranje-kampera', {
        sr: 'Kamper oblijepljen dekorativnim vinil folijama',
        en: 'Camper van decorated with vinyl graphics',
      }),
      workImage('brendiranje-kombija-cvjetni-motivi', {
        sr: 'Brendiran kombi sa cvjetnim motivima i ilustracijom',
        en: 'Branded van with floral motifs and an illustration',
      }),
      workImage('brendiranje-kampera-pozadi', {
        sr: 'Vinil grafika sa motivom zalaska sunca na zadnjem dijelu kampera',
        en: 'Sunset vinyl graphic on the back of a camper van',
      }),
      workImage('brendiranje-kombija-pekara', {
        sr: 'Potpuno brendiran dostavni kombi pekare',
        en: 'Fully wrapped bakery delivery van',
      }),
    ],
  },
  {
    id: 'print',
    name: { sr: 'Flajeri i katalozi', en: 'Flyers & catalogues' },
    images: [
      workImage('jelovnici-sandwich-bar', {
        sr: 'Jelovnici i cjenovnici za sandwich bar Mowgli',
        en: 'Menus and price lists for Mowgli sandwich bar',
      }),
      workImage('katalog-horski-festival', {
        sr: 'Katalog Međunarodnog horskog festivala u Herceg Novom',
        en: 'Catalogue for the International Choir Festival in Herceg Novi',
      }),
      workImage('flajeri-kosarkaska-skola', {
        sr: 'Flajeri za upis u košarkašku školu Dribling, Tivat',
        en: 'Enrolment flyers for Dribling basketball school, Tivat',
      }),
      workImage('flajeri-raft-camp', {
        sr: 'Plastificirani flajeri za Montara Raft Camp',
        en: 'Laminated flyers for Montara Raft Camp',
      }),
      workImage('brosura-nikola-tesla', {
        sr: 'Brošura „Nikola Tesla — Prometej modernog doba“',
        en: 'Brochure “Nikola Tesla — Prometheus of the Modern Age”',
      }),
      workImage('flajeri-i-brosure', {
        sr: 'Flajeri i savijene brošure za lokalnu firmu',
        en: 'Flyers and folded brochures for a local business',
      }),
    ],
  },
  {
    id: 'cards',
    name: { sr: 'Vizit kartice', en: 'Business cards' },
    images: [
      workImage('flajeri-i-vizit-kartice', {
        sr: 'Flajeri i vizit kartice za Carpet Diem',
        en: 'Flyers and business cards for Carpet Diem',
      }),
      workImage('vizit-kartice-clear-view', {
        sr: 'Vizit kartice za Clear View Cleaning, Podgorica',
        en: 'Business cards for Clear View Cleaning, Podgorica',
      }),
      workImage('vizit-kartice-dvostrane', {
        sr: 'Dvostrane vizit kartice Magellan',
        en: 'Double-sided Magellan business cards',
      }),
      workImage('vizit-kartice-fizioterapija', {
        sr: 'Vizit kartice za fizioterapeutski centar Fortis, Nikšić',
        en: 'Business cards for Fortis physiotherapy, Nikšić',
      }),
      workImage('kartica-zlatni-detalji', {
        sr: 'Kartica sa zlatnim detaljima za Lovćen Wear',
        en: 'Card with gold details for Lovćen Wear',
      }),
      workImage('vizit-i-servisne-kartice', {
        sr: 'Flajeri, vizit kartice i servisne kartice za auto servis',
        en: 'Flyers, business cards and service cards for a car service',
      }),
    ],
  },
  {
    id: 'stickers',
    name: { sr: 'Naljepnice i etikete', en: 'Stickers & labels' },
    images: [
      workImage('naljepnice-slep-sluzba', {
        sr: 'Naljepnice i kartice za šlep službu',
        en: 'Stickers and cards for a towing service',
      }),
      workImage('tabak-naljepnica-pvc', {
        sr: 'Tabak naljepnica štampanih na PVC foliji',
        en: 'Sheet of stickers printed on PVC vinyl',
      }),
      workImage('etikete-rakija', {
        sr: 'Etikete za domaću lozovu rakiju Mastika',
        en: 'Labels for Mastika homemade grape brandy',
      }),
    ],
  },
  {
    id: 'forms',
    name: { sr: 'Obrasci i ulaznice', en: 'Forms & tickets' },
    images: [
      workImage('ulaznice-fudbalska-utakmica', {
        sr: 'Numerisane ulaznice za utakmicu FK Sutjeska u Ligi šampiona',
        en: 'Numbered tickets for an FK Sutjeska Champions League match',
      }),
      workImage('obrasci-ugovor-o-najmu', {
        sr: 'Obrasci ugovora o najmu vozila za rent-a-car',
        en: 'Rental agreement forms for a car rental company',
      }),
      workImage('blokovi-ncr-obrasci', {
        sr: 'Blokovi i samokopirajući (NCR) obrasci',
        en: 'Pads and carbonless (NCR) forms',
      }),
    ],
  },
  {
    id: 'boxes',
    name: { sr: 'Ambalaža', en: 'Packaging' },
    images: [
      workImage('kutije-za-sir', {
        sr: 'Premium kutije za specijalne sireve sa prilagođenim printom',
        en: 'Premium boxes for specialty cheese with custom print',
      }),
      workImage('kutije-eko', {
        sr: 'Ekološki prihvatljive kutije sa štampanim dizajnom',
        en: 'Eco-friendly boxes with printed design',
      }),
      workImage('kutije-poklon', {
        sr: 'Poklon kutije sa brendiranim printom',
        en: 'Gift boxes with branded print',
      }),
    ],
  },
  {
    id: 'tshirts',
    name: { sr: 'Majice', en: 'T-shirts' },
    images: [
      workImage('stampa-majica-1', {
        sr: 'Prilagođene majice za sportske timove',
        en: 'Custom T-shirts for sports teams',
      }),
      workImage('stampa-majica-2', {
        sr: 'Majice za promociju brendova',
        en: 'T-shirts for brand promotion',
      }),
      workImage('stampa-majica-3', {
        sr: 'Majice po mjeri za posebne prilike',
        en: 'Custom T-shirts for special occasions',
      }),
    ],
  },
];
