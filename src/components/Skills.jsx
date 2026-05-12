/* import { FaTools } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="reveal">
      <h2 className="reveal"><FaTools /> Skills</h2>

      <div className="container skills-layout">

        
        <div className="skills-col">
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
        </div>

        
        <div className="skills-col">
          <h3>Data Science & ML</h3>
          <ul>
            <li>Pandas, Scikit-learn, Matplotlib</li>
            <li>Data Analysis, Statistical Modelling</li>
            <li>ML Algorithms & Evaluation</li>
          </ul>

          <h3>Core CS Subjects</h3>
          <p>DSA, OS, DBMS, OOPS, CN</p>
        </div>

      </div>
    </section>
  );
}
 */
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaChartLine,
  FaTools,
  FaBrain
} from "react-icons/fa";


export default function Skills() {
  return (
    <section id="skills" className="reveal">
      <h2 className="reveal">
        <FaTools /> Skills
      </h2>

      <div className="skills-grid reveal stagger">

  <div className="skill-card">
    <FaCode className="skill-icon" />
    <h3>Programming Languages</h3>
    <p>Python, C, Java</p>
  </div>

  <div className="skill-card">
    <FaLaptopCode className="skill-icon" />
    <h3>Web Development</h3>
    <p>
      Frontend: HTML, CSS, JavaScript, React<br />
      Backend: Node.js, Express, middlewares, Rest-apis , Graphql , CI/CD
    </p>
  </div>

  <div className="skill-card">
    <FaDatabase className="skill-icon" />
    <h3>Databases</h3>
    <p>PostgreSQL, MongoDB</p>
  </div>

  <div className="skill-card">
    <FaChartLine className="skill-icon" />
    <h3>Data Science & ML</h3>
    <p>
      Pandas, Scikit-learn, Matplotlib<br />
      Data Analysis, Statistical Modelling
    </p>
  </div>

  <div className="skill-card">
    <FaTools className="skill-icon" />
    <h3>Tools & Libraries</h3>
    <p>
      Git, GitHub, SQL, Swagger<br />
      Pandas, Scikit-learn, Matplotlib 
    </p>
  </div>

  <div className="skill-card">
    <FaBrain className="skill-icon" />
    <h3>Core & Advanced Subjects</h3>
    <p>
      DSA, OS, DBMS, OOPS,Computer Networks<br />
      Cloud Computing (AWS Basics)<br />
      Fundamentals of Quantum Computing
    </p>
  </div>

</div>

    </section>
  );
}
