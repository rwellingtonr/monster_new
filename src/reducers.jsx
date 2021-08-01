import { CHANGE_SEARCHFIELD } from "./constants.jsx"

//the initial state
const initialState = {
  searchField: "",
}

// Switch through the actions type to do a specifical function
export const searchMonsters = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload }
    default:
      return state
  }
}
