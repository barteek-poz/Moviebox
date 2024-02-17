import { CenteredContent } from "../CenteredContent/CenteredContent";
import { NavLinks } from "../NavLinks/NavLinks";
import { NavSearchBar } from "../NavSearchBar/NavSearchBar";

export const Navigation = () => {
  return (
    <div className="NAVBACKGROUND w-full bg-black h-24 border-b border-b-yellow">
      <CenteredContent>
        <nav className="NAV flex items-center justify-between py-2.5">
          <NavLinks />
          <NavSearchBar />
        </nav>
      </CenteredContent>
    </div>
  );
};
