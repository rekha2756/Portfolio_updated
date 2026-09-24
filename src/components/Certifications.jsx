function Certifications() {
  const certifications = [
    {
      title: "DSA Smart Interviews",
      issuer: "Smart Interviews",
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      issuer: "Forage",
    },
    {
      title: "Tata GenAI Powered Data Analytics Job Simulation",
      issuer: "Forage",
    },
    {
      title: "Python for Everybody",
      issuer: "Udemy",
    },
    {
      title: "Junior Java Developer Internship",
      issuer: "YuvaIntern",
    },
    {
      title: "AI Literacy",
      issuer: "IBM SkillsBuild",
    },
    {
      title: "Introduction to Database Systems",
      issuer: "NPTEL",
    },
  ];

  return (
    <section id="certifications" className="certifications section">
      <div className="section-heading">
        <p>05</p>
        <h2>Certifications</h2>
      </div>

      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <article className="certification-card" key={index}>
            <span className="certification-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3>{certification.title}</h3>
              <p>{certification.issuer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;