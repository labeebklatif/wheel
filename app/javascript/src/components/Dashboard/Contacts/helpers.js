import { CONTACT_CATEGORIES } from "./constants";

export const getInitialContactCategory = () =>
  Object.values(CONTACT_CATEGORIES)[0][0];
