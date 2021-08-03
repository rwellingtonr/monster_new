import {
  CHANGE_SEARCHFIELD,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED,
} from "./constants.jsx"

//the initial state for search field
const initialStateSearch = {
  searchField: "",
}
const initialStateMonsters = {
  isPending: false,
  monsters: [],
  error: "",
}

// This reducer runs a query to search the typed monster in the cards
export const searchMonsters = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload }
    default:
      return state
  }
}

// this reducer should
export const requestMonsters = (state = initialStateMonsters, action = {}) => {
  switch (action.type) {
    case REQUEST_MONSTERS_PENDING:
      return { ...state, isPending: true }

    case REQUEST_MONSTERS_SUCCESS:
      return { ...state, monsters: action.payload, isPending: false }

    case REQUEST_MONSTERS_FAILED:
      return { ...state, error: action.payload, isPending: false }
    default:
      return state
  }
}
