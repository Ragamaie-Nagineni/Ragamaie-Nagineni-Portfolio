// src/components/Resume.jsx

export default function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>

      <div className="resume-box">
        <h3>Want to know more about my work?</h3>
        <p>
          You can view or download my resume to get a detailed overview of my
          skills, projects, and academic background.
        </p>

        <a
          href="/Ragamaie-Nagineni-Portfolio/public/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View Resume →
        </a>
      </div>
    </section>
  );
}
