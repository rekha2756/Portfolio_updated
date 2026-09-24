function Achievements() {
  return (
    <section id="achievements" className="achievements section">
      <div className="section-heading">
        <p>06</p>
        <h2>Achievements</h2>
      </div>

      <div className="achievements-grid">
        <article className="achievement-card">
          <span className="achievement-number">01</span>
          <h3>Smart Coder</h3>
          <p>
            Global Rank 10,135 among 52,630 participants.
          </p>
        </article>

        <article className="achievement-card">
          <span className="achievement-number">02</span>
          <h3>LeetCode</h3>
          <p>
            Solved 100+ coding problems.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Achievements;