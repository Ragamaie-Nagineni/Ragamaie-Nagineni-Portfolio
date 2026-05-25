export default function Hero() {
  return (
    <section id="hero" className="hero reveal">

      <div className="hero-box">

        <h1>
          <span>Ragamaie Nagineni</span>
        </h1>

        <p>
          Computer Science Undergraduate • Web Developer • Cloud Computing Enthusiast
        </p>

        <div className="btn-box">

          <a
            href="#projects"
            className="btn primary"
            onClick={(e) => {
              e.preventDefault();

              document
                .getElementById("projects")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            View Projects
          </a>

          <a
            href={`${import.meta.env.BASE_URL}Resume.pdf`}
            download
            className="btn secondary"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}