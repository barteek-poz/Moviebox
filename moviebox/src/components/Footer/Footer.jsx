import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FooterForm } from "../FooterForm/FooterForm";
import { FooterIcons } from "../FooterIcons/FooterIcons";

export const Footer = () => {
  return (
    <div className="w-lvw bg-yellow border-t border-t-yellow ">
      <CenteredContent>
        <div className="flex justify-between items-center py-2.5 pb-10 ">
          <div>
            <h3 className="text-black">Stay up to date!</h3>
            <p className="text-base font-normal text-black mt-4 mb-7">
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
