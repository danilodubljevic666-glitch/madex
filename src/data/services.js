// Sadržaj za zasebne SEO stranice usluga (srpska verzija).
// Svaki slug odgovara ruti, npr. /stampa-majica-niksic, i ujedno je id usluge.
// Engleski prevod je u services.en.js — komponente koriste getServices(lang).
import { servicesEn } from './services.en.js';

export const services = [
  {
    slug: 'stampa-majica-niksic',
    icon: 'Shirt',
    navLabel: 'Štampa na majicama',
    shortDescription:
      'Pojedinačne majice i veći tiraži za klubove, firme i proslave — digitalna ili sito štampa, uz probni izgled prije izrade.',
    metaTitle: 'Štampa na majicama Nikšić — brza izrada | MADEX',
    metaDescription:
      'Štampa na majicama u Nikšiću — pamučne i poliester majice, timske i promo majice, brza izrada za 3-5 dana. Pozovite Štampariju MADEX za besplatnu ponudu.',
    keywords:
      'štampa na majicama Nikšić, štampanje majica Nikšić, promo majice Nikšić, timske majice Nikšić, majice po mjeri Nikšić',
    badge: 'ŠTAMPA NA MAJICAMA',
    h1: 'Štampa na majicama u Nikšiću',
    heroLead:
      'Štamparija MADEX već više od 20 godina štampa majice za timove, firme i pojedince u Nikšiću i cijeloj Crnoj Gori. Bilo da vam treba jedna majica ili nekoliko stotina komada, radimo brzo i uz stalnu kontrolu kvaliteta.',
    sections: [
      {
        heading: 'Za koga radimo štampu na majicama',
        paragraphs: [
          'Štampu na majicama u Nikšiću najčešće naručuju sportski klubovi i rekreativne ekipe kojima treba prepoznatljiv dres za trening ili turnir, firme koje žele majice sa logom za zaposlene ili promotivne akcije, škole i vrtići za maturska i tematska događanja, kao i pojedinci koji žele originalan poklon ili majicu za rođendan, mladenačku zabavu ili proslavu.',
          'Radimo i manje serije za privatne narudžbe i velike tiraže za firme — obim posla prilagođavamo svakom klijentu, bez obzira da li vam treba pet ili petsto majica.',
        ],
      },
      {
        heading: 'Materijali i tehnika štampe',
        paragraphs: [
          'Štampamo na 100% pamučnim i poliester majicama, u veličinama i bojama koje su dostupne kod naših dobavljača. U zavisnosti od dizajna i tiraža, biramo tehniku štampe koja daje najbolji i najtrajniji rezultat — od digitalne štampe za detaljne i višebojne motive do sito štampe za veće tiraže sa jednostavnijim dizajnom.',
          'Prije štampe svaki dizajn prilagođavamo formatu majice i šaljemo vam probni izgled na odobrenje, tako da nema iznenađenja kada roba stigne.',
        ],
      },
      {
        heading: 'Brza izrada i dostava',
        paragraphs: [
          'Većinu narudžbi za štampu majica završavamo u roku od 3 do 5 radnih dana od potvrde dizajna, a za hitne slučajeve (turniri, proslave u zadnji čas) trudimo se da izradu ubrzamo — samo nam recite rok kada nas kontaktirate. Za narudžbe preko 50€ dostava u Podgorici je besplatna, a majice možete preuzeti i lično u našoj štampariji u Nikšiću.',
        ],
      },
    ],
    features: ['100% pamuk i poliester majice', 'Digitalna i sito štampa po izboru', 'Brza izrada — 3 do 5 radnih dana', 'Sve veličine i boje'],
    forWho: ['Sportski klubovi i rekreativne ekipe', 'Firme — majice sa logom za zaposlene', 'Škole, vrtići, maturske generacije', 'Pojedinci — pokloni i proslave'],
    images: [
      { src: '/radovi/stampa-majica-1.webp', sm: '/radovi/stampa-majica-1-sm.webp', alt: 'Štampane majice za sportske timove u Nikšiću' },
      { src: '/radovi/stampa-majica-2.webp', sm: '/radovi/stampa-majica-2-sm.webp', alt: 'Majice sa logom za promociju brenda' },
      { src: '/radovi/stampa-majica-3.webp', sm: '/radovi/stampa-majica-3-sm.webp', alt: 'Majice po mjeri za posebne prilike' },
    ],
    faq: [
      {
        q: 'Koji je minimalan broj majica za narudžbu?',
        a: 'Nema minimuma — štampamo i pojedinačne majice i velike tiraže za firme i klubove. Cijena po komadu zavisi od broja majica i veličine dizajna, pa nam se javite za konkretnu ponudu.',
      },
      {
        q: 'Koliko traje izrada štampanih majica?',
        a: 'Većina narudžbi je gotova za 3 do 5 radnih dana od kada odobrite dizajn. Za hitne rokove (turnir, proslava) javite nam se unaprijed i potrudićemo se da izradu ubrzamo.',
      },
      {
        q: 'Mogu li poslati sopstveni dizajn ili logo?',
        a: 'Da, možete poslati gotov dizajn u digitalnom formatu, a ako ga nemate, naš tim za grafički dizajn može ga pripremiti za štampu.',
      },
    ],
    related: ['sito-stampa-niksic', 'digitalna-stampa-niksic', 'graficki-dizajn-niksic'],
  },

  {
    slug: 'digitalna-stampa-niksic',
    icon: 'Printer',
    navLabel: 'Digitalna štampa',
    shortDescription:
      'Flajeri, brošure, plakati i cjenovnici u manjim tiražima, gotovi za nekoliko dana i bez troškova pripreme klišea.',
    metaTitle: 'Digitalna štampa Nikšić — brza štampa malih tiraža | MADEX',
    metaDescription:
      'Digitalna štampa u Nikšiću za flajere, brošure, plakate i poslovni materijal. Visoka rezolucija, mali tiraži, brza izrada. Pozovite Štampariju MADEX.',
    keywords: 'digitalna štampa Nikšić, štampanje flajera Nikšić, štampa brošura Nikšić, štamparija Nikšić',
    badge: 'DIGITALNA ŠTAMPA',
    h1: 'Digitalna štampa u Nikšiću',
    heroLead:
      'Za flajere, brošure, plakate, cjenovnike i svaki drugi promotivni ili poslovni materijal koji vam treba brzo i u manjem tiražu, digitalna štampa je najbrže i najisplativije rješenje. Štamparija MADEX u Nikšiću štampa digitalno svakog radnog dana.',
    sections: [
      {
        heading: 'Šta štampamo digitalnom tehnikom',
        paragraphs: [
          'Digitalnom štampom u našoj štampariji izrađujemo flajere, brošure, letke, plakate, cjenovnike, pozivnice, kataloge, vizit karte i drugi poslovni i promotivni materijal. Tehnika je idealna kada vam treba manji tiraž, kratak rok izrade ili štampa sa promjenljivim podacima na svakom primjerku.',
        ],
      },
      {
        heading: 'Zašto digitalna štampa',
        paragraphs: [
          'Digitalna štampa ne zahtijeva izradu klišea ni pripremu koja traje danima, pa je zato mnogo brža i isplativija od ofsetne štampe kada vam treba manji broj primjeraka — od jednog do nekoliko stotina komada. Boje su jarke i precizne, a svaki otisak možemo prilagoditi ili izmijeniti bez dodatnih troškova pripreme.',
        ],
      },
      {
        heading: 'Papiri, formati i izrada',
        paragraphs: [
          'Radimo na različitim vrstama i gramažama papira, u standardnim i prilagođenim formatima, u boji ili crno-bijelo, jednostrano ili obostrano. Ako niste sigurni koji format ili papir vam odgovara, naš tim će vam predložiti rješenje na osnovu namjene materijala i budžeta.',
        ],
      },
    ],
    features: ['Visoka rezolucija štampe', 'Mali tiraži bez dodatnih troškova', 'Brza izrada, obično 3-5 radnih dana', 'Širok spektar papira i formata'],
    forWho: ['Firme kojima treba brzi promotivni materijal', 'Restorani i kafići — jelovnici i cjenovnici', 'Organizatori događaja — pozivnice i plakati', 'Svako kome treba mali tiraž bez čekanja'],
    images: [
      { src: '/radovi/jelovnici-sandwich-bar.webp', sm: '/radovi/jelovnici-sandwich-bar-sm.webp', alt: 'Digitalno štampani jelovnici i cjenovnici za sandwich bar' },
      { src: '/radovi/flajeri-kosarkaska-skola.webp', sm: '/radovi/flajeri-kosarkaska-skola-sm.webp', alt: 'Flajeri za upis u košarkašku školu' },
      { src: '/radovi/flajeri-raft-camp.webp', sm: '/radovi/flajeri-raft-camp-sm.webp', alt: 'Plastificirani flajeri za raft kamp' },
    ],
    faq: [
      {
        q: 'Koja je razlika između digitalne i ofset štampe?',
        a: 'Digitalna štampa je brža i isplativija za manje tiraže jer ne zahtijeva izradu klišea, dok je ofset štampa isplativija za velike tiraže gdje je cijena po primjerku niža. Ako niste sigurni šta vam više odgovara, javite nam se — predložićemo najbolju opciju za vaš tiraž.',
      },
      {
        q: 'Koliko brzo mogu dobiti digitalno odštampan materijal?',
        a: 'Za manje tiraže flajera i brošura izrada obično traje 3 do 5 radnih dana, a za hitne narudžbe javite nam se unaprijed da vidimo mogućnosti bržeg roka.',
      },
      {
        q: 'Mogu li štampati samo jedan primjerak?',
        a: 'Da, digitalna štampa omogućava i pojedinačne otiske bez dodatnih troškova pripreme, što je čini pogodnom i za probne primjerke prije većeg tiraža.',
      },
    ],
    related: ['vizit-kartice-niksic', 'ofset-stampa-niksic', 'graficki-dizajn-niksic'],
  },

  {
    slug: 'vizit-kartice-niksic',
    icon: 'CreditCard',
    navLabel: 'Vizit kartice',
    shortDescription:
      'Vizit kartice sa mat, sjajnom ili UV lak obradom na kvalitetnom kartonu, uz dostavu u sve gradove Crne Gore.',
    metaTitle: 'Vizit kartice Nikšić — štampa i dizajn, dostava širom Crne Gore | MADEX',
    metaDescription:
      'Štampa vizit kartica u Nikšiću — mat, sjajna i UV lak obrada, kvalitetan karton, brza izrada. Šaljemo u sve gradove Crne Gore. Pozovite Štampariju MADEX za ponudu.',
    keywords:
      'vizit kartice Nikšić, štampa vizit kartica Nikšić, vizit karte Crna Gora, poslovne kartice Nikšić, dizajn vizit kartice Nikšić, vizit kartice online Crna Gora, vizit kartice Podgorica',
    badge: 'VIZIT KARTICE',
    h1: 'Štampa vizit kartica u Nikšiću',
    heroLead:
      'Vizit kartica je često prvi fizički kontakt klijenta sa vašim brendom. Štamparija MADEX u Nikšiću štampa poslovne vizit kartice po mjeri — od klasičnog do premium izgleda — i šalje ih u sve gradove Crne Gore, ne samo u Nikšić.',
    sections: [
      {
        heading: 'Papir, karton i završna obrada',
        paragraphs: [
          'Vizit kartice štampamo na kvalitetnom, debljem kartonu koji djeluje reprezentativno u ruci, sa mat, sjajnom ili UV lak završnom obradom po izboru. Mat obrada daje elegantan i diskretan izgled, sjajna naglašava boje i kontraste, a UV lak (djelimičan ili preko cijele kartice) izdvaja logo ili detalje sa efektnim sjajem.',
        ],
      },
      {
        heading: 'Dizajn vizit kartice',
        paragraphs: [
          'Ako već imate logo i vizuelni identitet, pripremamo vizit kartice tako da savršeno odgovaraju postojećem brendu. Ako tek pokrećete posao ili želite osvježen izgled, naš tim za grafički dizajn kreira dizajn od nule — dovoljno je da nam kažete čime se bavite i kakav utisak želite da ostavite.',
        ],
      },
      {
        heading: 'Dostava u sve gradove Crne Gore',
        paragraphs: [
          'Iako je naša štamparija u Nikšiću, redovno radimo sa klijentima iz cijele Crne Gore — Podgorice, Bara, Budve, Herceg Novog, Kotora i drugih gradova. Dizajn i dogovor oko narudžbe obavljamo putem telefona, mejla ili WhatsApp-a, a gotove vizit kartice šaljemo kurirskom službom ili poštom na vašu adresu, bez obzira gdje se nalazite.',
        ],
      },
    ],
    features: ['Mat, sjajna i UV lak obrada', 'Kvalitetan, deblji karton', 'Dizajn po želji ili gotov predložak', 'Dostava u sve gradove Crne Gore'],
    forWho: ['Preduzetnici i firme', 'Slobodne profesije — advokati, agenti, konsultanti', 'Firme koje otvaraju novu poslovnicu', 'Svako kome treba brza dostava van Nikšića'],
    images: [
      { src: '/radovi/vizit-kartice-clear-view.webp', sm: '/radovi/vizit-kartice-clear-view-sm.webp', alt: 'Vizit kartice za firmu za pranje prozora i fasada' },
      { src: '/radovi/vizit-kartice-fizioterapija.webp', sm: '/radovi/vizit-kartice-fizioterapija-sm.webp', alt: 'Vizit kartice za fizioterapeutski centar u Nikšiću' },
      { src: '/radovi/kartica-zlatni-detalji.webp', sm: '/radovi/kartica-zlatni-detalji-sm.webp', alt: 'Kartica sa zlatnim detaljima na kvalitetnom kartonu' },
    ],
    faq: [
      {
        q: 'Da li dostavljate vizit kartice i van Nikšića, npr. u Podgoricu ili Bar?',
        a: 'Da, redovno šaljemo vizit kartice kurirskom službom ili poštom u sve gradove Crne Gore. Cijeli proces — dogovor, dizajn i plaćanje — možemo obaviti na daljinu, bez potrebe da dolazite u Nikšić.',
      },
      {
        q: 'Koji je minimalan tiraž za vizit kartice?',
        a: 'Radimo i manje i veće tiraže. Javite nam okvirnu količinu i vrstu obrade (mat, sjaj, UV lak) i pripremićemo vam konkretnu ponudu.',
      },
      {
        q: 'Nemam gotov dizajn — možete li ga vi napraviti?',
        a: 'Da, naš tim za grafički dizajn može kreirati dizajn vizit kartice od nule ili prilagoditi postojeći logo i vizuelni identitet.',
      },
    ],
    related: ['graficki-dizajn-niksic', 'digitalna-stampa-niksic', 'ofset-stampa-niksic'],
  },

  {
    slug: 'ofset-stampa-niksic',
    icon: 'Layers',
    navLabel: 'Ofset štampa',
    shortDescription:
      'Veliki tiraži uz najnižu cijenu po primjerku — blokovi, obrasci, katalozi i knjige u dosljednom kvalitetu otiska.',
    metaTitle: 'Ofset štampa Nikšić — veliki tiraži, niža cijena | MADEX',
    metaDescription:
      'Ofset štampa u Nikšiću za kataloge, blokove, obrasce i ambalažu — veliki tiraži uz nižu cijenu po primjerku i visok kvalitet otiska. Pozovite Štampariju MADEX.',
    keywords: 'ofset štampa Nikšić, štampanje kataloga Nikšić, štampa blokova Nikšić, veliki tiraž štampa Nikšić',
    badge: 'OFSET ŠTAMPA',
    h1: 'Ofset štampa u Nikšiću',
    heroLead:
      'Kada vam treba veliki tiraž — kataloga, časopisa, ambalaže, blokova ili poslovnih obrazaca — ofset štampa daje najbolji odnos kvaliteta i cijene po primjerku. Štamparija MADEX u Nikšiću radi ofset štampu za firme širom Crne Gore.',
    sections: [
      {
        heading: 'Kada se isplati ofset štampa',
        paragraphs: [
          'Ofset štampa se isplati onda kada vam treba veći tiraž istog materijala — obično od nekoliko stotina primjeraka naviše. Cijena izrade klišea i pripreme štampe se raspoređuje na veći broj otisaka, pa cijena po komadu značajno pada u odnosu na digitalnu štampu. Zbog toga je ofset standardni izbor za kataloge, brošure, blokove, fascikle, obrasce, kalendare i ambalažu koje firme naručuju u većim količinama, po pravilu jednom ili nekoliko puta godišnje.',
        ],
      },
      {
        heading: 'Kvalitet i materijali',
        paragraphs: [
          'Ofsetna štampa daje izuzetno oštar i precizan otisak, sa vjernim prenošenjem boja i finim detaljima teksta i slika, što je posebno važno kod materijala sa puno teksta ili preciznim brendiranjem. Radimo na širokom izboru papira i kartona, različitih gramaža i završne obrade, u zavisnosti od namjene — od jednostavnih obrazaca do reprezentativnih kataloga i poslovnih materijala visokog kvaliteta.',
        ],
      },
      {
        heading: 'Kako izgleda proces narudžbe',
        paragraphs: [
          'Nakon što nam pošaljete dizajn i informaciju o željenom tiražu, formatu i papiru, pripremamo probni otisak na odobrenje, a tek nakon vaše potvrde krećemo u štampu cijelog tiraža. Rok izrade zavisi od tiraža i složenosti materijala, a mi vam unaprijed dajemo realan rok kako biste mogli da planirate preuzimanje ili dostavu.',
        ],
      },
    ],
    features: ['Veliki tiraži uz nižu cijenu po komadu', 'Visok kvalitet i precizan otisak', 'Različiti papiri i kartoni', 'Za kataloge, blokove, obrasce, ambalažu'],
    forWho: ['Firme kojima treba veći tiraž materijala', 'Izdavaštvo — časopisi i katalozi', 'Proizvođači kojima treba štampana ambalaža', 'Poslovni obrasci i blokovi u većim količinama'],
    images: [
      { src: '/radovi/katalog-horski-festival.webp', sm: '/radovi/katalog-horski-festival-sm.webp', alt: 'Katalog Međunarodnog horskog festivala u Herceg Novom' },
      { src: '/radovi/blokovi-ncr-obrasci.webp', sm: '/radovi/blokovi-ncr-obrasci-sm.webp', alt: 'Blokovi i samokopirajući (NCR) obrasci u većem tiražu' },
      { src: '/radovi/obrasci-ugovor-o-najmu.webp', sm: '/radovi/obrasci-ugovor-o-najmu-sm.webp', alt: 'Obrasci ugovora o najmu vozila za rent-a-car' },
    ],
    faq: [
      {
        q: 'Od koliko primjeraka se isplati ofset štampa?',
        a: 'Ofset postaje isplativiji od digitalne štampe obično već od nekoliko stotina primjeraka, u zavisnosti od formata i broja boja. Javite nam tiraž koji vam treba i predložićemo najisplativiju tehniku.',
      },
      {
        q: 'Koliko traje izrada ofset štampe?',
        a: 'Rok zavisi od tiraža i pripreme materijala, ali za većinu narudžbi je potrebno nešto više vremena nego za digitalnu štampu jer se prvo izrađuje proba za odobrenje. Tačan rok dobijate odmah po dogovoru o tiražu i formatu.',
      },
      {
        q: 'Mogu li dobiti probni otisak prije cijelog tiraža?',
        a: 'Da, prije pokretanja cijelog tiraža uvijek pravimo probni otisak koji morate odobriti — tako izbjegavamo greške na cijeloj seriji.',
      },
    ],
    related: ['digitalna-stampa-niksic', 'stampa-kutije-niksic', 'graficki-dizajn-niksic'],
  },

  {
    slug: 'brendiranje-vozila-niksic',
    icon: 'Car',
    navLabel: 'Brendiranje vozila',
    shortDescription:
      'Djelimično ili potpuno oblijepljivanje vozila kvalitetnim vinil folijama, sa mjerenjem na terenu i montažom kod nas.',
    metaTitle: 'Brendiranje vozila Nikšić — vinil folije, cijelo ili djelimično | MADEX',
    metaDescription:
      'Brendiranje vozila u Nikšiću — automobili, kombiji i kamioni, vinil folije otporne na vremenske uslove. Besplatna procjena na terenu. Štamparija MADEX.',
    keywords: 'brendiranje vozila Nikšić, oblepljivanje vozila Nikšić, folija za auto Nikšić, brendirana vozila Crna Gora',
    badge: 'BRENDIRANJE VOZILA',
    h1: 'Brendiranje vozila u Nikšiću',
    heroLead:
      'Brendirano vozilo je pokretni bilbord koji svaki dan promoviše vaš biznis. Štamparija MADEX u Nikšiću radi kompletno brendiranje automobila, kombija i kamiona vinil folijama, od djelimičnog oblijepljivanja do potpune promjene izgleda vozila.',
    sections: [
      {
        heading: 'Djelimično ili potpuno brendiranje',
        paragraphs: [
          'U zavisnosti od budžeta i cilja, vozilo možemo obraditi djelimično — logom, kontakt podacima i osnovnim grafičkim elementima na vratima i zadnjem staklu — ili u potpunosti, gdje cijela karoserija dobija novi, brendirani izgled. Djelimično brendiranje je brže i jeftinije rješenje za manje flote i pojedinačna vozila, dok je potpuno oblijepljivanje najefikasnije za dostavna i servisna vozila koja su svaki dan vidljiva velikom broju ljudi u gradu.',
        ],
      },
      {
        heading: 'Materijal i trajnost',
        paragraphs: [
          'Za brendiranje vozila koristimo kvalitetne vinil folije otporne na atmosferske uslove, sunce i pranje, koje na vozilu mogu ostati više godina bez gubitka boje i kvaliteta štampe. Folija se lako i uredno skida bez oštećenja originalnog laka vozila, što znači da brendiranje ne utiče na vrijednost vozila prilikom eventualne prodaje ili promjene voznog parka.',
        ],
      },
      {
        heading: 'Proces izrade — od mjere do postavljanja',
        paragraphs: [
          'Prije izrade dolazimo na teren da izmjerimo vozilo i napravimo procjenu, potpuno besplatno i bez obaveze. Na osnovu mjera i vašeg loga pripremamo dizajn, štampamo foliju i zakazujemo postavljanje u našoj radionici. Cijeli proces, od dogovora do gotovog brendiranog vozila, obično traje svega nekoliko dana, u zavisnosti od obima posla i broja vozila.',
        ],
      },
    ],
    features: ['Vinil folije otporne na vremenske uslove', 'Djelimično ili potpuno brendiranje', 'Besplatna procjena na terenu', 'Lako i uredno skidanje bez oštećenja laka'],
    forWho: ['Dostavne i servisne firme', 'Preduzetnici sa jednim ili više vozila', 'Firme koje mijenjaju vizuelni identitet', 'Rent-a-car i taxi službe'],
    images: [
      { src: '/radovi/brendiranje-kombija-st-decorations.webp', sm: '/radovi/brendiranje-kombija-st-decorations-sm.webp', alt: 'Brendiran kombi za dekoraciju balona, Nikšić' },
      { src: '/radovi/brendiranje-kampera.webp', sm: '/radovi/brendiranje-kampera-sm.webp', alt: 'Kamper oblijepljen dekorativnim vinil folijama' },
      { src: '/radovi/brendiranje-kombija-cvjetni-motivi.webp', sm: '/radovi/brendiranje-kombija-cvjetni-motivi-sm.webp', alt: 'Brendiran kombi sa cvjetnim motivima i ilustracijom' },
      { src: '/radovi/brendiranje-kampera-pozadi.webp', sm: '/radovi/brendiranje-kampera-pozadi-sm.webp', alt: 'Vinil grafika na zadnjem dijelu kampera' },
      { src: '/radovi/brendiranje-kombija-pekara.webp', sm: '/radovi/brendiranje-kombija-pekara-sm.webp', alt: 'Potpuno brendiran dostavni kombi pekare' },
      { src: '/radovi/brendiranje-kamiona.webp', sm: '/radovi/brendiranje-kamiona-sm.webp', alt: 'Profesionalno brendiran kamion' },
    ],
    faq: [
      {
        q: 'Da li brendiranje oštećuje lak vozila?',
        a: 'Ne. Vinil folija se nanosi i skida bez oštećenja originalnog laka, ako se postavljanje i skidanje rade profesionalno, kako to radimo u našoj radionici.',
      },
      {
        q: 'Koliko traje izrada brendiranja za jedno vozilo?',
        a: 'Nakon besplatnog mjerenja na terenu i dogovora oko dizajna, izrada i postavljanje obično traju svega nekoliko dana.',
      },
      {
        q: 'Da li dolazite na teren za mjerenje vozila?',
        a: 'Da, besplatno dolazimo na teren da izmjerimo vozilo i napravimo procjenu prije nego što krenemo u izradu.',
      },
    ],
    related: ['brendiranje-objekata-niksic', 'baneri-pvc-folija-niksic', 'graficki-dizajn-niksic'],
  },

  {
    slug: 'brendiranje-objekata-niksic',
    icon: 'Building',
    navLabel: 'Brendiranje objekata',
    shortDescription:
      'Izlozi, staklene površine, zidovi i table — vizuelni identitet vašeg poslovnog prostora od ideje do postavljanja.',
    metaTitle: 'Brendiranje poslovnih objekata Nikšić — izlozi, zidovi | MADEX',
    metaDescription:
      'Brendiranje poslovnih objekata u Nikšiću — izlozi, staklene površine, zidovi i enterijeri. Besplatna posjeta i procjena prostora. Štamparija MADEX.',
    keywords: 'brendiranje objekata Nikšić, brendiranje izloga Nikšić, oblepljivanje zidova Nikšić, vizuelni identitet poslovnog prostora',
    badge: 'BRENDIRANJE OBJEKATA',
    h1: 'Brendiranje poslovnih objekata u Nikšiću',
    heroLead:
      'Izlog, ulaz i enterijer vašeg poslovnog prostora su prva stvar koju kupci vide. Štamparija MADEX u Nikšiću brendira izloge, staklene površine, zidove i enterijere poslovnih prostora tako da vizuelni identitet vašeg brenda bude prepoznatljiv na prvi pogled.',
    sections: [
      {
        heading: 'Šta sve možemo da brendiramo',
        paragraphs: [
          'Radimo brendiranje izloga i staklenih površina folijama sa logom ili grafikom, oblijepljivanje unutrašnjih zidova, izradu i postavljanje reklamnih panoa i natpisa, kao i uređenje enterijera printanim grafikama prilagođenim prostoru. Bilo da vodite kafić, salon, kancelariju ili prodavnicu, brendiranje prilagođavamo veličini i namjeni prostora.',
        ],
      },
      {
        heading: 'Zašto je brendiranje objekta važno',
        paragraphs: [
          'Brendiran poslovni prostor odmah komunicira profesionalnost i ozbiljnost firme, a dobro osmišljen izlog privlači pažnju prolaznika i pretvara ih u potencijalne kupce. Osim estetske vrijednosti, brendirane površine — posebno izlozi i zidovi — funkcionišu i kao dugotrajan reklamni prostor koji radi za vas svaki dan, bez dodatnih mjesečnih troškova oglašavanja.',
        ],
      },
      {
        heading: 'Kako izgleda saradnja s nama',
        paragraphs: [
          'Proces počinje besplatnom posjetom vašem prostoru gdje uzimamo mjere i predlažemo rješenja u skladu sa prostorom i budžetom. Nakon dogovora o dizajnu, materijal štampamo u našoj štampariji i dolazimo na lice mjesta da ga profesionalno postavimo. Trudimo se da postavljanje organizujemo u terminima koji najmanje ometaju vaše redovno poslovanje.',
        ],
      },
    ],
    features: ['Brendiranje izloga i staklenih površina', 'Oblijepljivanje zidova i enterijera', 'Reklamni panoi i natpisi', 'Besplatna posjeta i procjena prostora'],
    forWho: ['Kafići, restorani i saloni', 'Kancelarije i poslovni prostori', 'Prodavnice i showroom-i', 'Firme koje mijenjaju vizuelni identitet'],
    images: [
      { src: '/radovi/brendiranje-izloga-kafica.webp', sm: '/radovi/brendiranje-izloga-kafica-sm.webp', alt: 'Brendiranje izloga i ulaza kafe bara u Nikšiću' },
    ],
    faq: [
      {
        q: 'Da li dolazite da vidite prostor prije nego što damo ponudu?',
        a: 'Da, besplatno dolazimo na lice mjesta, uzimamo mjere i predlažemo rješenje prilagođeno vašem prostoru.',
      },
      {
        q: 'Koliko dugo traje postavljanje brendiranja u objektu?',
        a: 'Zavisi od obima posla — manji izlog se obično brendira za jedan dan, dok veći projekti (enterijer, više prostorija) mogu trajati nešto duže. Tačan rok dobijate nakon obilaska prostora.',
      },
      {
        q: 'Da li folija na izlogu ometa vidljivost iznutra?',
        a: 'Ne mora — folije mogu biti perforirane (vidljive samo sa spoljne strane) ili pune, u zavisnosti od toga koliko svjetlosti i vidljivosti želite da zadržite u prostoru. Predložićemo najbolju opciju na licu mjesta.',
      },
    ],
    related: ['brendiranje-vozila-niksic', 'baneri-pvc-folija-niksic', 'graficki-dizajn-niksic'],
  },

  {
    slug: 'baneri-pvc-folija-niksic',
    icon: 'Image',
    navLabel: 'Baneri i PVC folija',
    shortDescription:
      'Baneri, roll-up displeji i plakati na PVC foliji, otporni na sunce i kišu, u formatu po vašoj mjeri.',
    metaTitle: 'Štampa banera i PVC folije Nikšić — plakati, roll-up | MADEX',
    metaDescription:
      'Štampa banera, plakata i roll-up displeja na PVC foliji u Nikšiću — vremenski otporni materijali, brza izrada. Pozovite Štampariju MADEX za ponudu.',
    keywords: 'štampa banera Nikšić, PVC folija Nikšić, roll-up Nikšić, štampa plakata Nikšić',
    badge: 'BANERI I PVC FOLIJA',
    h1: 'Štampa banera i PVC folije u Nikšiću',
    heroLead:
      'Za spoljnu i unutrašnju reklamu — baner iznad ulaza, plakat za akciju, roll-up za sajam ili dekorativnu foliju u prostoru — Štamparija MADEX u Nikšiću štampa na PVC foliji i baner platnu u kratkom roku.',
    sections: [
      {
        heading: 'Šta štampamo na PVC foliji',
        paragraphs: [
          'Na PVC foliji i baner platnu štampamo reklamne bilborde i banere za fasade, plakate za akcije i događaje, roll-up i X-banere za sajmove i prezentacije, kao i dekorativne folije za izloge i enterijere. Format prilagođavamo prostoru gdje će materijal biti postavljen — od malog plakata do banera širokog nekoliko metara.',
        ],
      },
      {
        heading: 'Otpornost i kvalitet štampe',
        paragraphs: [
          'Materijali koje koristimo za spoljnu štampu su otporni na sunce, kišu i temperaturne razlike, tako da boje ostaju jarke i nakon dužeg izlaganja vremenskim uslovima. Dostupne su različite debljine folije i platna u zavisnosti od toga da li materijal ide na kratkoročnu promociju ili treba da izdrži cijelu sezonu na otvorenom.',
        ],
      },
      {
        heading: 'Brza izrada i instalacija',
        paragraphs: [
          'Baneri i plakati spadaju u materijale koje najbrže izrađujemo — često u roku od svega nekoliko dana od odobrenja dizajna, što je posebno važno kada vam reklama treba za konkretan datum akcije ili događaja. Na zahtjev možemo i da postavimo baner ili foliju na lice mjesta, umjesto da vam samo isporučimo gotov materijal.',
        ],
      },
    ],
    features: ['Baneri, plakati i roll-up displeji', 'Vremenski otporni materijali', 'Različite debljine folije', 'Brza izrada, po potrebi i postavljanje'],
    forWho: ['Firme koje najavljuju akcije i događaje', 'Izlagači na sajmovima (roll-up, X-baneri)', 'Ugostiteljski objekti — spoljna reklama', 'Svako kome treba brz i vidljiv reklamni materijal'],
    images: [
      { src: '/radovi/tabak-naljepnica-pvc.webp', sm: '/radovi/tabak-naljepnica-pvc-sm.webp', alt: 'Tabak naljepnica štampanih na PVC foliji' },
      { src: '/radovi/naljepnice-slep-sluzba.webp', sm: '/radovi/naljepnice-slep-sluzba-sm.webp', alt: 'Naljepnice na PVC foliji za šlep službu' },
    ],
    faq: [
      {
        q: 'Koliko brzo mogu dobiti odštampan baner?',
        a: 'Baneri i plakati spadaju u najbrže usluge koje radimo — najčešće nekoliko dana od odobrenja dizajna. Za tačan rok javite nam format i tiraž.',
      },
      {
        q: 'Da li baner izdrži napolju cijelu sezonu?',
        a: 'Da, koristimo materijale otporne na sunce i kišu koji zadržavaju boju i kvalitet duže vrijeme na otvorenom. Za trajniju spoljnu upotrebu preporučujemo deblju foliju, o čemu ćemo vas posavjetovati prilikom narudžbe.',
      },
      {
        q: 'Da li vršite i postavljanje banera?',
        a: 'Da, na zahtjev možemo da postavimo baner ili foliju na lice mjesta, ne samo da vam isporučimo gotov materijal.',
      },
    ],
    related: ['brendiranje-objekata-niksic', 'brendiranje-vozila-niksic', 'digitalna-stampa-niksic'],
  },

  {
    slug: 'graficki-dizajn-niksic',
    icon: 'Palette',
    navLabel: 'Grafički dizajn',
    shortDescription:
      'Logo, vizuelni identitet i priprema za štampu — dizajn koji odmah možemo i odštampati u istoj kući.',
    metaTitle: 'Grafički dizajn Nikšić — logo i vizuelni identitet | MADEX',
    metaDescription:
      'Grafički dizajn u Nikšiću — logotipi, vizuelni identitet i priprema materijala za štampu. Dizajn i štampa na jednom mjestu. Štamparija MADEX.',
    keywords: 'grafički dizajn Nikšić, izrada logotipa Nikšić, dizajn vizuelnog identiteta Nikšić, priprema za štampu Nikšić, grafički dizajn Crna Gora, izrada logotipa Crna Gora',
    badge: 'GRAFIČKI DIZAJN',
    h1: 'Grafički dizajn u Nikšiću',
    heroLead:
      'Prije nego što bilo šta odštampamo, dizajn mora biti dobar. Tim Štamparije MADEX u Nikšiću izrađuje logotipe, vizuelni identitet i sav grafički materijal potreban za štampu ili digitalnu upotrebu.',
    sections: [
      {
        heading: 'Šta izrađujemo',
        paragraphs: [
          'Bavimo se izradom logotipa i vizuelnog identiteta firme, pripremom materijala za štampu — od vizit kartica i flajera do banera i ambalaže — kao i dizajnom materijala za društvene mreže i digitalnu upotrebu. Ako već imate logo ili smjernice brenda, dizajn prilagođavamo postojećem identitetu; ako tek pokrećete biznis, pomažemo vam da kreirate prepoznatljiv vizuelni identitet od nule.',
        ],
      },
      {
        heading: 'Kako izgleda proces',
        paragraphs: [
          'Proces počinje kratkim razgovorom o tome čime se bavite, kome se obraćate i kakav utisak želite da ostavite. Na osnovu toga predlažemo prvi koncept, a zatim kroz jednu ili više izmjena dolazimo do finalnog rješenja koje vam u potpunosti odgovara. Gotov dizajn dobijate u formatima pogodnim i za štampu i za digitalnu upotrebu.',
        ],
      },
      {
        heading: 'Dizajn i štampa na jednom mjestu',
        paragraphs: [
          'Prednost naručivanja dizajna direktno kod nas je što isti tim koji kreira dizajn zna i kako će se on ponašati kada se odštampa — na majici, baneru, vizit kartici ili ambalaži — pa odmah predlažemo rješenja koja dobro izgledaju i u štampi, ne samo na ekranu. Tako izbjegavate iznenađenja kada gotov materijal stigne iz štampe.',
        ],
      },
      {
        heading: 'Saradnja na daljinu, iz cijele Crne Gore',
        paragraphs: [
          'Dizajn dogovaramo i radimo i sa klijentima van Nikšića — komunikacija ide preko telefona, mejla ili WhatsApp-a, a gotove fajlove i primjere šaljemo elektronski na pregled i odobrenje. Ako uz dizajn želite i štampu, gotov materijal vam šaljemo kurirskom službom u Podgoricu, Bar, Budvu i ostale gradove Crne Gore.',
        ],
      },
    ],
    features: ['Izrada logotipa i vizuelnog identiteta', 'Priprema materijala za štampu', 'Dizajn za društvene mreže', 'Konsultacije i besplatan prvi razgovor'],
    forWho: ['Firme koje pokreću novi biznis', 'Postojeće firme koje osvježavaju identitet', 'Svako kome treba materijal spreman za štampu', 'Firme koje žele dizajn i štampu na jednom mjestu'],
    images: [],
    faq: [
      {
        q: 'Nemam gotov logo, možete li ga vi napraviti?',
        a: 'Da, izrađujemo logotipe od nule na osnovu razgovora o vašem biznisu, ciljnoj publici i željenom utisku.',
      },
      {
        q: 'Da li mogu naručiti samo dizajn, bez štampe kod vas?',
        a: 'Da, dizajn možete naručiti samostalno, ali kada se štampa radi kod nas, dizajn odmah pripremamo tako da savršeno odgovara materijalu i formatu štampe.',
      },
      {
        q: 'Koliko traje izrada logotipa ili vizuelnog identiteta?',
        a: 'Zavisi od obima posla i broja izmjena, ali za osnovni logo obično je dovoljno nekoliko dana od prvog razgovora do finalne verzije.',
      },
    ],
    related: ['vizit-kartice-niksic', 'digitalna-stampa-niksic', 'ofset-stampa-niksic'],
  },

  {
    slug: 'stampa-kutije-niksic',
    icon: 'Package',
    navLabel: 'Štampa na kutijama',
    shortDescription:
      'Kartonska ambalaža sa vašim dizajnom, u standardnim i prilagođenim dimenzijama, za proizvode i poklone.',
    metaTitle: 'Štampa na kartonskim kutijama Nikšić — ambalaža po mjeri | MADEX',
    metaDescription:
      'Štampa na kartonskim kutijama u Nikšiću — ambalaža po mjeri za hranu, poklone i proizvode. Probni primjerak prije cijele serije. Štamparija MADEX.',
    keywords: 'štampa kutija Nikšić, kartonska ambalaža Nikšić, štampa ambalaže Nikšić, poklon kutije Nikšić',
    badge: 'ŠTAMPA NA KUTIJAMA',
    h1: 'Štampa na kartonskim kutijama u Nikšiću',
    heroLead:
      'Za proizvođače hrane, pića i drugih proizvoda kojima treba brendirana ambalaža, Štamparija MADEX u Nikšiću štampa kartonske kutije različitih veličina i namjena, od poklon kutija do ambalaže za proizvode.',
    sections: [
      {
        heading: 'Vrste kutija koje izrađujemo',
        paragraphs: [
          'Izrađujemo kutije za prehrambene proizvode poput sireva i drugih specijaliteta, poklon kutije za maloprodaju, kao i ekološki prihvatljivu ambalažu sa štampanim dizajnom za firme koje vode računa o održivosti. Kutije se rade po mjeri, u dimenzijama koje odgovaraju vašem proizvodu, ne po standardnim šablonima koji ne pristaju savršeno.',
        ],
      },
      {
        heading: 'Zašto brendirana ambalaža',
        paragraphs: [
          'Ambalaža sa vašim logom i dizajnom čini proizvod prepoznatljivim na polici i ostavlja profesionalan utisak na kupca još prije nego što otvori kutiju. Za male i srednje proizvođače, kvalitetno dizajnirana i odštampana kutija često pravi veću razliku u percepciji brenda nego što bi tražili — kupci povezuju izgled ambalaže sa kvalitetom onoga što je unutra.',
        ],
      },
      {
        heading: 'Od dizajna do gotove kutije',
        paragraphs: [
          'Na osnovu dimenzija vašeg proizvoda predlažemo oblik i veličinu kutije, pripremamo dizajn štampe i izrađujemo probni primjerak na odobrenje prije pokretanja cijele serije. Radimo i manje i veće tiraže, u zavisnosti od toga da li vam kutija treba za jednu liniju proizvoda ili za kompletnu proizvodnju.',
        ],
      },
    ],
    features: ['Kutije po mjeri, prilagođene proizvodu', 'Za prehrambene proizvode i poklone', 'Ekološki prihvatljivi materijali', 'Probni primjerak prije cijele serije'],
    forWho: ['Proizvođači hrane i pića', 'Male i srednje proizvodne firme', 'Prodavnice sa poklon programom', 'Firme koje uvode novu liniju proizvoda'],
    images: [
      { src: '/radovi/kutije-za-sir.webp', sm: '/radovi/kutije-za-sir-sm.webp', alt: 'Premium kutije za specijalne sireve sa prilagođenim printom' },
      { src: '/radovi/kutije-eko.webp', sm: '/radovi/kutije-eko-sm.webp', alt: 'Ekološki prihvatljive kutije sa štampanim dizajnom' },
      { src: '/radovi/kutije-poklon.webp', sm: '/radovi/kutije-poklon-sm.webp', alt: 'Poklon kutije sa brendiranim printom' },
    ],
    faq: [
      {
        q: 'Mogu li dobiti kutiju po tačnim dimenzijama mog proizvoda?',
        a: 'Da, kutije radimo po mjeri — na osnovu dimenzija vašeg proizvoda predlažemo oblik i veličinu koja mu najbolje odgovara.',
      },
      {
        q: 'Koji je minimalni tiraž za štampane kutije?',
        a: 'Radimo i manje i veće tiraže, u zavisnosti od vaših potreba. Javite nam približnu količinu i predložićemo najisplativije rješenje.',
      },
      {
        q: 'Da li mogu vidjeti probni primjerak prije nego što se štampa cijela serija?',
        a: 'Da, prije pokretanja cijele serije uvijek izrađujemo probni primjerak koji morate odobriti.',
      },
    ],
    related: ['ofset-stampa-niksic', 'digitalna-stampa-niksic', 'graficki-dizajn-niksic'],
  },

  {
    slug: 'sito-stampa-niksic',
    icon: 'Grid',
    navLabel: 'Sito štampa',
    shortDescription:
      'Debeo i izdržljiv otisak na tekstilu, papiru, plastici i koži — isplativo rješenje za veće tiraže.',
    metaTitle: 'Sito štampa Nikšić — trajan otisak na tekstilu i papiru | MADEX',
    metaDescription:
      'Sito štampa u Nikšiću za tekstil, papir, plastiku i kožu — deblji sloj boje, veća izdržljivost, isplativo za veće tiraže. Štamparija MADEX.',
    keywords: 'sito štampa Nikšić, sitoštampa Nikšić, štampa na tekstilu Nikšić, promotivni tekstil Nikšić',
    badge: 'SITO ŠTAMPA',
    h1: 'Sito štampa u Nikšiću',
    heroLead:
      'Sito štampa je tehnika koja daje najintenzivnije i najtrajnije boje, idealna za tekstil, kožu, papir, plastiku i druge materijale. Štamparija MADEX u Nikšiću radi sito štampu za tiraže gdje je potrebna puna pokrivenost i izdržljivost otiska.',
    sections: [
      {
        heading: 'Na kojim materijalima radimo',
        paragraphs: [
          'Sito štampa kod nas se koristi za tekstil (majice, tekstilne torbe, tekstilne trake), ali i za papir, karton, plastiku, kožu i druge materijale kojima treba deblji, izdržljiv sloj boje. Tehnika je posebno pogodna kada dizajn ima jednu ili nekoliko punih boja bez sitnih prelaza, jer tada daje najbolji i najisplativiji rezultat u odnosu na druge tehnike štampe.',
        ],
      },
      {
        heading: 'Zašto sito štampa',
        paragraphs: [
          'Za razliku od digitalne štampe, sito štampa nanosi deblji sloj boje koji je otporniji na habanje, pranje i svakodnevnu upotrebu, što je čini idealnom za tekstil i proizvode koji se dugo koriste. Boje su pune i intenzivne, a otisak zadržava kvalitet i nakon mnogo pranja ili upotrebe, što je posebno važno za radna odijela, uniforme i promotivni tekstil koji se nosi svakodnevno.',
        ],
      },
      {
        heading: 'Kada je sito štampa bolji izbor od digitalne',
        paragraphs: [
          'Sito štampa se isplati kod većih tiraža sa jednostavnijim, punim bojama — na primjer, uniforme za firmu, promotivne majice sa logom u jednoj ili dvije boje, ili tekstilne torbe za veći broj korisnika. Za manje tiraže ili dizajne sa puno detalja i prelaza boja, češće predlažemo digitalnu štampu — a koju tehniku da koristimo za vaš projekat dogovaramo se nakon što vidimo dizajn i tiraž.',
        ],
      },
    ],
    features: ['Deblji sloj boje, veća izdržljivost', 'Za tekstil, papir, plastiku i kožu', 'Isplativo za veće tiraže', 'Pune i intenzivne boje'],
    forWho: ['Firme kojima treba uniforma ili radna odjeća', 'Klubovi i udruženja — promotivni tekstil', 'Proizvođači ambalaže i papirne galanterije', 'Svako kome treba trajan i izdržljiv otisak'],
    images: [],
    faq: [
      {
        q: 'Koja je razlika između sito štampe i digitalne štampe na majicama?',
        a: 'Sito štampa nanosi deblji, izdržljiviji sloj boje i isplativija je za veće tiraže sa jednostavnijim dizajnom, dok je digitalna štampa brža i isplativija za manje tiraže i detaljnije, višebojne motive.',
      },
      {
        q: 'Da li sito štampa izdrži dugo pranje i nošenje?',
        a: 'Da, jedna od glavnih prednosti sito štampe je izdržljivost — otisak zadržava boju i kvalitet i nakon dužeg korišćenja i pranja.',
      },
      {
        q: 'Na kojim sve materijalima radite sito štampu?',
        a: 'Radimo na tekstilu, papiru, kartonu, plastici i koži, u zavisnosti od projekta.',
      },
    ],
    related: ['stampa-majica-niksic', 'digitalna-stampa-niksic', 'graficki-dizajn-niksic'],
  },
];

// Usluga na traženom jeziku. `id` je uvijek srpski slug (veze između usluga,
// ključevi), a `slug` i `path` su URL na tom jeziku.
const localize = (service, lang) => {
  if (lang !== 'en') return { ...service, id: service.slug, path: `/${service.slug}` };

  const en = servicesEn[service.slug];
  return {
    ...service,
    ...en,
    id: service.slug,
    path: `/en/${en.slug}`,
    images: service.images.map((img, idx) => ({ ...img, alt: en.imageAlts[idx] || img.alt })),
  };
};

const LOCALIZED = {
  sr: services.map((s) => localize(s, 'sr')),
  en: services.map((s) => localize(s, 'en')),
};

export const getServices = (lang) => LOCALIZED[lang] || LOCALIZED.sr;

export const getService = (id, lang) => getServices(lang).find((s) => s.id === id);
