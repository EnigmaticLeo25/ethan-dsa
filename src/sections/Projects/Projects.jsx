import React from "react";
import styles from "./ProjectsStyles.module.css";
import chess from "../../assets/image.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectiontitle}>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={chess}
          h3="Chess Piece detection using YOLOv8"
          link="https://github.com/heet009/Chess-Board-and-Piece-Detection"
        />
        <ProjectCard
          h3="Book Notes App"
          link="https://github.com/EnigmaticLeo25/Book-Notes"
        />
        <ProjectCard
          h3="Trek-Cinemas"
          link="https://github.com/heet009/theator-management"
        />
      </div>
    </section>
  );
}

export default Projects;
