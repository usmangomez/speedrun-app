import React from 'react'
import { useSelector } from 'react-redux';
import { Cards } from './parts/Cards'

export const GamesList = ({ data, loading }) => {

    //Get array data from Redux store
    const { games } = useSelector(state => state);

    return (
        <>
            {!games.data ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-dark " role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </div >
                </div>

                :

                <div className="row">

                    {games.data && games.data.map(game =>
                        <Cards key={game.id} game={game} />
                    )}

                </div>
            }
        </>
    )
}
