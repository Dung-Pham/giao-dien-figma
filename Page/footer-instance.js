import styles from "./FooterInstance.module.css";

const FooterInstance = () => {
  return (
    <section className={styles.footerInstance}>
      <div className={styles.baseRectangle}>
        <h1 className={styles.handbooks}>Handbooks</h1>
        <div className={styles.howItWorksColumn}>
          <div className={styles.lagosCattleMarket}>Lagos cattle market</div>
        </div>
        <div className={styles.privacyTermsConditions} />
        <div className={styles.contactsFrame}>
          <div className={styles.infopixsellzioFrame}>
            <div className={styles.bogisichGreensText}>
              <div className={styles.show}>Show</div>
            </div>
            <div className={styles.groupButtons}>
              <img
                className={styles.groupButtonsChild}
                alt=""
                src="/rectangle-182.svg"
              />
              <div className={styles.privacyTermsConditions1}>10</div>
              <div className={styles.contactsPhoneEmailAddressF}>
                <div className={styles.triangleTriangleFrame}>
                  <img
                    className={styles.triangleIcon}
                    alt=""
                    src="/triangle.svg"
                  />
                  <img
                    className={styles.triangleIcon1}
                    alt=""
                    src="/triangle.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterInstance;
