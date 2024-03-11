import styles from "./Tag1InHomepage1.module.css";

const Tag1InHomepage1 = () => {
  return (
    <div className={styles.tag1InHomepage}>
      <div className={styles.backgroundFrame}>
        <div className={styles.jun2018}>28 MARCH 2019</div>
      </div>
      <section className={styles.contentFrame}>
        <h3 className={styles.dudeYoureGettingContainer}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.whyDoRoasters}>WHY DO ROASTERS</p>
          <p className={styles.crowAllDay}>CROW ALL DAY?</p>
        </h3>
        <div className={styles.thereIsA}>
          There is a moment in the life of any aspiring astronomer that it is
          time to buy that first telescope.
        </div>
      </section>
      <section className={styles.maskedRectangle}>
        <img
          className={styles.maskedRectangleChild}
          alt=""
          src="/rectangle-21.svg"
        />
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
      </section>
    </div>
  );
};

export default Tag1InHomepage1;
