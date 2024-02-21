import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import { Loader } from "../Loader/Loader";

export const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="flex flex-col justify-between">
      {(state === "loading" || state === "submitting") && <Loader />}
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};
