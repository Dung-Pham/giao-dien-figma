import Hero from "../components/Hero";
import SwitchNode from "../components/SwitchNode";
import Footer from "../components/Footer";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
      <section className={styles.forLoop}>
        <SwitchNode />
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
