import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import styles from "./MainLayout.module.css"
export const MainLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};
