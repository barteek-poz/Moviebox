import logo from "../../assets/logo_small.svg";
export const ErrorElement = () => {
  return (
    <div className="BACKDROP absolute flex flex-col gap-10 items-center justify-center w-lvw h-lvh bg-black z-50">
      <img
        src={logo}
        alt="logo"
        className="LOGO bg-yellow rounded-lg p-1 pl-1.5 "
      />

      <h2 className="text-yellow">
        Sorry, something went wrong. Please refresh the page or try to reconnect
        later
      </h2>
    </div>
  );
};
