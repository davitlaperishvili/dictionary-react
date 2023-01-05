import { CHANGE_WORD } from "./types";

export function changeWordAction(wordInfo) {
    return {
        type: CHANGE_WORD,
        payload: [wordInfo],
    };
}
