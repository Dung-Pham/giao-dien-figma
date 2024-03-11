import styles from "./Tag2InList.module.css";

const Tag2InList = () => {
  return (
    <div className={styles.tag2InList}>
      <div className={styles.headerText}>
        <div className={styles.jun2018}>04 June 2019</div>
      </div>
      <section className={styles.dudeYoureGettingContainer}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.onlinePlatformTo}>
          ONLINE PLATFORM TO BRIDGE IN LIVESTOCK.....
        </p>
      </section>
      <section className={styles.maskedImage}>
        <img
          className={styles.maskedImageChild}
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

export default Tag2InList;
