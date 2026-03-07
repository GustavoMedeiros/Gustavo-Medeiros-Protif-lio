import Layout from "./components/layout/Layout/Layout";
import { HeroSection} from "./components/sections/Hero/Hero";
import TechnicalSolutions from "./components/sections/TechnicalSolutions/TechnicalSolutions";
import StackSpecialties from "./components/sections/StackSpecialties/StackSpecialties";
import Projects from "./components/sections/Projects/Projects";
import Process from "./components/sections/Process/Process";
import Experience from "./components/sections/Experience/Experience";
import Contact from "./components/sections/Contact/Contact";

function App() {
  return (
    <Layout>
      <HeroSection />
      <TechnicalSolutions />
      <StackSpecialties />
      <Projects />
      <Process />
      <Experience />
      <Contact />
    </Layout>
  );
}

export default App;