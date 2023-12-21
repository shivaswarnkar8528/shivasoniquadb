import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesCard from "./MovieCard";
const MoviesList = () => {
    const [MoviesData, setMoviesData] = useState([]);
    const getMoviesData = async () => {
        try {
            let res = await axios.get('https://api.tvmaze.com/search/shows?q=all');
            setMoviesData(res.data);
            sessionStorage.setItem('movieData', JSON.stringify(res.data));
        }
        catch (err) {
            alert(err);
        }

    }
    useEffect(() => {
        getMoviesData();
    }, [])
    // getMoviesData();
    // console.log(MoviesCard);
    return (
        <div>
            <h1>Movies List</h1>
            <div className="movielist">
                {MoviesData.length && MoviesData.map((movie, index) => {
                    return <MoviesCard data={movie} key={index} />;
                })}
            </div>
        </div>
    )

}
export default MoviesList;