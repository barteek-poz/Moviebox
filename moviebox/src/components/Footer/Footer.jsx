import styles from "../Footer/Footer.module.css";

import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FooterForm } from "../FooterForm/FooterForm";
import { FooterIcons } from "../FooterIcons/FooterIcons";

export const Footer = () => {
  return (
    <div className={styles.footerBackground}>
      <CenteredContent>
        <div className={styles.footer}>
          <div className={styles.footerSubs}>
            <h3>Stay up to date!</h3>
            <p className={styles.footerText}>
              Join our newsletter and never miss the most important premiers of
              the week!
            </p>
            <FooterForm />
          </div>
          <FooterIcons />
        </div>
      </CenteredContent>
    </div>
  );
};
