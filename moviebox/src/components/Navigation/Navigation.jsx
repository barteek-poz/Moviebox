import { CenteredContent } from "../CenteredContent/CenteredContent";
import { NavLinks } from "../NavLinks/NavLinks";
import { NavSearchBar } from "../NavSearchBar/NavSearchBar";

export const Navigation = () => {
  return (
    <div className="NAVBACKGROUND  bg-yellow h-24">
      <CenteredContent>
        <nav className="NAV flex items-center justify-between py-2.5">
          <NavLinks />
          <NavSearchBar />
        </nav>
      </CenteredContent>
    </div>
  );
};
