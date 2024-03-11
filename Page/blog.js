import FrameHeader from "../components/FrameHeader";
import FooterInstance from "../components/FooterInstance";
import GroupComponent from "../components/GroupComponent";
import Footer3 from "../components/Footer3";
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <div className={styles.blog}>
      <FrameHeader />
      <FooterInstance />
      <section className={styles.frameFAQItWasAHumorousl}>
        <div className={styles.product}>
          <GroupComponent />
          <GroupComponent />
          <GroupComponent />
          <GroupComponent />
          <GroupComponent />
          <GroupComponent />
          <GroupComponent />
          <GroupComponent />
          <GroupComponent />
          <GroupComponent />
          <GroupComponent />
          <GroupComponent />
        </div>
        <img
          className={styles.loaderIcon}
          loading="lazy"
          alt=""
          src="/loader.svg"
        />
      </section>
      <Footer3 />
    </div>
  );
};

export default Blog;
