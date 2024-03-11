import Hero from "../components/Hero";
import SwitchNode from "../components/SwitchNode";
import Footer1 from "../components/Footer1";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <section className="for-loop">
        <SwitchNode />
        <Footer1 />
      </section>
    </div>
  );
};

export default HomePage;
