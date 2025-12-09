import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience">
      <h2><FaBriefcase /> Experience & Involvement</h2>

      <div className="container job">
        <h3>Web Development Trainee</h3>
        <p><b>Edu-versity Training Institute</b> | Dec 2023 – Jan 2024</p>

        <ul>
          <li>Completed an intensive industrial program focused on full-stack web development</li>
          <li>Hands-on learning with HTML, CSS, JavaScript, Node.js, Express, MongoDB, and React</li>
          <li>Developed responsive UI components, backend routes, and basic authentication models</li>
          <li>Worked on mini projects, debugging & deployment practices with Git/GitHub</li>
          <li>Strengthened real-world development workflow through assignment-based learning</li>
        </ul>
      </div>

      <div className="card job">
        <h3>PR Core Member</h3>
        <p><b>Epoch Club, IIIT Sri City</b> | Aug 2024 – Apr 2025</p>

        <ul>
          <li>Organized college hackathons, workshops & technical events improving participation</li>
          <li>Handled event coordination, promotions & social media outreach strategies</li>
          <li>Collaborated with team members for content, branding & operational planning</li>
          <li>Improved communication, leadership & strategic execution through real experience</li>
        </ul>
      </div>

    </section>
  );
}
