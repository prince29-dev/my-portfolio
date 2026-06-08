"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Home() {

  useEffect(() => {
    // Ghast follow cursor
    const ghast = document.querySelector(".ghast");

    window.addEventListener("mousemove", (e) => {
      gsap.to(ghast, {
        x: e.clientX / 10,
        y: e.clientY / 10,
        duration: 1,
      });
    });

    // Floating Enderman
    gsap.to(".enderman", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 2,
    });

  }, []);

  return (
    <>
      {/* GAME BACKGROUND */}
      <div className="bg-stars"></div>

      {/* HERO */}
      <section className="hero">
        <h1 className="title">PRINCE WORLD</h1>

        <img src="/banner.png" className="hero-img" />

        <button className="main-btn">ENTER WORLD</button>
      </section>

      {/* MOBS */}
      <img src="/ghast.jpeg" className="ghast" />
      <img src="/enderman.jpeg" className="enderman" />

      {/* PROJECTS */}
      <section className="projects">
        <h2 className="section-title">PROJECTS</h2>

        <div className="project-grid">
          <div className="card">
            <img src="/raah.png" />
            <h3>Raah</h3>
            <p>Smart Transport</p>
          </div>

          <div className="card">
            <img src="/2130group.png" />
            <h3>2130 Group</h3>
          </div>

          <div className="card">
            <img src="/file.svg" />
            <h3>Govnnect</h3>
          </div>
        </div>
      </section>
    </>
  );
}