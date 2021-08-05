import React, { useEffect } from "react"
import { connect } from "react-redux"
import SearchField from "../components/SearchField"
import Cardlist from "../components/Cardlist"
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry"
import { mapDispatchToProps, mapStateToProps } from "./connect"

function App(state) {
  // Grab the users from an online Json
  useEffect(() => {
    document.title = "Monster Cards"
    // Call the function inside of mapDispatchToProps
    state.onRequestMonsters()
  }, [])

  // Destructuring the props inside the state obj.
  const { monsters, isPending, searchField, onSearchChange } = state

  // Compare the username with the name provided within the search field
  const searchMonster = monsters.filter((userData) => {
    return userData.username.toLowerCase().includes(searchField.toLowerCase())
  })

  return isPending ? (
    <h1 className="tc">Loading...</h1>
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
