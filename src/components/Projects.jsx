import React from "react";
import "./projects.css";          // make sure the path is correct

// 1️⃣  Edit this list to add / remove projects in one place
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    subtitle: "Responsive React based site",
    description:
      "I developed a responsive personal portfolio website using React to showcase my skills, projects, and contact information. The site features a modular component structure, including a sticky Navbar for smooth navigation, a dynamic Home section with an introduction, an About section highlighting my background and skills section, a Projects section displaying key work with live demo links, and a functional Contact Form for direct communication. Styled with CSS, the site ensures a modern look and mobile responsiveness. React Router is used to enable seamless single-page navigation, making the portfolio both user-friendly and efficient.",
    img: "portfoliothumbnail.jpg",     // replace with your image path
    url: "https://mansi-portfolio06.netlify.app/",
    repo: "https://github.com/MansiPathak06/portfolio",
  },
  {
    id: 2,
    title: "Dice Game",
    subtitle: " A mini‑game",
    description:
      "This Dice Game is built using React and simulates a simple two-player game between the user and the computer. On clicking the “Roll” button, both players roll a dice, and the result is instantly shown on screen with animated dice faces.The application demonstrates core React concepts such as state management, conditional rendering, and basic game logic. It also includes responsive design and a reset score option for replaying rounds. The player can also read rules before starting the game!",
    img: "dicegamethumbnail.jpg",
    url: "http://minidicerollgame.netlify.app",
    repo: "https://github.com/MansiPathak06/Dice-game",
  },
  {
    id: 3,
    title: "Live E‑Commerce Project",
    subtitle: "Currently in development",
    description:
      "Herbsfox is a full-featured e-commerce website developed using React JS, designed for selling herbal and organic products. The application is structured using reusable React components and features a responsive design for optimal performance across all devices. It includes a fixed Navbar with routing to Home, Products, Cart, Blog, and My Account. The Home component showcases featured items and promotional banners. The Product Listing and Product Detail components allow users to browse and view individual items with pricing and descriptions. A global Cart Context manages add-to-cart functionality across the app. The Search Bar enables real-time filtering of products. The My Account section handles user login, registration, and order history, while the Checkout component supports both Cash on Delivery and Razorpay payment integration. Additional features include a Blog Section, Contact Form, and an Admin Panel for managing products and orders. React Router is used for seamless navigation, and the UI is styled using CSS for a clean, modern user experience.Launching soon!",
    img: "herbsfoxthumbnail.jpg",
    url: "",                      // leave blank while it’s not live
    repo: "",
  },
];

const Projects = () => (
  <section className="projects" id="projects">
    <h2 className="section-title">Projects</h2>

    <div className="project-grid">
      {projects.map((p) => (
        <article
          key={p.id}
          className={`project-card ${!p.url ? "disabled" : ""}`}
        >
          <img
            src={p.img}
            alt={`${p.title} thumbnail`}
            className="project-img"
          />

          <div className="project-content">
            <h3>{p.title}</h3>
            <p className="subtitle">{p.subtitle}</p>
            <p>{p.description}</p>

            {p.url ? (
              <a
                href={p.url}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View&nbsp;Live
              </a>
            ) : (
              <span className="btn disabled-btn">Coming&nbsp;Soon</span>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
