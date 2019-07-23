import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {console.log('movie',props)}
    {props.list.map(movie => (
      <Link to={`/movies/${movie.id}`} ><span className="saved-movie" key={movie.title}>{movie.title}</span></Link>
    ))}
   <Link to='/' exact><div className="home-button">Home</div></Link>
  </div>
);

export default SavedList;
