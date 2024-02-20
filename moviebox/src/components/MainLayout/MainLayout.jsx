import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";

export const MainLayout = () => {
  return (
    <div className="flex h-lvh min-h-full flex-col justify-between">
      <Navigation />
      
      <Outlet/>
      <Footer />
    </div>
  );
};
