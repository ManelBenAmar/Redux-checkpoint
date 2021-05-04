import "bootstrap/dist/css/bootstrap.min.css";
import { combineReducers } from "redux";
import todosReducer from "../Reducers/todosReducer";
export default combineReducers({ todosReducer });
