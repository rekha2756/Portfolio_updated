function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "SQL"],
    },
    {
      title: "Web Technologies",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Django",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
      ],
    },
    {
      title: "Database",
      skills: ["MySQL"],
    },
    {
      title: "Core Concepts",
      skills: [
        "Data Structures & Algorithms",
        "OOP",
        "REST APIs",
        "Django REST Framework",
      ],
    },
    {
      title: "Tools",
      skills: [
        "GitHub",
        "VS Code",
        "Swagger",
        "Postman",
      ],
    },
  ];

  return (
    <section id="skills" className="skills section">

      <div className="section-heading">
        <p>02</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">

        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>

            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;