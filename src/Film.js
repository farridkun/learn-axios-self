import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Film() {
  const apikey = '84169000';
  const { searchFilm } = useParams();
  const url = `http://www.omdbapi.com/?s=${searchFilm}&apikey=${apikey}`;
  const [film, setFilm] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setFilm(response.data);
    });
  }, [url]);

  if (film) {
    content = (
      <div>
        <h1>{film.Search[0].Title}</h1>
        <hr />
        <img src={film.Search[0].Poster} alt={film.Search[0].Title} />
        <hr />
        <p>
          Total Pencarian : <em>{film.totalResults}</em>
        </p>
      </div>
    );
  }

  return <>{content}</>;
}

export default Film;
