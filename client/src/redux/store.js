import {createStore, applyMiddleware, compose} from "redux"
// import {thunkMiddleware} from "redux-thunk"
// import thunkMiddleware from "redux-thunk/dist/redux-thunk.esm.js"
import { thunk } from 'redux-thunk'
import reducer from "../redux/reducer"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
)

export default store