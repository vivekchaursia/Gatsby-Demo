import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vivek Chaurasia', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

export const heroData = {
  title: 'Hi, my name is',
  name: 'Vivek Chaurasia',
  subtitle: "I'm a Full Stack .NET Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am Software Developer/Architect. I’ve been a professional developer for more than 4 years and mostly worked professionally with ASP.Net MVC with C#, VB, SQL Server sometimes with React JS, Bootstrap also.',
  paragraphTwo:
    'My working philosophies are : Use the right tool for the job. A programming language is just a tool! & Always try to learn something new.',
  paragraphThree:
    'Beside programming I am interested in Sports, Adventure activities, Online Gaming and Stock Market. I enjoy meeting new people and finding ways to help them have an uplifting experience',
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

export const resumeData = {
  education: [
    {
      school: 'University',
      degree: 'Masters in Beer tasting',
      graduated: 'April 2007',
      description:
        'Describe your experience at school, what you learned, what useful skills you have acquired etc.',
    },
    {
      school: 'School #1 Maybe College?',
      degree: 'What did you study 101',
      graduated: 'March 2003',
      description:
        'Describe your experience at school, what you learned, what useful skills you have acquired etc',
    },
  ],
  work: [
    {
      company: 'Awesome Design Studio',
      title: 'Senior UX God ',
      years: 'March 2010 - Present',
      description:
        'Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.',
    },
    {
      company: 'Super Cool Studio',
      title: 'Junior bug fixer',
      years: 'March 2007 - February 2010',
      description:
        'Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.',
    },
  ],
  skills: [
    {
      name: 'Python',
      level: '60%',
    },
    {
      name: 'VueJs',
      level: '55%',
    },
    {
      name: 'ReactJs',
      level: '50%',
    },
    {
      name: 'CSS',
      level: '90%',
    },
    {
      name: 'PHP',
      level: '90%',
    },
    {
      name: 'Swift',
      level: '90%',
    },
    {
      name: 'JAVA',
      level: '90%',
    },
  ],
};

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
