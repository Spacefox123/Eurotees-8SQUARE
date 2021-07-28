import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '8SQUARE | Eurotees™', // e.g: 'Name | Developer'
  lang: 'si', // e.g: en, es, fr, jp
  description: 'The official Eurotees™ website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'EURO',
  name: 'TEES',
  subtitle: 'the apparel for you',
  cta: 'about our apparel',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile2.jpg',
  paragraphOne:
    'Are you tired of always looking at the same boring souvenir T-shirts that people buy and never wear them again? Well so were we! ',
  paragraphTwo:
    'That is why we at 8SQUARE set out to design and create modern and trendy souvenir T-shirts under the brand name Eurotees™.',
  paragraphThree:
    'With the goal of satisfying modern tourists while also having in mind the importance of retailers, we designed a product that is attractive to both, due to our constantly updated designs and easy handling, thanks to convenient and recyclable packaging.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'baby3x-831x1024',
    title: 'Baby cow',
    info: '2040',
    info2:
      'High quality 100% natural cotton, 190g/m² A perfect, already wrapped gift, souvenir The textile bag protects T-shirts from damage and dirt The packaging allows for easy placement of T-shirts on retail stands ',
    url: 'hello@eightsquare.eu',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '15b3x-831x1024.jpg',
    title: 'Ö',
    info: '1488',
    info2:
      'High quality 100% natural cotton, 190g/m² A perfect, already wrapped gift, souvenir The textile bag protects T-shirts from damage and dirt The packaging allows for easy placement of T-shirts on retail stands ',
    url: 'hello@eightsquare.eu',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '7b3x-831x1024.jpg',
    title: 'Möösterreich',
    info: '499',
    info2:
      'High quality 100% natural cotton, 190g/m² A perfect, already wrapped gift, souvenir The textile bag protects T-shirts from damage and dirt The packaging allows for easy placement of T-shirts on retail stands ',
    url: 'hello@eightsquare.eu',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '6b3x-831x1024.jpg',
    title: 'Coat of arms',
    info: '2040',
    info2:
      'High quality 100% natural cotton, 190g/m² A perfect, already wrapped gift, souvenir The textile bag protects T-shirts from damage and dirt The packaging allows for easy placement of T-shirts on retail stands ',
    url: 'hello@eightsquare.eu',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '+386 40 668 650',
  btn: 'hello@eightsquare.eu',
  email: 'hello@eightsquare.eu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
