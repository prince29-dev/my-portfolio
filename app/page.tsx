"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="container">

      {/* HERO */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.h1 
          className="title"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          PRINCE WORLD
        </motion.h1>

        <p className="subtitle">
          AI Developer • Full Stack Builder • Tech Explorer
        </p>

        <motion.img
          src="/banner.png"
          className="hero-img"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />

        <motion.button 
          className="main-btn"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
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
          <motion.div 
            className="card"
            whileHover={{ scale: 1.08 }}
          >
            <img src="/raah.png" />
            <h3>Raah</h3>
            <p>Smart Udaipur Transport</p>
            <button onClick={() =>
              window.open("https://transport-flow--princerao1235u.replit.app")
            }>
              EXPLORE
            </button>
          </motion.div>

          {/* Govnnect */}
          <motion.div 
            className="card"
            whileHover={{ scale: 1.08 }}
          >
            <img src="/project2.png" />
            <h3>Govnnect</h3>
            <p>Civic issue platform</p>
            <button>EXPLORE</button>
          </motion.div>

          {/* 2130 Group */}
          <motion.div 
            className="card"
            whileHover={{ scale: 1.08 }}
          >
            <img src="/2130group.png" />
            <h3>2130 Group</h3>
            <p>Professional website</p>
            <button onClick={() =>
              window.open("https://two130-group-website.onrender.com/")
            }>
              EXPLORE
            </button>
          </motion.div>

        </div>
      </section>

    </main>
  );
}