function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="section-heading">
        <p>07</p>
        <h2>Let's Talk</h2>
      </div>

      <div className="contact-content">
        <div className="contact-intro">
          <h3>Have a project or opportunity?</h3>
          <p>
            I'm open to internship opportunities, projects, and
            conversations about web development.
          </p>
        </div>

        <div className="contact-links">
          <a href="mailto:your-email@example.com">
            Email →
          </a>

          <a
            href="https://linkedin.com/in/rekha-gadige-31980635a"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn →
          </a>

          <a
            href="https://github.com/rekha2756"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>© 2026 Rekha Gadige</p>
        <p>Computer Science Engineering Student & Web Developer</p>
      </footer>
    </section>
  );
}

export default Contact;