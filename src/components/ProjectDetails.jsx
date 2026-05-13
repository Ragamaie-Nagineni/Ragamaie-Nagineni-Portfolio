// src/components/ProjectDetails.jsx

import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const sectionsRef = useRef([]);
  const BASE = import.meta.env.BASE_URL;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));
     window.scrollTo(0, 0);
    return () => observer.disconnect();
  }, []);

/*   const projectData = {
    "cloud-storage": {
      title: "Hybrid Secure Cloud Storage System",
      overview: `
This project focuses on building a secure cloud storage solution that ensures 
confidentiality, controlled access, and robust encryption. It integrates AES-based 
hybrid symmetric encryption to secure files before upload and combines it with AWS 
cloud infrastructure for scalability and high availability.

The system encrypts files client-side, preventing unauthorized access even at the 
storage layer. AWS S3 is used for storage, providing durability and fault tolerance, 
while the backend manages encryption keys, authorization flow, and secure file retrieval.
      `,
      features: [
        "AES hybrid encryption before cloud upload",
        "Client-side encryption for sensitive data",
        "AWS S3 integration for scalable storage",
        "Secure backend APIs for file access",
        "Role-based access control"
      ],
      tech: ["AES", "AWS S3", "Node.js", "Express", "MongoDB"],
      github:
        "https://github.com/Ragamaie-Nagineni/Hybrid-Secure-Cloud-Storage-using-AES--hybrid-Symmetric-Encryption-and-AWS-Integration",
      images: [
        `${BASE}projects/AWS-security/aws-dynamo-db.png`,
        `${BASE}projects/AWS-security/less-data-console.png`,
        `${BASE}projects/AWS-security/more-data-console.png`
      ]



    },

    drakz: {
      title: "DRAKZ — Full Stack Web Application",
      overview: `
DRAKZ is a full-stack application developed as part of IIIT coursework. 
It includes secure authentication, modular backend APIs, and dashboard-driven UI.

The project emphasizes clean architecture and separation of concerns. 
The frontend ensures a smooth user experience, while the backend handles 
validation, sessions, and business logic using a RESTful architecture.
      `,
      features: [
        "Secure authentication & session handling",
        "Dashboard-based modular UI",
        "RESTful backend API architecture",
        "Responsive and mobile-friendly design"
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "CSS"],
      github: "https://github.com/Ragamaie-Nagineni/DRKZ-1"
    },

    netflix: {
      title: "Netflix Stock Data Analytics",
      overview: `
This project performs long-term analysis of Netflix stock prices using 
machine learning regression techniques. It processes over 20 years of 
historical stock data, cleans and transforms the dataset, and builds 
predictive models to estimate closing prices.

Multiple models such as Linear Regression, Random Forest, and Support Vector 
Regression are compared using performance metrics like Mean Squared Error (MSE) 
and R² score. The project also includes visualizations to highlight trends, 
volatility, and prediction accuracy.
      `,
      features: [
        "Processed 20+ years of Netflix stock data",
        "Implemented Linear Regression, Random Forest & SVR",
        "Model evaluation using MSE and R² metrics",
        "Time-series trend visualization using matplotlib",
        "Comparative performance analysis of ML models"
      ],
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      github: "https://github.com/Ragamaie-Nagineni/Netflix-Stock-Predictor",
      images: [
        `${BASE}projects/Netflix-Stock-predictor/ACCURACY.png`,
        `${BASE}projects/Netflix-Stock-predictor/heatmap.png`
      ]

    },

    aco: {
      title: "Ant Colony Optimization Enhancement",
      overview: `
This project enhances the traditional Ant Colony Optimization (ACO) algorithm 
by integrating machine learning to improve convergence speed and solution quality.

A Random Forest classifier is trained using engineered features derived from 
ACO behavior to guide decision-making during path selection. This hybrid approach 
reduces randomness, improves optimization efficiency, and delivers better results 
compared to the classical ACO algorithm.
      `,
      features: [
        "Machine learning–guided ACO decision making",
        "Random Forest classifier integration",
        "Feature engineering for optimization behavior",
        "Comparison with classical ACO performance",
        "Experiment-driven evaluation pipeline"
      ],
      tech: ["Python", "Scikit-learn", "Machine Learning", "Optimization"],
      github:
        "https://github.com/Ragamaie-Nagineni/improved-Multirace_AntColony_ParallelChoas_Search",
      images: [
        `${BASE}projects/ant-colony/comparison.png`,
        `${BASE}projects/ant-colony/path-improved.png`,
        `${BASE}projects/ant-colony/pheromone-trail.png`
      ]


    }
  }; */
  const projectData = {

  drakz: {
    title: "DRAKZ — Full Stack Web Application",
    overview: `
DRAKZ is a full-stack application developed as part of IIIT coursework. 
It includes secure authentication, modular backend APIs, and dashboard-driven UI.

The project emphasizes clean architecture and separation of concerns. 
The frontend ensures a smooth user experience, while the backend handles 
validation, sessions, and business logic using a RESTful architecture.
    `,
    features: [
      "Secure authentication & session handling",
      "Dashboard-based modular UI",
      "RESTful backend API architecture",
      "Responsive and mobile-friendly design"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    github: "https://github.com/Ragamaie-Nagineni/DRKZ-1"
  },

  "iot-fog-cloud-scheduler": {
    title: "IoT Fog Cloud Scheduler",
    overview: `
Simulation-based implementation of energy-aware task offloading and 
network-aware cloud scheduling in IoT-Fog-Cloud environments using iFogSim.

The project focuses on optimizing resource utilization, minimizing latency, 
and improving energy efficiency in distributed cloud systems.
    `,
    features: [
      "Energy-aware task scheduling",
      "Network-aware optimization",
      "Cloud-Fog-IoT integration",
      "Simulation using iFogSim",
      "Performance evaluation metrics"
    ],
    tech: ["Java", "iFogSim", "Cloud Computing", "IoT"],
    github:
      "https://github.com/Ragamaie-Nagineni/IoT-Fog-Cloud-energy-aware-task-offloading-and-network-aware-scheduling-using-iFogSim"
  },

  "uav-isac-optimization": {
    title: "UAV ISAC Optimization",
    overview: `
A UAV-assisted Integrated Sensing and Communications optimization system 
using fairness-constrained scheduling and multi-objective Pareto optimization.

The project improves communication efficiency and resource allocation 
for UAV-assisted IoT systems.
    `,
    features: [
      "Pareto optimization",
      "Fairness-constrained scheduling",
      "Wireless communication optimization",
      "IoT-assisted UAV systems",
      "Multi-objective resource allocation"
    ],
    tech: ["Python", "Optimization", "IoT", "Wireless Networks"],
    github:
      "https://github.com/Ragamaie-Nagineni/UAV-ISAC-Optimization"
  },

  "netflix-stock": {
    title: "Netflix Stock Data Analytics",
    overview: `
This project performs long-term analysis of Netflix stock prices using 
machine learning regression techniques.

Multiple models such as Linear Regression, Random Forest, and Support Vector 
Regression are compared using performance metrics like Mean Squared Error (MSE) 
and R² score.
    `,
    features: [
      "20+ years of stock data analysis",
      "Regression model comparison",
      "Trend visualization",
      "Performance evaluation",
      "Machine learning forecasting"
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    github:
      "https://github.com/Ragamaie-Nagineni/Netflix-Stock-Predictor"
  },

  macpcs: {
    title: "MACPCS Optimization",
    overview: `
Enhanced Multi-Race Ant Colony Parallel Chaos Search optimization algorithm 
for intelligent path planning and optimization.

The project improves exploration efficiency and convergence compared to 
traditional ACO methods.
    `,
    features: [
      "Parallel chaos search",
      "ACO enhancement",
      "Path optimization",
      "Performance comparison",
      "Optimization experimentation"
    ],
    tech: ["Python", "ACO", "Optimization", "Algorithms"],
    github:
      "https://github.com/Ragamaie-Nagineni/improved-Multirace_AntColony_ParallelChoas_Search"
  }
};

  const data = projectData[id];
  if (!data) return <h2 className="not-found">Project Not Found</h2>;

  return (
    <section id="project-details">
      {/* Back navigation */}
      <button className="back-btn" onClick={() => navigate(-1)}>
     ← Back to Projects
     </button>


      <h2 ref={(el) => (sectionsRef.current[0] = el)} className="reveal">
        {data.title}
      </h2>

      <div className="project-layout">
        {/* LEFT */}
        <div
          className="project-main reveal"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h3>Overview</h3>
          <p className="overview-text">{data.overview}</p>

          <h3>Key Features</h3>
          <ul>
            {data.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div
          className="project-side reveal"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h3>Tech Stack</h3>
          <div className="detail-badges">
            {data.tech.map((t) => (
              <span className="badge" key={t}>{t}</span>
            ))}
          </div>

          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View GitHub →
          </a>
        </div>
      </div>

      {/* PROJECT IMAGES */}
      {data.images && (
        <>
          <h3 style={{ marginTop: "50px" }}>Project Visuals</h3>
          <div className="project-images">
            {data.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Project screenshot"
                className="project-image"
              />
            ))}
          </div>
        </>
      )}

    </section>
  );
}