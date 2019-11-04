import {combineReducers, createStore} from "redux";
import MyModelsReducer from "./MyModelsReducer";
import UserProfileReducer from "./UserProfileReducer";
let reducers = combineReducers({
   Models: MyModelsReducer,
   User:UserProfileReducer
});
let store = createStore(reducers);
export default  store;