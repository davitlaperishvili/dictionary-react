import { combineReducers } from "redux";
import { changeWordReducer } from "./changeWordReducer";
export const rootReducer = combineReducers({
    word: changeWordReducer,
});
