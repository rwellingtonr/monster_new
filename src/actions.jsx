import { CHANGE_SEARCHFIELD } from "./constants.jsx"
// define a type and the payload
export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
})
