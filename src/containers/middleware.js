import { createStore, applyMiddleware, combineReducers } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import { searchMonsters, requestMonsters } from "../reducers"

// Logger will help you to Debuggin the app
const logger = createLogger()
// combine reducers
const rootReducer = combineReducers({ searchMonsters, requestMonsters })

//  Create a store using redux
export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
)
