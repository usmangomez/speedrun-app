import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { saveGames } from '../actions/games';
import { Navbar } from '../shared/Navbar'
import { GameDetails } from './gameDetails/GameDetails';
import { GamesList } from './gamesList/GamesList'

export const MainScreen = () => {

    const dispatch = useDispatch();

    const fetchGames = async (uri) => {
        const res = await fetch(uri, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const { data } = await res.json();
        dispatch(saveGames(data));
    }

    //Fetching data and dispatching to Redux store every time the page loads
    useEffect(() => {
        fetchGames('https://www.speedrun.com/api/v1/games');
    }, []);

    return (
        <>
            <Router>
                <Navbar />

                <div className="container py-3">

                    <Switch>

                        <Route
                            exact
                            path="/"
                            component={GamesList}
                        />

                        <Route
                            exact
                            path="/game/:id"
                            component={GameDetails}
                        />

                        <Redirect to="/" />

                    </Switch>
                </div>
            </Router>
        </>
    )
}
