import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import Navigation from './components/Navigation';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Sticky Navigation (appears after Header) */}
      <Navigation />

      {/* Portfolio Sections will be built here */}

      {/* Section 1: Header */}
      <Header />

      {/* Section 2: About Me */}
      <AboutMe />

      {/* Section 3: Work */}
      <Work />

      {/* Section 4: Testimonials */}
      <Testimonials />

      {/* Section 5: Contact */}
      <Contact />

      {/* Section 6: Footer */}
      <Footer />
    </div>
  );
}

export default App;
