import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';



import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {

   const resumeData ={
    education: [
      {
        school:'University of Mumbai',
        degree:'BSC (Information Technology)',
        graduated:'May 2016',
        description:'Description Pending',
      },
    ],
    work: [
      {
        company:'Reliance Securities',
        title:'Software Engineer',
        years:'April 2019 - Present',
        description:'Working Here As a in-house developer worked on various internal projects. Mainly worked on existing software to correct errors, adapt to new hardware and improve performance.',
      },
      {
        company:'Bestfit Business Solutions',
        title:'Software Developer',
        years:'Jun 2016 - March 2019',
        description:'Joined here as a intern, got an opportunity to work on various projects on BFSI domain. Worked closely with clients to establish problem specifications and system designs. ',
      },
    ],
    skills: [
      {
        name:'ASP.NET',
        level:'75%',
      },
      {
        name:'C#',
        level:'80%',
      },
      {
        name:'SQL SERVER',
        level:'90%',
      },
      {
        name:'JavaScript',
        level:'65%',
      },
      {
        name:'ReactJs',
        level:'60%',
      },
      {
        name:'CSS',
        level:'70%',
      },
    ],
  };
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);
  

  
  return (
    <PortfolioProvider value={{ hero, about,  contact, footer }}>
      <Hero />
      <About />
      {/* <Projects /> */}
      <Resume data={resumeData}/>
      <Contact />
      <Footer />
    </PortfolioProvider>
  );

  
}

export default App;
