import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const GameDetails = () => {

    //GENERAL VARIABLES
    const { id } = useParams('id');

    //Get array data from Redux store
    const game = useSelector(state => {
        if (state.games.data) {
            return state.games.data.filter(game => game.id === id);
        }
    });

    //UseState variables
    const [uriPlayer, setUriPlayer] = useState();
    const [playerInfo, setPlayerInfo] = useState();

    //Fetch function to get ONLY top 1 record
    const fetchRecord = async (id) => {
        const res = await fetch(`https://www.speedrun.com/api/v1/games/${id}/records?top=1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const { data: [record] } = await res.json();

        if (record.runs.length === 0) {
            setUriPlayer(record.runs);
        } else {
            setUriPlayer(record.runs[0].run);
        }
    }

    //Fetch function to get all player info
    const fetchPlayerInfo = async (uri) => {
        const res = await fetch(uri, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const { data } = await res.json();
        setPlayerInfo(data);
    }

    useEffect(() => {
        fetchRecord(id);
    }, [id]);

    useEffect(() => {
        if (uriPlayer && uriPlayer.status) {
            fetchPlayerInfo(uriPlayer.players[0].uri);
        } else {
            setPlayerInfo({});
        }
    }, [uriPlayer]);

    return (
        <div>
            {(game && playerInfo && uriPlayer) ?
                <div class="row">
                    <div class="col-4">
                        <h4>{game[0].names.international}</h4>
                        <img src={game[0].assets['cover-medium'].uri} className="img-fluid" alt="..." />
                    </div>
                    <div class="col-8">
                        <h2 className="border-bottom">Record</h2>
                        {uriPlayer.status ?
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={playerInfo?.assets?.image.uri} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{playerInfo?.names?.international}</h5>
                                            <p>Completed in: {Math.round(uriPlayer?.times?.primary_t / 60)} min</p>
                                            <Link className="btn btn-primary" to={{ pathname: uriPlayer?.videos?.links[0].uri }} target="_blank">Youtube video</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <h3>There is no records here!</h3>
                        }
                    </div>
                </div>
                :
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-dark " role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </div >
                </div>
            }
        </div>
    )
}
