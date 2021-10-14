import React from 'react'

export const Cards = ({ game }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex align-items-stretch">
            <div className="card mb-3">
                <img src={game.assets["cover-medium"].uri} className="bg-dark" alt="..." />
                <div className="card-body">
                    <p className="card-title">{game.names.international}</p>
                </div>
            </div>
        </div>
    )
}
