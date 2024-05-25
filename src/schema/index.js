import * as yup from "yup";

 const emailSchema = yup.object().shape({

  email: yup
    .string("Invalid Character", (value) => (value.length > 1 ? "s" : ""))
    .email("Valid email required")
    .required("Please enter you email address")
});

export {
	emailSchema
}
