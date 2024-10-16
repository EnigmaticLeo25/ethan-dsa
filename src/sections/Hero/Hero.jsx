import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/WhatsApp Image 2024-02-13 at 16.31.55_7dce6fe0.jpg";
import { useTheme } from "../../common/ThemeContext";
import lightMode from "../../assets/light_mode_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import darkMode from "../../assets/dark_mode_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
function Hero() {
  const { theme, toggleTheme } = useTheme();
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="profile pic"></img>
        <img
          className={styles.colorMode}
          src={theme === "light" ? darkMode : lightMode}
          onClick={toggleTheme}
        ></img>
      </div>
      <div className={styles.info}>
        <h1>
          Ethan <br></br>Dsa
        </h1>
        <h2>Full-stack Developer</h2>
        <span>
          <a>Instagram </a>
          <a>github </a>
          <a>LinkedIn </a>
        </span>
        <p>Interested in machine learning and web development</p>
        <a download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
