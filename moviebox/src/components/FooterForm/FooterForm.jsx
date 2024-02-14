import { Form } from "react-router-dom";

import { useState } from "react";
import { emailValidation } from "../../helpers/emailValidation";
export const FooterForm = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const emailValidationHandler = (e) => {
    e.preventDefault();
    setEmailTouched(true);
    if (emailValidation(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const validationCondition = !emailValid && emailTouched ? true : false;
  return (
    <Form onSubmit={emailValidationHandler}>
      <div className="flex items-end gap-2.5">
        <input
          className="text-base w-80 pt-2 pl-2 text-white outline-none bg-transparent border-b border-b-yellow focus:outline-yellow focus:outline-1 focus:rounded-lg focus:border-b-transparent"
          type="text"
          placeholder="Your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailTouched(false);
          }}
        />
        <button className="bg-yellow text-black text-base flex items-center gap-1 border-none rounded-lg p-1.5 transition duration-300 hover:bg-white group">
          <svg
            className="fill-yellow group-hover:fill-white transition duration-300 "
            width="20"
            height="17"
            viewBox="0 0 22 17"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.11111 14.9286L7.66667 8.5M19.8889 14.9286L14.3333 8.5M1 4.21429L9.02778 9.37493C9.74056 9.83318 10.0969 10.0624 10.4821 10.1513C10.8226 10.23 11.1774 10.23 11.5179 10.1513C11.9031 10.0624 12.2594 9.83318 12.9722 9.37493L21 4.21429M4.55556 16H17.4444C18.689 16 19.3113 16 19.7867 15.7664C20.2048 15.561 20.5448 15.2332 20.7578 14.83C21 14.3716 21 13.7715 21 12.5714V4.42857C21 3.22846 21 2.6284 20.7578 2.17002C20.5448 1.76681 20.2048 1.439 19.7867 1.23356C19.3113 1 18.689 1 17.4444 1H4.55556C3.311 1 2.68871 1 2.21336 1.23356C1.79521 1.439 1.45526 1.76681 1.24221 2.17002C1 2.6284 1 3.22845 1 4.42857V12.5714C1 13.7715 1 14.3716 1.24221 14.83C1.45526 15.2332 1.79521 15.561 2.21336 15.7664C2.68871 16 3.31099 16 4.55556 16Z"
              stroke="black"
              strokeWidth="1.28"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Subscribe</p>
        </button>
      </div>

      <p
        className="text-yellow text-sm p-2.5 pb-5 "
        style={{ visibility: validationCondition ? "visible" : "hidden" }}>
        Email is invalid. Required format `xxx@xx.xx`
      </p>
    </Form>
  );
};
