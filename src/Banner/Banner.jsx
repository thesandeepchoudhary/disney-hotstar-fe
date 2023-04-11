import React, { useEffect, useState, useCallback } from 'react';
import axios from '../axios';
import "./Banner.css";
import { FaPlay, FaPlus } from 'react-icons/fa'
import Row from '../Row/Row';

const API_KEY = process.env.REACT_APP_TMDB;
const fetchDisneyOriginals = `/discover/tv?api_key=${API_KEY}&with_networks=3919`

function Banner({ setDesmovies }) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchDisneyOriginals);

            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    // console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div>
            <header className="banner"
                style={{
                    backgroundImage: `linear-gradient(rgb(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
             )
             `
                }}
            >
                <div className="banner__contents">
                    <h1 className="banner__title">
                        {truncate(movie?.title || movie?.name, 20)}
                    </h1>
                    <div className="banner__buttons">
                        <button className="banner__button"><FaPlay /> Watch Now</button>
                        <button className="banner__button"><FaPlus /></button>
                    </div>
                    <h1 className="banner__description">
                        {truncate(movie?.overview, 150)}
                    </h1>
                </div>
                <div className="banner--fadeBottom" />
                <Row
                    id="row_in_banner"
                    title=""
                    numberOfTiles={5}
                    fetchUrl={fetchDisneyOriginals}
                    isLargeRow
                />
            </header>
        </div>
    );
}

export default Banner