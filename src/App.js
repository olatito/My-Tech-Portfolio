import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import ExperienceLogo from "./components/Experience/ExperiencesLogo";
import Project from "./components/Project/Project";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="bg-[#161513]">
      <NavBar />
      <Home />
      <ExperienceLogo />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
