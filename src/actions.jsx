import {
  CHANGE_SEARCHFIELD,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED,
} from "./constants.jsx"

// define a type and the payload
export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
})

export const requestMonsters = (dispatch) => {
  dispatch({ type: REQUEST_MONSTERS_PENDING })
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => dispatch({ type: REQUEST_MONSTERS_SUCCESS, payload: data }))
    .catch((e) => dispatch({ type: REQUEST_MONSTERS_FAILED, payload: e }))
}
