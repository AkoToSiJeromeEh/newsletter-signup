import { illustrationMobile, ilusstrationDesktop } from "../assets";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { emailSchema } from "../schema";
import { List } from "./List";
import { listData } from "../data";
import { Greet } from "./Greet";
import {  useState } from "react";

export const NewsCard = () => {
  const [isEmailValid, setEmailValid] = useState(false);
  const [validEmail, setValidEmail] = useState();
  




  const listElement = listData?.map((data, index) => (
    <List key={index} label={data.name} />
  ));

  
  return isEmailValid ? (
    <Greet setEmailValid={setEmailValid} userEmail={validEmail} />
  ) : (
    <section    className=" m-0 Tablet:m-[1.8rem_0rem_1.8rem_0rem] bg-neutral-white flex flex-col Tablet:flex-row   w-screen h-screen  Tablet:h-[40rem] Tablet:w-[58rem] justify-start Tablet:justify-between p-0  rounded-none Tablet:rounded-[2rem] ">
      <article  className=" self-start Tablet:self-center order-1 Tablet:order-none p-4 flex flex-col gap-[1.6rem] 
      Tablet:p-[0rem_2.5rem_0rem_3.4rem] w-full Tablet:w-[50%] Tablet:m-auto  ">
        <h1 className=" text-4xl Tablet:text-[3.6rem] font-bold">
          Stay updated!
        </h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="flex flex-col gap-[0.55rem] mb-[1.7rem]">{listElement}</ul>
        <Formik
          validationSchema={emailSchema}
          initialValues={{
            email: "",
          }}
          onSubmit={async(values, formikBag) => {
            const { dirty } = formikBag;
            if (!dirty ) {
              setEmailValid(prevState => !prevState);
              setValidEmail(values.email);
               
            }
          }}
          
        >
          {({ touched, errors }) => {
            return (
              <Form>
                <fieldset>
                  <div className="flex flex-row gap-5 text-[0.95rem] Tablet:text-[0.75rem] font-bold  items-center justify-between">
                    <legend>Email address</legend>
                    {touched.email && errors.email && (
                      <ErrorMessage
                        name="email"
                        render={(msg) => <p className="text-red-400 ">{msg}</p>}
                      />
                    )}
                  </div>
                  <Field
                    className={`border-[0.1px] w-full rounded-lg p-[0.95rem] mb-6 mt-2 ${
                      touched.email && errors.email
                        ? " border-red-400 text-red-400 active:outline-none "
                        : " text-neutral-dark-slate-grey"
                    }`}
                    placeholder="email@company.com"
                    type="email"
                    name="email"
                  />
                </fieldset>
                <button
                 type="submit"
                  className={`w-full p-[0.95rem] rounded-lg text-white bg-neutral-dark-slate-grey hover:bg-gradient-to-r from-primary-redpink to-primary-tomato  hover:shadow-[0px_10px_5px] hover:shadow-[#ffece8] `}
                >
                  Subscribe to monthly newsletter
                </button>
              </Form>
            );
          }}
        </Formik>
      </article>

      <picture className=" p-0 Tablet:p-6 hover:p-0 ">
        <source media="(min-width:900px )" srcSet={ilusstrationDesktop} />
        <img
          className=" h-full w-full image     "
          src={illustrationMobile}
          alt="illustration"
        />
      </picture>
    </section>
  );
};
