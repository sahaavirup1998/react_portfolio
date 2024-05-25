import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MyWork from "./components/MyWork/MyWork";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Skill from "./components/Skills/Skill";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Services />
      <MyWork/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
