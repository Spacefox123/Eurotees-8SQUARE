import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Eurotees™ by Eight', // e.g: 'Name | Developer'
  lang: 'si', // e.g: en, es, fr, jp
  description: 'The official Eurotees™ by Eight website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'EURO',
  name: 'TEES',
  subtitle: 'tees for you',
  btn1: 'About our apparel',
  btn2: 'Our products',
  btn3: 'Our story',
  btn4: 'Where to find us',
  btn5: 'Contact us',
};

// ABOUT DATA
export const aboutData = {
  img: 'aboutus.jpg',
  paragraphOne:
    'Are you tired of always looking at the same boring souvenir T-shirts that people buy and never wear them again? Well so were we! ',
  paragraphTwo:
    'That is why we at EIGHT set out to design and create modern and trendy souvenir T-shirts under the brand name Eurotees™.',
  paragraphThree:
    'With the goal of satisfying modern tourists while also having in mind the importance of retailers, we designed a product that is attractive to both, due to our constantly updated designs and easy handling, thanks to convenient and recyclable packaging.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'babyCow.jpg',
    title: 'Baby cow',
    info: '2040',
    info2:
      'High quality 100% natural cotton, 190g/m² A perfect, already wrapped gift, souvenir The textile bag protects T-shirts from damage and dirt The packaging allows for easy placement of T-shirts on retail stands ',
    url: '',
    email: 'hello@eight.si',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'oumlaut.jpg',
    title: 'Ö',
    info: '1488',
    info2:
      'High quality 100% natural cotton, 190g/m² A perfect, already wrapped gift, souvenir The textile bag protects T-shirts from damage and dirt The packaging allows for easy placement of T-shirts on retail stands ',
    url: '',
    email: 'hello@eight.si',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Möösterreich.jpg',
    title: 'Möösterreich',
    info: '499',
    info2:
      'High quality 100% natural cotton, 190g/m² A perfect, already wrapped gift, souvenir The textile bag protects T-shirts from damage and dirt The packaging allows for easy placement of T-shirts on retail stands ',
    url: '',
    email: 'hello@eight.si',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Coat of arms.jpg',
    title: 'Coat of arms',
    info: '2040',
    info2:
      'High quality 100% natural cotton, 190g/m² A perfect, already wrapped gift, souvenir The textile bag protects T-shirts from damage and dirt The packaging allows for easy placement of T-shirts on retail stands ',
    url: '',
    email: 'hello@eight.si',
    repo: '', // if no repo, the button will not show up
  },
];

// Second text

export const ourStoryData = {
  img2: 'ourStory.jpg',
  text1:
    'The EIGHT story began with two friends, Tim and Mitja, who were disappointed by the quality of souvenir T-shirts on offer all across Europe. Believing there should be no reason why souvenir T-shirts could not also be attractive and trendy, we joined forces with top designers and the brand Eurotees™ was born.',
  text2:
    'Today we are proud to say that with our clear vision, an ear for the customer’s needs and well-thought- out product, we are one of the top players in Slovenia, Croatia and Austria when it comes to souvenir T- shirts. We design, produce and market T-shirts for tourists wishing to take home a fashionable souvenir. The collections of trendy T-shirts under the brand name Eurotees™ are designed by top designers assuring that the T-shirts are always in-line with current fashion trends. ',
  text3:
    'Today we are proud to say that with our clear vision, an ear for the customer’s needs and well-thought- out product, we are one of the top players in Slovenia, Croatia and Austria when it comes to souvenir T- shirts. We design, produce and market T-shirts for tourists wishing to take home a fashionable souvenir. The collections of trendy T-shirts under the brand name Eurotees™ are designed by top designers assuring that the T-shirts are always in-line with current fashion trends.',
};

// CONTACT DATA
export const contactData = {
  cta: '',
  goodbyetxt:
    'We are always looking for new sales outlets. If you would like to include Eurotees™ into your business please, don’t hesitate to contact us. Our team will work closely with you, to create a selection that perfectly fits your needs and desires. ',
  btn: 'hello@eight.si',
  email: 'hello@eightsquare.eu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/eightsquare',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/euro.tees/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

export const mapData = {
  mapUrl:
    '//umap.openstreetmap.fr/en/map/eurotees-8square-locations_643602?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=null&allowEdit=false&moreControl=false&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=false&onLoadPanel=undefined&captionBar=false',
};
