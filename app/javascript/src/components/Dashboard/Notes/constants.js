import * as Yup from "yup";

export const NOTE_CATEGORIES = {
  USER_TYPES: [
    {
      key: "user-type-all",
      label: "All",
      count: 200
    },
    {
      key: "user-type-users",
      label: "Users",
      count: 80
    },
    {
      key: "user-type-leads",
      label: "Leads",
      count: 60
    },
    {
      key: "user-type-visitors",
      label: "Visitors",
      count: 60
    }
  ],

  REGION: [
    {
      key: "region-europe",
      label: "Europe",
      count: 80
    },
    {
      key: "region-middle-east",
      label: "Middle East",
      count: 80
    },
    {
      key: "region-asia",
      label: "Asia",
      count: 80
    }
  ],

  TAGS: [
    {
      key: "tag-sales",
      label: "Sales",
      count: 80
    },
    {
      key: "tag-finance",
      label: "Finance",
      count: 60
    },
    {
      key: "tag-user-experience",
      label: "User Experience",
      count: 60
    }
  ]
};

export const NEW_NOTE_FORM = {
  INITIAL_VALUES: {
    title: "",
    description: "",
    "assigned-contact": "",
    tags: ""
  },
  SELECT_OPTIONS: {
    assignedContact: [
      {
        label: "Contact 1",
        value: "contact1"
      },
      {
        label: "Contact 2",
        value: "contact2"
      }
    ],
    tags: [
      {
        label: "Tag 1",
        value: "tag1"
      },
      {
        label: "Tag 2",
        value: "tag2"
      }
    ]
  },
  VALIDATION_SCHEMA: Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    "assigned-contact": Yup.string().required("Contact is required"),
    tags: Yup.string().required("Tags is required")
  })
};
