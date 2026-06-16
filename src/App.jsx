import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Philosophy />
        <Timeline />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
