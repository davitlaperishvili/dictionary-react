import { CHANGE_WORD } from "./types";

export const changeWordReducer = (state = [], action) => {
    switch (action.type) {
        case CHANGE_WORD:
            return [...action.payload];
        default:
            return state;
    }
};
