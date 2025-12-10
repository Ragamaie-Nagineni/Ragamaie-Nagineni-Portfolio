import { FaLaptopCode } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects">
      <h2><FaLaptopCode /> Projects</h2>
      <div className="container">
        <ul>

          {/* ============ 1. DRAKZ ============ */}
          <li>
            <b>DRAKZ</b>
            <p><em>IIIT curriculum-based group project | Ongoing</em></p>
            <ul>
              <li>Full-stack web application built with frontend + backend integration.</li>
              <li>Designed user UI, implemented server logic & database workflows.</li>
              <li>Developed responsive interface with dynamic routing.</li>
              <li>Collaborated using Git, modular development & version control.</li>
              <li>
                GitHub Repo: 
                <a 
                  href="https://github.com/Ragamaie-Nagineni/DRKZ-1" 
                  target="_blank"
                  style={{ color:"#0056d2", fontWeight:"600", marginLeft:"5px" }}>
                  View Repository
                </a>
              </li>
            </ul>
          </li>

          {/* ============ 2. Hybrid Secure Cloud Storage ============ */}
          <li>
            <b>Hybrid Secure Cloud Storage System</b>
            <p><em>Secure Cloud Storage using AES Hybrid Encryption + AWS Integration</em></p>
            <ul>
              <li>AES-based hybrid symmetric encryption implemented for data security.</li>
              <li>Cloud storage deployed through AWS for scalability and reliability.</li>
              <li>Safe upload/download with encryption before cloud transfer.</li>
              <li>
                GitHub Repo:
                <a 
                  href="https://github.com/Ragamaie-Nagineni/Hybrid-Secure-Cloud-Storage-using-AES--hybrid-Symmetric-Encryption-and-AWS-Integration" 
                  target="_blank"
                  style={{ color:"#0056d2", fontWeight:"600", marginLeft:"5px" }}>
                  View Repository
                </a>
              </li>
            </ul>
          </li>

          {/* ============ 3. Netflix Stock Data Analytics ============ */}
          <li>
            <b>Netflix Stock Data Analytics</b>
            <p><em>Data Analysis + ML model comparison</em></p>
            <ul>
              <li>Analyzed 20 years of Netflix stock history & trends.</li>
              <li>Implemented models using Linear Regression, Random Forest & SVR.</li>
              <li>Evaluated metrics like MSE, visualization via matplotlib.</li>
              <li>
                GitHub Repo: 
                <a 
                  href="https://github.com/Ragamaie-Nagineni/Netflix-Stock-Predictor" 
                  target="_blank"
                  style={{ color:"#0056d2", fontWeight:"600", marginLeft:"5px" }}>
                  View Repository
                </a>
              </li>
            </ul>
          </li>

          {/* ============ 4. Ant Colony Optimization ============ */}
          <li>
            <b>Improved Ant Colony Optimization</b>
            <p><em>Optimization algorithm with ML enhancement</em></p>
            <ul>
              <li>Enhanced convergence & efficiency using RF & Gradient Boosting.</li>
              <li>Performed preprocessing, feature engineering & model evaluation.</li>
              <li>
                GitHub Repo: 
                <a 
                  href="https://github.com/Ragamaie-Nagineni/improved-Multirace_AntColony_ParallelChoas_Search" 
                  target="_blank"
                  style={{ color:"#0056d2", fontWeight:"600", marginLeft:"5px" }}>
                  View Repository
                </a>
              </li>
            </ul>
          </li>

        </ul>
      </div>
    </section>
  );
}
