import HeaderFrame from "../components/HeaderFrame";
import Footer2 from "../components/Footer2";
import styles from "./BlogContentView.module.css";

const BlogContentView = () => {
  return (
    <div className={styles.blogContentView}>
      <HeaderFrame />
      <Footer2 />
    </div>
  );
};

export default BlogContentView;
