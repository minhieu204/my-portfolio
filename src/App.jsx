import './index.css'
import NavItem from './components/NavItem'
import HomeSection from  './components/sections/HomeSection'
import AboutSection from  './components/sections/AboutSection'
import ProjectSection from './components/sections/ProjectSection'
import ContactSection from './components/sections/ContactSection'
import { useEffect, useState } from 'react'
import NightDark from './components/NigtDark'
function App() {
  const [currentSection, setCurrentSection] = useState(
    localStorage.getItem('currentSection') || 'home'
  );

  useEffect(() => {
    localStorage.setItem('currentSection', currentSection);
  }, [currentSection]);

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('isDarkMode') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  const darkClick = () => setIsDarkMode(!isDarkMode);
  
  return (
    <>
      <div className={isDarkMode ? "theme-dark" : ""}>
        <div className="w-[270px] bg-bgblack100 fixed left-0 top-0 !p-[30px] h-full border-r border-solid border-bgblack50 flex justify-center items-center z-10">
          <div className="absolute top-[50px] text-[30px] capitalize">
            <a href="" onClick={() => setCurrentSection('home')} className="text-textblack900 font-[700] !py-[15px] !px-[20px] text-[30px] tracking-[5px] relative a-before">
              <span className="font-clicker text-[40px]">H</span>
              heta
            </a>
          </div>
          <ul className="!mt-[50px]">
            <NavItem text="Home" iconClass="fa fa-home" handleOnClink={() => setCurrentSection('home')}/>
            <NavItem text="About" iconClass="fa fa-user" handleOnClink={() => setCurrentSection('about')}/>
            {/* <NavItem text="Services" iconClass="fa fa-list"/> */}
            <NavItem text="Projects" iconClass="fa fa-briefcase" handleOnClink={() => setCurrentSection('projects')}/>
            <NavItem text="Contact" iconClass="fa fa-comments" handleOnClink={() => setCurrentSection('contact')}/>
          </ul>
        </div>

        <div className="!pl-[270px]">
          {currentSection === 'home' && <HomeSection handleClick={() => setCurrentSection('about')}/>}
          {currentSection === 'about' && <AboutSection hireMe={() => setCurrentSection('contact')}/>}
          {currentSection === 'projects' && <ProjectSection />}
          {currentSection === 'contact' && <ContactSection />}
        </div>
      </div>
      <NightDark darkClick={darkClick} mode={isDarkMode ? "sun" : "moon"}/>
    </>
  )
}

export default App
