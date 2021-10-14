import React, { useEffect } from 'react'
import { Cards } from './parts/Cards'

export const GamesList = ({ data, loading }) => {

    useEffect(() => {
        console.log(data)
    }, [data]);

    return (
        <>
            {loading ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-dark " role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </div >
                </div>

                :

                <div className="row">

                    {data && data.map(game =>
                        <Cards key={game.id} game={game} />
                    )}

                </div>
            }
        </>
    )
}
