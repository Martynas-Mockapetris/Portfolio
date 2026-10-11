import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      {/* Portfolio Sections will be built here */}

      {/* Section 1: Header */}
      <Header />

      {/* Section 2: About Me */}
      <AboutMe />

      {/* Section 3: Work */}
      <Work />

      {/* Section 4: Testimonials */}
      <section id="clients">{/* <Testimonials /> */}</section>

      {/* Section 5: Contact */}
      <section id="contact">{/* <Contact /> */}</section>

      {/* Section 6: Footer */}
      <section id="footer">{/* <Footer /> */}</section>
    </div>
  );
}

export default App;
