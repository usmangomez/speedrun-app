import React from 'react'
import { useHistory } from 'react-router';

export const Cards = ({ game }) => {

    const history = useHistory();

    const handleRedirect = (id) => {
        history.push(`/game/${id}`);
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex align-items-stretch" onClick={() => handleRedirect(game.id)} style={{ cursor: 'pointer' }}>
            <div className="card mb-3">
                <img src={game.assets["cover-medium"].uri} className="bg-dark" alt="..." />
                <div className="card-body">
                    <p className="card-title">{game.names.international}</p>
                </div>
            </div>
        </div>
    )
}
