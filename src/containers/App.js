import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import SearchField from "../components/SearchField"
import Cardlist from "../components/Cardlist"
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry"
import { setSearchField } from "../actions.jsx"

// mapStateToProps, mapDispatchToProps
const mapStateToProps = (state) => {
  return { searchField: state.searchField }
}
//Trigger the action - send actions
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  }
}

function App(state) {
  // Define the value status
  const [users, setUsers] = useState([])
  // const [searchField, setSearchField] = useState("")

  // Grab the users from an online Json
  useEffect(() => {
    document.title = "Monster Cards"
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .catch((e) => console.log("Check out this http path", e))
      .then((users) => setUsers(users))
  }, [])

  // Compare the username with the name provided within the search field
  const searchMonster = users.filter((userData) => {
    return userData.username
      .toLowerCase()
      .includes(state.searchField.toLowerCase())
  })

  return (
    <div className="tc">
      <h1 className="f1">Monsters</h1>
      <SearchField runQUery={state.onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <Cardlist users={searchMonster} />
        </ErrorBoundry>
      </Scroll>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
