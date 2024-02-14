import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import styles from "./MainLayout.module.css"
export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Navigation />
      
      <Outlet/>
      <Footer />
    </div>
  );
};
