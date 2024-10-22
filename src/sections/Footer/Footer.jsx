import styles from "./FooterStyles.module.css";
import React from "react";

function Footer() {
  const date = new Date();
  return (
    <section id="footer" className={styles.container}>
      <p>
        {" "}
        &copy; {date.getFullYear()} Ethan Dsa.
        <br />
        All righs reserved.
      </p>
    </section>
  );
}

export default Footer;
