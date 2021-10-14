import { types } from "../types/types";

export const saveGames = (games) => ({
    type: types.save,
    payload: {
        games
    }
});