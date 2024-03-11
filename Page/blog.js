import FrameHeader from "../components/FrameHeader";
import FooterInstance from "../components/FooterInstance";
import GroupComponent from "../components/GroupComponent";
import Footer3 from "../components/Footer3";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <FrameHeader />
      <FooterInstance />
      <section className="frame-f-a-q-it-was-a-humorousl">
        <div className="product">
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
        <img className="loader-icon" loading="lazy" alt="" src="/loader.svg" />
      </section>
      <Footer3 />
    </div>
  );
};

export default Blog;
