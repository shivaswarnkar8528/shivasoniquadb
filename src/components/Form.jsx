import { useEffect, useState } from "react";
import MoviesCard from "./MovieCard";

const Form = () => {
    const [movieDetails, setDetails] = useState([]);
    const [movieDetail, setMovieDetail] = useState([]);
    const [formData,setFormData]=useState({})
    useEffect(() => {
        const movieData = sessionStorage.getItem('movieData');
        if (movieData) {
            const parsedData = JSON.parse(movieData);
            setDetails(parsedData);
        }
    }, [])
    const Movie_name = movieDetails?.map((item) => item?.show?.name);
    const handlechange = (e) => {
        const { value } = e.target;
        let data = movieDetails.filter((movie) => movie.show.id == value);
        setMovieDetail(data[0]);
    }
    const handleclick=(e)=>{
        e.preventDefault();
        alert(`Movie: ${movieDetail.show.name} has been Booked Successfully`);

    }
    console.log(movieDetail);
    return (
        <>
            <div>
                <h2 style={{ margin: "10px" }}><u>BOOK MOVIE SHOW</u></h2>
                <form action="" className="bookshow" onSubmit={handleclick}>
                    <div><label htmlFor="">Name : </label><input required type="text" /></div>
                    <div><label htmlFor="">Age : </label><input  required type="number" /></div>
                    <div><label htmlFor="">City : </label><input required type="text" /></div>
                    <div>
                        <label htmlFor="">Choose Movie Name: </label>
                        <select name="moviename" onChange={(e) => handlechange(e)}>
                            {
                                movieDetails.length > 0 && movieDetails.map((movie, index) => {
                                    return <option value={movie.show.id} key={index}>{movie.show.name.toUpperCase()}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="formcard1">
                        {

                            (typeof movieDetail === 'object' &&
                                !Array.isArray(movieDetail)) ? <MoviesCard data={movieDetail} isform={true} /> : null
                        }
                    </div>
                    {<div><label htmlFor="">Movie Name : </label><input type="text" value={movieDetail?.show?.name} /></div>}
                    {<div><label htmlFor="">Genres : </label><input name="genres" type="text" value={[movieDetail?.show?.genres.join(',')]} /></div>}
                    <button type="submit">Book</button>
                </form>
            </div>
        </>
    );
}
export default Form;