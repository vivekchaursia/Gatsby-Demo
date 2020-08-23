import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vivek Chaurasia', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Vivek Chaurasia',
  subtitle: 'I,m the .Net Full Stack Develeoper',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am Software Developer/Architect. I’ve been a professional developer for more than 4 years. I’ve mostly worked professionally with ASP.Net MVC with C#, VB, SQL Server sometimes with React JS, Bootstrap also.',
  paragraphTwo: 'My working philosophies:– Use the right tool for the job. A programming language is just a tool! & Always try to learn something new.',
  paragraphThree: 'Beside programming I am interested in sports, Online Gaming and Stock Market. I enjoy meeting new people and finding ways to help them have an uplifting experience',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'chaursiavivek@gmail.com',
  btn: 'connect',
  email: 'chaursiavivek@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vivek-chaurasia-071aa4137/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/vivekchaursia',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/vivek.chaursia/?igshid=vtzn8u1tgpyz',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
