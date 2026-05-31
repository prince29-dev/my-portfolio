export default function Home() {
  return (
    <main className="container">

      {/* 🔥 HERO SECTION */}
      <section className="hero">
        <h1 className="title">PRINCE WORLD</h1>

        <p className="subtitle">
          AI Developer • Full Stack Builder • Tech Explorer
        </p>

        <img src="/banner.png" className="hero-img" />

        {/* BUTTONS */}
        <div className="buttons">
          <a href="mailto:princerao2923@gmail.com">
            <button className="btn email">📧 Email</button>
          </a>

          <a href="https://github.com/prince29-dev" target="_blank">
            <button className="btn github">🐙 GitHub</button>
          </a>

          <a href="https://www.linkedin.com/in/prince-rao-a887a230b" target="_blank">
            <button className="btn linkedin">💼 LinkedIn</button>
          </a>

          <a href="https://drive.google.com/file/d/1NYL39pa-5GzgBSBdtiUviL40tTjM6f7g/view" target="_blank">
            <button className="btn resume">📄 Resume</button>
          </a>
        </div>

        <button className="main-btn">VIEW PROJECTS</button>
      </section>

      {/* 🎮 PROJECT SECTION */}
      <section className="projects">

        {/* 🥇 RAAH */}
        <div className="card">
          <img src="/raah.png" className="project-img" />
          <h3>Raah</h3>
          <p>Smart transport system</p>

          <a href="https://transport-flow--princerao1235u.replit.app" target="_blank">
            <button className="explore-btn">EXPLORE</button>
          </a>
        </div>

        {/* 🥈 GOVNNECT */}
        <div className="card">
          <img src="/project2.png" className="project-img" />
          <h3>Govnnect</h3>
          <p>Civic issue platform</p>

          <button className="explore-btn">EXPLORE</button>
        </div>

        {/* 🥉 2130 GROUP */}
        <div className="card">
          <img src="/2130group.png" className="project-img" />
          <h3>2130 Group</h3>
          <p>Professional contractor website</p>

          <a href="https://two130-group-website.onrender.com/" target="_blank">
            <button className="explore-btn">EXPLORE</button>
          </a>
        </div>

      </section>

    </main>
  );
}