import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
const Movie = (props) => {
  const [movie, setMovie] = useState();
  const { match } = props;
  const { params } = match;
 
  useEffect(() => {
    const id = params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        //  console.log(response)
        })
        .catch(error => {
         // console.error(error);
        });

  },[params.id]);
  
  // Uncomment this only when you have moved on to the stretch goals
   const saveMovie = () => {
     const addToSavedList = props.save;
     addToSavedList(movie)
   }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

 
  return (
    <div>
    <MovieCard movie={movie} />
      <div className="save-button" onClick={saveMovie}>Save</div>
      </div>
  );
}

export default Movie;
