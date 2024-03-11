import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroChild} />
      <header className={styles.header}>
        <div className={styles.functionNode} />
        <div className={styles.constantNode}>
          <div className={styles.items}>
            <div className={styles.sequenceNode}>
              <div className={styles.about}>Trang chủ</div>
            </div>
            <div className={styles.services}>Bác sĩ</div>
            <div className={styles.sequenceNode1}>
              <div className={styles.team}>Cơ sở y tế</div>
            </div>
            <div className={styles.careers}>Cẩm nang</div>
          </div>
        </div>
        <div className={styles.enabledisableShadow}>
          <div className={styles.shadow} />
          <b className={styles.field}>Tư vấn</b>
          <div className={styles.iterationNode}>
            <img
              className={styles.systemComponentsbuttonfillIcon}
              loading="lazy"
              alt=""
              src="/system-componentsbuttonfillrounded--border@2x.png"
            />
            <div className={styles.mask} />
          </div>
        </div>
        <div className={styles.enabledisableShadow1}>
          <div className={styles.shadow1} />
          <div className={styles.mask1} />
          <b className={styles.field1}>Đăng nhập</b>
        </div>
      </header>
      <div className={styles.compositeNode}>
        <div className={styles.groupingNode}>
          <h1 className={styles.hotelsHowToContainer}>
            <p className={styles.orderYourLivestock}>
              <span>{`Order your `}</span>
              <b className={styles.livestock}>Livestock</b>
            </p>
            <p className={styles.andGetThem}>and Get Them Delivered</p>
            <p className={styles.atYourDoorstep}>at your Doorstep</p>
          </h1>
          <h3 className={styles.soYoureTryingContainer}>
            <p className={styles.buyFitForSlaughterAnd}>
              – Buy Fit-for-Slaughter and Traceable Livestock.
            </p>
            <p className={styles.getItProcessed}>
              – Get it Processed at a Livestock247.com Certified Butchery /
              Abattoir.
            </p>
            <p className={styles.weDeliverTo}>
              – We Deliver to your address of choice.
            </p>
          </h3>
        </div>
        <div className={styles.elseNode}>
          <img
            className={styles.baseIcon}
            loading="lazy"
            alt=""
            src="/base@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
