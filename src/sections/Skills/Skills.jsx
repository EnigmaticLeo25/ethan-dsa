import styles from "./SkillsStyles.module.css";

import React from "react";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillList}></div>
    </section>
  );
}

export default Skills;
