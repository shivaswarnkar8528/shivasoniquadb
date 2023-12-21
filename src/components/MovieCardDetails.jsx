import { useEffect, useState } from "react";
import MoviesCard from "./MovieCard";

const MovieCardDetails=()=>{
  const [movieDetails,setDetails]=useState([]);
   useEffect(()=>{
    const movieData=sessionStorage.getItem('movieData');
    if(movieData){
      const parsedData = JSON.parse(movieData);
      setDetails(parsedData);
    }
   },[])
    return(
      <div className="movielist">
      {movieDetails.length>0 && movieDetails.map((movie, index) => {
          return <MoviesCard data={movie} isSummary={true} bookActive={true} key={index} />;
      })}
  </div>
    )

}
export default MovieCardDetails;