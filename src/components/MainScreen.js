import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { useFetchData } from '../customHooks/useFetchData';
import { Navbar } from '../shared/Navbar'
import { GamesList } from './gamesList/GamesList'

export const MainScreen = () => {

    const [data, loading] = useFetchData(`https://www.speedrun.com/api/v1/games`);

    return (
        <>
            <Navbar />

            <div className="container py-3">
                <Router>
                    <Switch>
                        <Route path="/">
                            <GamesList data={data} loading={loading} />
                        </Route>

                        <Route path="/game/:id">
                            <GamesList data={data} loading={loading} />
                        </Route>

                        <Redirect to="/" />
                    </Switch>
                </Router>
            </div>
        </>
    )
}
