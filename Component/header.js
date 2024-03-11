import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <header className={styles.baseRectangle} />
      <div className={styles.items}>
        <div className={styles.aboutServices}>
          <div className={styles.about}>Trang chủ</div>
        </div>
        <div className={styles.services}>Bác sĩ</div>
        <div className={styles.aboutServices1}>
          <div className={styles.team}>Cơ sở y tế</div>
        </div>
        <div className={styles.careers}>Cẩm nang</div>
      </div>
      <div className={styles.shadowedFrame}>
        <div className={styles.buttonFillRoundedFrame}>
          <div className={styles.enabledisableShadow}>
            <div className={styles.shadow} />
          </div>
          <img
            className={styles.systemComponentsbuttonfillIcon}
            loading="lazy"
            alt=""
            src="/system-componentsbuttonfillrounded--border@2x.png"
          />
          <b className={styles.field}>Tư vấn</b>
        </div>
        <button className={styles.enabledShadowMaskFrame}>
          <div className={styles.enabledisableShadow1}>
            <div className={styles.shadow1} />
            <div className={styles.mask} />
            <div className={styles.mask1} />
          </div>
          <b className={styles.field1}>Đăng nhập</b>
        </button>
      </div>
    </div>
  );
};

export default Header;
