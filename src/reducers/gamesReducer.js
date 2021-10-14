import { types } from "../types/types";

export const gamesReducer = (state = {}, action) => {

    switch (action.type) {
        case types.save:
            return {
                data: action.payload.games
            }
        default:
            return state;
    }

}