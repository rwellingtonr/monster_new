import { CHANGE_SEARCHFIELD } from "./constants.jsx"

const initialState = {
  searchField: "",
}

export const searchMonsters = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload }
    default:
      return state
  }
}
