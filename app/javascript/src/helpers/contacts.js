import CONTACT_CATEGORIES from "constants/contactCategories";

export const getInitialContactCategory = () =>
  Object.values(CONTACT_CATEGORIES)[0][0];
