import Navbar from './components/Navbar/Navbar.js';
import Body from './components/Body/Body.js';
import Skills from './components/Skills/skills.js';
import Project from './components/projects/projects.js';
import Contact from './components/Contact/contact.js';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Body/>
     <Skills/>
    <Project/>
    <Contact/>
    </div>
  );
}

export default App;
