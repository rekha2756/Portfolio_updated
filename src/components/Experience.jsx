function Experience() {
  const experiences = [
    {
      number: "01",
      role: "Web Applications Intern",
      company: "ROBOXA TECHNOLOGIES PVT. LTD",
      location: "Hyderabad",
      duration: "Jun 2026 — Present",
      technologies: [
        "Python",
        "Django",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Django REST Framework",
      ],
      responsibilities: [
        "Working with Python, Django, MySQL, HTML, CSS, and JavaScript for web application development.",
        "Developing REST APIs using Django REST Framework for backend functionality.",
        "Testing and documenting APIs using Swagger and Postman.",
        "Performing CRUD operations and working with MySQL databases.",
        "Integrating frontend and backend components and debugging application issues.",
      ],
    },
    {
      number: "02",
      role: "Full Stack Development Intern",
      company: "Thiranex",
      location: "Remote",
      duration: "Mar 2026",
      technologies: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MySQL",
        "REST APIs",
      ],
      responsibilities: [
        "Worked on web applications including a Portfolio Website, Task Management System, E-Commerce Web Application, and Blog Platform.",
        "Developed frontend and backend modules using ReactJS, NodeJS, ExpressJS, and MySQL.",
        "Created and integrated REST APIs for application functionality.",
        "Worked with MySQL databases for application data.",
        "Performed debugging and testing of web applications.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience section">
      <div className="section-heading">
        <p>04</p>
        <h2>Experience</h2>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.number}>
            <div className="experience-number">
              {experience.number}
            </div>

            <div className="experience-info">
              <div className="experience-top">
                <div>
                  <p className="experience-duration">
                    {experience.duration}
                  </p>

                  <h3>{experience.role}</h3>

                  <p className="experience-company">
                    {experience.company} · {experience.location}
                  </p>
                </div>
              </div>

              <ul className="experience-responsibilities">
                {experience.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="experience-tech">
                {experience.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;