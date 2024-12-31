import '../App.css';
import Home from '../Components/home';
import About from '../Components/about';
import Work from '../Components/work';
import Testimonial from '../Components/Testimonial';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const HomePage = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage;