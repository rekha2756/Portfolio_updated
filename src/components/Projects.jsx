function Projects() {
  const projects = [
    {
      number: "01",
      title: "HealthAxis",
      subtitle: "Hospital Management System",
      description:
        "A full-stack Hospital Management System with modules for patient management, doctor management, appointments, medical records, billing, and administration.",
      technologies: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MySQL",
      ],
      github: "https://github.com/rekha2756/HMS",
    },

    {
      number: "02",
      title: "Trip Planner",
      subtitle: "Travel Web Application",
      description:
        "A web application for displaying travel destinations and related details, with REST APIs for managing destination data and CRUD operations.",
      technologies: [
        "Django",
        "Django REST Framework",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github: "#",
    },

    {
      number: "03",
      title: "AI Capacity Forecaster",
      subtitle: "Resource Utilization Forecasting",
      description:
        "A forecasting application that predicts CPU, Memory, and Disk utilization and identifies potential threshold breaches based on forecasted resource usage.",
      technologies: [
        "Python",
        "Streamlit",
        "Prophet",
        "Pandas",
      ],
      github: "https://github.com/rekha2756/Capacity_Forecaster",
    },
  ];

  return (
    <section id="projects" className="projects section">

      <div className="section-heading">
        <p>03</p>
        <h2>Selected Projects</h2>
      </div>

      <div className="projects-list">

        {projects.map((project) => (
          <article className="project-card" key={project.number}>

            <div className="project-number">
              {project.number}
            </div>

            <div className="project-info">

              <p className="project-subtitle">
                {project.subtitle}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>
              )}

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Projects;