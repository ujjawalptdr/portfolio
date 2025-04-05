import { useState } from "react";
import NavBar from "./Components/NavBar.jsx";
import Home from "./Components/Home.jsx";
import SocialLinks from "./Components/SocialLinks.jsx";
import About from "./Components/About.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Experiences from "./Components/Experiences.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

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
