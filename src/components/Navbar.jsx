export default function Navbar() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h3 className="logo" onClick={() => scrollToSection("hero")}>
         Nagineni Ragamaie
        </h3>

        <ul>
          <li><button onClick={() => scrollToSection("hero")}>Home</button></li>
          <li><button onClick={() => scrollToSection("about")}>About</button></li>
          <li><button onClick={() => scrollToSection("education")}>Education</button></li>
          <li><button onClick={() => scrollToSection("skills")}>Skills</button></li>
          <li><button onClick={() => scrollToSection("projects")}>Projects</button></li>
          <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}
