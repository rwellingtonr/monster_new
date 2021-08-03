import React, { useEffect } from "react"
import { connect } from "react-redux"
import SearchField from "../components/SearchField"
import Cardlist from "../components/Cardlist"
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry"
import { requestMonsters, setSearchField } from "../actions.jsx"

// mapStateToProps, mapDispatchToProps
const mapStateToProps = (state) => {
  return {
    searchField: state.searchMonsters.searchField,
    monsters: state.requestMonsters.monsters,
    isPending: state.requestMonsters.isPending,
    error: state.requestMonsters.error,
  }
}
//Trigger the action - send actions
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestMonsters: () => requestMonsters(dispatch),
  }
}

function App(state) {
  // Define the value status
  // const [users, setUsers] = useState([])
  // const [searchField, setSearchField] = useState("")

  // Grab the users from an online Json
  useEffect(() => {
    document.title = "Monster Cards"
    state.onRequestMonsters()
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .catch((e) => console.log("Check out this http path", e))
    //   .then((users) => setUsers(users))
  }, [])

  // Compare the username with the name provided within the search field
  const { monsters, isPending, searchField, onSearchChange } = state

  const searchMonster = monsters.filter((userData) => {
    return userData.username.toLowerCase().includes(searchField.toLowerCase())
  })

  return isPending ? (
    <h1>Loading </h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Monsters</h1>
      <SearchField runQUery={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <Cardlist users={searchMonster} />
        </ErrorBoundry>
      </Scroll>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
