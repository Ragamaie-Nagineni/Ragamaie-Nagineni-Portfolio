import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education">
      <h2><FaGraduationCap /> Education</h2>

      <div className="container">

        <h3>B.Tech in Computer Science & Engineering</h3>
        <p><b>Indian Institute of Information Technology, Sri City</b> (2023 - 2027)</p>
        <p><b>CGPA:</b> 7.3*</p>
      
        <ul>
          <li>Learning core CS foundations including DSA, DBMS, OS, OOPS, and Computer Networks</li>
          <li>Actively involved in tech clubs, workshops, and collaborative academic projects</li>
          <li>Research & exploration in Machine Learning and Optimization Algorithms</li>
          <li>Developing strong programming foundation in Python, C, and full-stack development</li>
        </ul>

        <hr style={{margin:"20px 0",opacity:"0.3"}} />

        <h3>Intermediate (MPC Track)</h3>
        <p><b>Narayana Junior College</b> (2021 - 2023)</p>
        <p><b>Score:</b> 984/1000 | <b>JEE Percentile:</b> 96.89</p>
        <ul>
          <li>Prepared for competitive exams — improved time-efficiency & analytical thinking</li>
        </ul>

      </div>
    </section>
  );
}
