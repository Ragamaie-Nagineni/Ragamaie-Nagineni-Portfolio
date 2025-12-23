// src/components/Resume.jsx

export default function Resume() {
  return (
    <section id="resume" className="reveal">
      <h2 className="reveal">Resume</h2>

      <div className="resume-box">
        <h3>Want to know more about my work?</h3>
        <p>
          You can view or download my resume to get a detailed overview of my
          skills, projects, and academic background.
        </p>

        <a
          href={`${import.meta.env.BASE_URL}Resume.pdf`}
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
