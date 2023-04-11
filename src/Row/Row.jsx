import React, { useState, useEffect, useCallback } from 'react';
import axios from '../axios';
import './Row.css';
import { IoIosArrowDroprightCircle } from 'react-icons/io';


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ id, title, fetchUrl, isLargeRow, setDesmovies, numberOfTiles }) {

    const [movies, setMovies] = useState([]);
    // const [trailerUrl, setTrailerUrl] = useState("");
    // A snippet of code which rune based on a specific conditions
    useEffect(() => {
        // if [], run once when the row loads, and dont run that again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            
            // sorted in decreasing order
            var movieList = request.data.results
            movieList = movieList.sort((a,b) => Date.parse(b.first_air_date)-Date.parse(a.first_air_date))

            setMovies(movieList);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    // console.log(movies);

    if (numberOfTiles == null || numberOfTiles == 0) {
        numberOfTiles = Math.min(15, movies.length)
    }

    const handleClick = useCallback(movie => {
        // console.log(movie);
        setDesmovies(movie);
    }, [setDesmovies]);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }


    return (
        <div className="row" id={id}>
            {
                title && title != "" &&
                <h2 style={{ textAlign: "left", margin: "10px" }}>{title}</h2>
            }
            <div className="row__posters">
                {/* row__poster */}
                {movies.slice(0, numberOfTiles + 1).filter(movie => movie.backdrop_path !== null).map(movie => (
                    <div className={`row__poster ${isLargeRow && "row__posterLarge"}`}>
                        <img
                            key={movie.id}
                            id={movie.id}
                            onClick={() => handleClick(movie)}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${base_url}${movie.backdrop_path}`} alt={movie.name} />
                        <h2 className='row_title'>{truncate(movie?.name || movie?.title, 20)}</h2>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Row;



