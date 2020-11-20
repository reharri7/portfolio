import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Rhett Harrison',
  subtitle: 'I\'m a Fullstack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'FullStack Developer ~ Javascript Enthusiast',
  paragraphTwo: 'Working towards my Bachelor\'s of Science Degree in Software Engineering at Arizona State University. I have experience in Java, C, C++, and Python. I design full stack applications using the MERN Stack.',
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'crown-clothing.JPG',
    title: 'E-Commerce Template',
    info: 'E-Commerce Template I built using React, Redux, Firebase, and Sass',
    info2: ' ',
    url: 'http://rhett-e-commerce.herokuapp.com',
    repo: 'https://github.com/reharri7/crown-clothing', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rhettharrison2016@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rhett-harrison314159/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/reharri7',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
