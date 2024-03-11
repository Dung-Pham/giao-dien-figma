import styles from "./Footer1.module.css";

const Footer1 = () => {
  return (
    <div className={styles.footer}>
      <footer className={styles.baseParent}>
        <div className={styles.base} />
        <div className={styles.baseRectangle}>
          <div className={styles.headerText}>
            <div className={styles.itWasAContainer}>
              <p className={styles.theVisionOf}>
                The vision of Livestock247.com is to mitigate the
              </p>
              <p className={styles.spreadOfZoonotic}>
                spread of zoonotic diseases through the provision of
              </p>
              <p className={styles.fitForSlaughterAndTraceabl}>
                fit-for-slaughter and traceable livestock to our customers.
              </p>
            </div>
          </div>
          <div className={styles.linkFrames}>
            <div className={styles.buttonsGroup}>
              <div className={styles.column}>
                <h3 className={styles.howItWorks}>Quicklinks</h3>
                <div className={styles.links}>
                  <div className={styles.howToJoin}>Home</div>
                  <div className={styles.howItWorks1}>About Us</div>
                  <div className={styles.integrationsApi}>Be a Partner</div>
                  <div className={styles.iosAndroid}>Blog</div>
                </div>
              </div>
            </div>
            <div className={styles.buttonsDarkTextStoreParent}>
              <img
                className={styles.buttonsDarkTextStore}
                loading="lazy"
                alt=""
                src="/buttons--dark-text--store--google-play1@2x.png"
              />
              <img
                className={styles.buttonsDarkTextStore1}
                loading="lazy"
                alt=""
                src="/buttons--dark-text--store--appstore1@2x.png"
              />
            </div>
          </div>
          <div className={styles.fAQText}>
            <h3 className={styles.contacts}>Contacts</h3>
            <div className={styles.frameHolder}>
              <div className={styles.phoneEmailFrame}>
                <div className={styles.phone}>Phone:</div>
                <div className={styles.eMail}>E-mail:</div>
                <div className={styles.address}>Address:</div>
              </div>
              <div className={styles.infopixsellzioLogo}>
                <div className={styles.bogisichGreensText}>0906-290-3550</div>
                <div className={styles.infopixsellzio}>@livestock247.com</div>
                <div className={styles.bogisichGreens}>
                  <p className={styles.thFloorValley}>
                    4th Floor, Valley View Plaza,
                  </p>
                  <p className={styles.opebiRoadIkeja}>
                    99 Opebi Road, Ikeja, Lagos-Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialLinksGroup}>
          <div className={styles.iconAreaFrames}>
            <div className={styles.darkButtonFrame}>
              <div className={styles.apollo}>© 2018 Livestock247</div>
            </div>
            <div className={styles.privacyTermsConditionsFrame}>
              <div className={styles.fAQTextFrame}>
                <div className={styles.iconsGroup}>
                  <div className={styles.faq}>FAQ</div>
                </div>
                <div className={styles.privacy}>Privacy</div>
                <div
                  className={styles.termsConditions}
                >{`Terms & Conditions`}</div>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <div className={styles.group}>
                <img
                  className={styles.iconsIconArea}
                  loading="lazy"
                  alt=""
                  src="/icons--icon-area1@2x.png"
                />
                <img
                  className={styles.iconsIconAreaCopy3}
                  loading="lazy"
                  alt=""
                  src="/icons--icon-area-copy-3@2x.png"
                />
                <img
                  className={styles.iconsIconAreaCopy2}
                  loading="lazy"
                  alt=""
                  src="/icons--icon-area-copy-2.svg"
                />
                <img
                  className={styles.iconsIconAreaCopy4}
                  loading="lazy"
                  alt=""
                  src="/icons--icon-area-copy-4.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer1;
