import { Link } from "react-router-dom";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { NavLinks } from "../NavLinks/NavLinks";
import logo from "../../assets/logo_small.svg";
import { NavSearchBar } from "../NavSearchBar/NavSearchBar";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { useLayout } from "../../hooks/useLayout";

export const Navigation = () => {
  const { screenWidth } = useLayout();
  return (
    <div className="NAVBACKGROUND  bg-yellow h-24">
      <CenteredContent>
        <nav className="NAV flex items-center justify-between py-2.5">
          <Link to="/" className="">
            <img
              src={logo}
              alt="logo"
              className="LOGO  rounded-lg p-1 pl-1.5 transition duration-300 hover:scale-105 "
            />
          </Link>
          {screenWidth >1100 ? <NavLinks /> : ''}
          {screenWidth < 1100 ? <BurgerMenu /> : ''}
          {screenWidth >1100 ? <NavSearchBar/> : ''}
        </nav>
      </CenteredContent>
    </div>
  );
};
