import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};
