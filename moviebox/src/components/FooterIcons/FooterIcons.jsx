import LOGO_ICON from "../../assets/logo_small.svg";
import FACEBOOK_ICON from "../../assets/facebook.svg";
import TWITTER_ICON from "../../assets/twitter.svg";
import INSTAGRAM_ICON from "../../assets/instagram.svg";

export const FooterIcons = () => {
  return (
    <div className="flex flex-col items-end gap-1">
      <img src={LOGO_ICON} alt="logo-icon" className="w-32 h-12 fill-black" />
      <div className="flex">
        <a href="#">
          <img src={FACEBOOK_ICON} alt="facebook-icon" />
        </a>
        <a href="#">
          <img src={TWITTER_ICON} alt="twitter-icon" className="ml-3 fill-black" />
        </a>
        <a href="#">
          <img src={INSTAGRAM_ICON} alt="instagram-icon" className="ml-3" />
        </a>
      </div>
    </div>
  );
};
