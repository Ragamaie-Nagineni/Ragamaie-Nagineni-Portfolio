import { FaTools } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills">
      <h2><FaTools /> Skills</h2>

      <div className="container">

        <h3>Programming Languages</h3>
        <p>Python, C, Java</p>

        <h3>Web Development</h3>
        <ul>
          <li>Frontend: HTML, CSS, JavaScript, React</li>
          <li>Backend: Node.js, Express</li>
          <li>Version Control: Git, GitHub</li>
        </ul>

        <h3>Databases</h3>
        <p>PostgreSQL, MongoDB</p>

        <h3>Data Science & ML</h3>
        <ul>
          <li>Pandas, Scikit-learn, Matplotlib</li>
          <li>Data Analysis, Statistical Modelling</li>
          <li>ML Algorithms & Evaluation</li>
        </ul>

        <h3>Core CS Subjects</h3>
        <p>DSA, OS, DBMS, OOPS, CN</p>

      </div>
    </section>
  );
}
