import { useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import More from './pages/More';
import Contact from './pages/Contact';

function App() {
  const [section, setSection] = useState("0vw");
  
  const scrollStyle = {
    transform: `translateX(${section})`
  };

  const changeSection = (new_section) => {
    setSection(new_section);
  }

  return (
    <div className="App">
      <header className="App__header">
        <Nav section={section} changeSection={changeSection}/>
      </header>
      <main className="App__body" style={scrollStyle}>
        <Home />
        <About />
        <More />
        <Contact />
      </main>
    </div>
  );
}

export default App;
