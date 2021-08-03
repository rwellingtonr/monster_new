import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
// Style
import "./containers/index.css"
import "tachyons"

import App from "./containers/App"
import reportWebVitals from "./reportWebVitals"
import { searchMonsters } from "./reducers"

// Logger will help you to Debuggin the app
const logger = createLogger()
//  Create a store using redux
const store = createStore(
  searchMonsters,
  applyMiddleware(thunkMiddleware, logger)
)

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
