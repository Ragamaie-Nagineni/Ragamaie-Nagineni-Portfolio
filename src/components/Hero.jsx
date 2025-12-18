const BASE = import.meta.env.BASE_URL;
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-box">
        <h1> <span>Ragamaie Nagineni</span></h1>
        <p>Computer Science Undergraduate • Web Developer • Cloud Computing Enthusiast</p>

        <div className="btn-box">
          <a href="#/" className="btn primary">
            <span onClick={() => {
              setTimeout(() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}>
              View Projects
            </span>
          </a>

          <a href={`${BASE}Resume.pdf`} download className="btn secondary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
