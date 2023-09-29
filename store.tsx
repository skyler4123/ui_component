import { combineReducers, createStore } from "redux";
import reducer from "./reducers/reducer";
import activeTabIndex from "./reducers/activeTabIndex";

const rootReducer = combineReducers({reducer, activeTabIndex})
const store = createStore(rootReducer)

export default store;