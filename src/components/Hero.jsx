export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-box">
        <h1>Hi, I'm <span>Ragamaie Nagineni</span></h1>
        <p>Computer Science Undergraduate • Web Developer • Cloud Computing Enthusiast</p>

        <div className="btn-box">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="/resume.pdf" download className="btn secondary">Resume</a>
        </div>
      </div>
    </section>
  );
}
