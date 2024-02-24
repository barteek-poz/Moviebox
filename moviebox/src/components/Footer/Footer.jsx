
import { useLayout } from "../../hooks/useLayout";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FooterForm } from "../FooterForm/FooterForm";
import { FooterIcons } from "../FooterIcons/FooterIcons";

export const Footer = () => {
  const {screenWidth} = useLayout()
  const mobileFooter = screenWidth > 750 ? true : false
  return (
    <div className=" bg-yellow border-t border-t-yellow mt-20 sm:px-5">
      <CenteredContent>
       <div className="flex justify-between items-center py-2.5 pb-2 ">
          {mobileFooter && <div>
            <h3 className="text-black">Stay up to date!</h3>
            <p className="text-base font-normal text-black mt-4 mb-7">
              Join our newsletter and never miss the most important premiers of
              the week!
            </p>
            <FooterForm />
          </div>}
          <div className={mobileFooter ? '' : 'mx-auto mb-2'}>
          <FooterIcons />
          </div>
        </div>
      </CenteredContent>
    </div>
  );
};
