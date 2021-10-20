import { NOTE_CATEGORIES } from "./constants";

export const getInitialNoteCategory = () =>
  Object.values(NOTE_CATEGORIES)[0][0];
