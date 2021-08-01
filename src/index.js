import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
// Style
import "./containers/index.css"
import "tachyons"

import App from "./containers/App"
import reportWebVitals from "./reportWebVitals"
import { searchMonsters } from "./reducers"

const store = createStore(searchMonsters)

ReactDOM.render(
  // Provider will be responsible to provide all the Redux proprieties to its chields
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
