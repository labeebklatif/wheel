import * as Yup from "yup";

export const ADD_CONTACT_FORM = {
  INITIAL_VALUES: {
    firstName: "",
    lastName: "",
    email: "",
    role: ""
  },
  SELECT_OPTIONS: {
    roles: [
      { label: "Owner", value: "owner" },
      { label: "Customer", value: "customer" }
    ]
  },
  VALIDATION_SCHEMA: Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    role: Yup.string().required("Required")
  })
};
