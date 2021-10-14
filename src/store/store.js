import { createStore, combineReducers } from 'redux';
import { gamesReducer } from '../reducers/gamesReducer';


const reducers = combineReducers({
    games: gamesReducer,
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);