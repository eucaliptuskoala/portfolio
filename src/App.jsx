import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollLine from './components/ScrollLine';

function App() {
  return (
    <>
      <Nav />
      <ScrollLine />
      <main>
        <Hero />
        <About />
        <Projects />
        <Philosophy />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
