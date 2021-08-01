import { CHANGE_SEARCHFIELD } from "./constants.jsx"

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
})
