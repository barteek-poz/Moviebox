import LOGO_ICON from "../../assets/logo.svg";
import FACEBOOK_ICON from "../../assets/facebook.svg";
import TWITTER_ICON from "../../assets/twitter.svg";
import INSTAGRAM_ICON from "../../assets/instagram.svg";
import styles from '../FooterIcons/FooterIcons.module.css'
export const FooterIcons = () => {
  return (
    <div className={styles.footerIcons}>
      <img src={LOGO_ICON} alt="logo-icon" className={styles.logo} />
      <div>
        <a href="#">
          <img
            src={FACEBOOK_ICON}
            alt="facebook-icon"
            className={styles.icon}
          />
        </a>
        <a href="#">
          <img src={TWITTER_ICON} alt="twitter-icon" className={styles.icon} />
        </a>
        <a href="#">
          <img
            src={INSTAGRAM_ICON}
            alt="instagram-icon"
            className={styles.icon}
          />
        </a>
      </div>
    </div>
  );
};
