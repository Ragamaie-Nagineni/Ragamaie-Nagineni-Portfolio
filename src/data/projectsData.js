// src/data/projectsData.js

const projects = [
  {
    id: "devlens",

    title: "DevLens – AI-Powered Repository Visualization Platform",

    shortDescription:
      "A full-stack developer platform that visualizes repository relationships and enables AI-powered code understanding.",

    detailedDescription: `
DevLens is an AI-powered developer productivity platform designed to help
developers understand complex repositories faster through intelligent
visualization and impact analysis.

The platform analyzes project structures, relationships between files,
dependencies, modules, and code flows to provide a visual understanding
of software architecture.

It also integrates AI-assisted repository exploration, helping users
understand unfamiliar codebases efficiently. The project focuses on
developer tooling, scalable architecture visualization, and intelligent
repository insights.
    `,

    features: [
      "Repository structure visualization",
      "Dependency relationship mapping",
      "AI-powered code understanding",
      "Impact analysis system",
      "Interactive developer dashboard",
    ],

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "AI APIs",
    ],

    github: "https://github.com/Ragamaie-Nagineni/DevLens",

    images: [
      "/projects/devlens/img1.png",
      "/projects/devlens/img2.png",
    ],
  },

  {
    id: "iot-fog-cloud-scheduler",

    title:
      "IoT Fog Cloud Energy-Aware Task Offloading and Scheduling using iFogSim",

    shortDescription:
      "Simulation-based implementation of energy-aware task scheduling and network-aware cloud optimization in IoT-Fog-Cloud environments.",

    detailedDescription: `
This project focuses on optimizing task scheduling and resource allocation
within IoT-Fog-Cloud environments using the iFogSim simulation framework.

The system implements energy-aware task offloading and network-aware
cloud scheduling mechanisms to reduce latency, improve energy efficiency,
and enhance overall resource utilization.

The project evaluates different scheduling strategies and analyzes
their impact on distributed IoT infrastructures through simulation-based
performance metrics.
    `,

    features: [
      "Energy-aware task scheduling",
      "Network-aware optimization",
      "Cloud-Fog-IoT integration",
      "Simulation using iFogSim",
      "Performance evaluation metrics",
    ],

    tech: ["Java", "iFogSim", "Cloud Computing", "IoT"],

    github:
      "https://github.com/Ragamaie-Nagineni/IoT-Fog-Cloud-energy-aware-task-offloading-and-network-aware-scheduling-using-iFogSim",

    images: [
      "/projects/iot-fog/img1.png",
      "/projects/iot-fog/img2.png",
    ],
  },

  {
    id: "uav-isac-optimization",

    title: "UAV-ISAC Optimization",

    shortDescription:
      "UAV-assisted ISAC optimization system using fairness-constrained scheduling and Pareto optimization.",

    detailedDescription: `
This project implements a UAV-assisted Integrated Sensing and
Communications (ISAC) optimization framework for next-generation
wireless communication systems.

The system applies fairness-constrained scheduling and multi-objective
Pareto optimization techniques to improve communication quality,
resource allocation, and sensing efficiency in IoT-assisted UAV networks.

The project focuses on balancing communication performance and
power optimization while ensuring fairness among users.
    `,

    features: [
      "Pareto optimization",
      "Fairness-constrained scheduling",
      "Wireless communication optimization",
      "IoT-assisted UAV systems",
      "Multi-objective resource allocation",
    ],

    tech: ["Python", "Optimization", "IoT", "Wireless Networks"],

    github:
      "https://github.com/Ragamaie-Nagineni/UAV-ISAC-Optimization",

    images: [
      "/projects/uav/img1.png",
      "/projects/uav/img2.png",
    ],
  },

  {
    id: "hybrid-secure-cloud-storage",

    title:
      "Hybrid Secure Cloud Storage using AES Hybrid Symmetric Encryption and AWS Integration",

    shortDescription:
      "Secure cloud storage platform using AES encryption with AWS-based storage integration.",

    detailedDescription: `
This project is a hybrid cloud storage security system designed to
provide encrypted file storage using AES-based symmetric encryption
combined with AWS cloud services.

The system ensures secure upload, storage, and retrieval of files while
maintaining data confidentiality and integrity. AWS integration enables
scalable and reliable cloud storage infrastructure.

The project demonstrates practical implementation of encryption
algorithms, cloud security concepts, and secure data management systems.
    `,

    features: [
      "AES-based file encryption",
      "Secure cloud storage",
      "AWS integration",
      "Protected file upload and retrieval",
      "Cloud security implementation",
    ],

    tech: ["JavaScript", "AWS", "AES Encryption", "Cloud Security"],

    github:
      "https://github.com/Ragamaie-Nagineni/Hybrid-Secure-Cloud-Storage-using-AES--hybrid-Symmetric-Encryption-and-AWS-Integration",

    images: [
      "/projects/cloud-security/img1.png",
      "/projects/cloud-security/img2.png",
    ],
  },

  {
    id: "macpcs",

    title: "Improved Multirace Ant Colony Parallel Chaos Search",

    shortDescription:
      "Enhanced Ant Colony Optimization algorithm with parallel chaos search for intelligent path planning.",

    detailedDescription: `
This project improves the traditional Ant Colony Optimization (ACO)
algorithm by integrating Multi-Race Parallel Chaos Search techniques
for enhanced exploration and convergence efficiency.

The system is designed for intelligent path planning and optimization
problems where traditional search methods may suffer from premature
convergence or local optima trapping.

The project evaluates algorithm performance through experimentation,
optimization benchmarks, and path-planning simulations.
    `,

    features: [
      "Parallel chaos search",
      "ACO enhancement",
      "Path optimization",
      "Optimization experimentation",
      "Performance comparison",
    ],

    tech: ["Python", "ACO", "Optimization", "Algorithms"],

    github:
      "https://github.com/Ragamaie-Nagineni/improved-Multirace_AntColony_ParallelChoas_Search",

    images: [
      "/projects/macpcs/img1.png",
      "/projects/macpcs/img2.png",
    ],
  },

  {
    id: "netflix-stock",

    title: "Netflix Stock Predictor",

    shortDescription:
      "Machine learning project for long-term Netflix stock analysis and prediction.",

    detailedDescription: `
This project analyzes more than 20 years of Netflix stock market data
using machine learning and data visualization techniques.

Different regression algorithms including Linear Regression,
Random Forest Regression, and Support Vector Regression were compared
using evaluation metrics such as Mean Squared Error and R² score.

The project demonstrates practical applications of predictive analytics,
feature engineering, data preprocessing, and financial trend analysis.
    `,

    features: [
      "Historical stock trend analysis",
      "Regression model comparison",
      "Data visualization",
      "Machine learning forecasting",
      "Model evaluation using MSE and R²",
    ],

    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
    ],

    github:
      "https://github.com/Ragamaie-Nagineni/Netflix-Stock-Predictor",

    images: [
      "/projects/netflix/img1.png",
      "/projects/netflix/img2.png",
    ],
  },

  {
    id: "agricultural-yield-prediction",

    title: "Agricultural Yield Prediction Analysis",

    shortDescription:
      "Machine learning-based agricultural yield prediction and analysis platform.",

    detailedDescription: `
This project focuses on predicting agricultural crop yields using
machine learning algorithms and historical agricultural datasets.

The system analyzes environmental and agricultural factors such as
rainfall, temperature, soil conditions, and seasonal trends to predict
crop productivity.

The project demonstrates data preprocessing, predictive analytics,
visualization, and the application of AI in smart agriculture systems.
    `,

    features: [
      "Crop yield prediction",
      "Agricultural data analysis",
      "Machine learning forecasting",
      "Visualization of agricultural trends",
      "Smart farming insights",
    ],

    tech: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Scikit-learn",
      "Data Analysis",
    ],

    github:
      "https://github.com/Ragamaie-Nagineni/agricultural-yield-prediction-analysis",

    images: [
      "/projects/agriculture/img1.png",
      "/projects/agriculture/img2.png",
    ],
  },
];

export default projects;