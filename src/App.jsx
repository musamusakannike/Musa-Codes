import Contact from "./components/Contact";
import CustomNavbar from "./components/CustomNavbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <CustomNavbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
