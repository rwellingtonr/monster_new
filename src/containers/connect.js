import { requestMonsters, setSearchField } from "../actions.jsx"

export const mapStateToProps = (state) => {
  return {
    searchField: state.searchMonsters.searchField,
    monsters: state.requestMonsters.monsters,
    isPending: state.requestMonsters.isPending,
    error: state.requestMonsters.error,
  }
}
//Trigger the action - send actions
export const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestMonsters: () => requestMonsters(dispatch),
  }
}
