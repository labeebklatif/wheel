import * as Yup from "yup";

export const CONTACT_CATEGORIES = {
  USER_TYPES: [
    {
      key: "contact-type-all",
      label: "All",
      count: 0
    },
    {
      key: "contact-type-archived",
      label: "Archived",
      count: 0
    },
    {
      key: "user-type-completed",
      label: "Completed",
      count: 60
    },
    {
      key: "user-type-phase2",
      label: "Phase 2",
      count: 60
    }
  ],
  SEGMENTS: [],
  TAGS: []
};

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
