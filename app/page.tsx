"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="container">

      {/* HERO */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="title">PRINCE WORLD</h1>

        <p className="subtitle">
          AI Developer • Full Stack Builder • Tech Explorer
        </p>

        <motion.img
          src="/banner.png"
          className="hero-img"
          whileHover={{ scale: 1.03 }}
          alt="banner"
        />

        <motion.button 
          className="main-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          VIEW PROJECTS
        </motion.button>
      </motion.section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2 className="section-title">PROJECTS</h2>

        <div className="project-grid">

          {/* RAah */}
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <img src="/raah.png" alt="raah" />
            <h3>Raah</h3>
            <p>Smart Udaipur Transport</p>
            <button
              onClick={() =>
                window.open(
                  "https://transport-flow--princerao1235u.replit.app"
                )
              }
            >
              EXPLORE
            </button>
          </motion.div>

          {/* Govnnect */}
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <img src="/project2.png" alt="govnnect" />
            <h3>Govnnect</h3>
            <p>Civic issue platform</p>
            <button>EXPLORE</button>
          </motion.div>

          {/* 2130 Group */}
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <img src="/2130group.png" alt="2130" />
            <h3>2130 Group</h3>
            <p>Professional website</p>
            <button
              onClick={() =>
                window.open("https://two130-group-website.onrender.com/")
              }
            >
              EXPLORE
            </button>
          </motion.div>

        </div>
      </section>

    </main>
  );
}