import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie" key={movie.id}><Link to={`/movies/${movie.id}`} >{movie.title}</Link></span>
    ))}
   <Link to='/' exact><div className="home-button">Home</div></Link>
  </div>
);

export default SavedList;
