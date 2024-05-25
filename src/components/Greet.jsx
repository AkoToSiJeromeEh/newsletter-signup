import PropTypes from "prop-types";
import { iconSuccess } from "../assets";

export const Greet = ({ userEmail, setEmailValid }) => {
  return (
    <section className="bg-white h-screen p-5 Tablet:p-[3rem_4rem] Tablet:rounded-[2rem] text-start Tablet:w-[33rem] Tablet:h-[33rem] flex items-center Tablet:items-start  ">
      <div className=" grid gap-6 grid-rows-[1fr_auto] h-full    ">
        <div className=" flex flex-col gap-8 self-center items-center text-center Mobile:text-start Mobile:items-start Tablet:self-start">
          <figure>
            <img src={iconSuccess} alt="" />
          </figure>
          <h1 className="text-[15vw]  Mobile:text-6xl font-bold"> Thanks for subscribing!</h1>
          <p className=" w-full">
            A confirmation email has been sent to {userEmail}. Please open it
            and click the button inside to confirm your subscription.
          </p>
        </div>
        <button
          onClick={() => setEmailValid(preval => !preval)}
          type="button"
          className={`w-full p-[0.95rem] self-end  rounded-lg text-white bg-neutral-dark-slate-grey hover:bg-gradient-to-r from-primary-redpink to-primary-tomato  hover:shadow-[0px_10px_5px] hover:shadow-[#ffece8] `}
        >
          Dismiss message
        </button>
      </div>
    </section>
  );
};

Greet.propTypes = {
  userEmail: PropTypes.string,
  setEmailValid: PropTypes.func,
};
