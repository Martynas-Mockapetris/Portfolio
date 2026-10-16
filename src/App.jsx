import Header from './components/sections/Header/Header';
import AboutMe from './components/sections/AboutMe/AboutMe';
import Work from './components/sections/Work/Work';
import Navigation from './components/sections/Navigation/Navigation';
import Testimonials from './components/sections/Testimonials/Testimonials';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/sections/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <AboutMe />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

