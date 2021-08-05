import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
// Style
import "./containers/index.css"
import "tachyons"
//import from container
import App from "./containers/App"
import { store } from "./containers/middleware"

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
