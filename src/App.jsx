import { useState } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import SocialLinks from "./Components/SocialLinks";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import Experiences from "./Components/Experiences";
import Contact from "./Components/contact";
import Footer from "./Components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : undefined}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="text-gray-900 bg-white dark:bg-gray-900 dark:text-white">
        <Home />
        <About />
        <Portfolio />
        <Testimonials />
        <Experiences />
        <Contact />
        <Footer />
      </main>

      <SocialLinks />
    </div>
  );
}

export default App;
