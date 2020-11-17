import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function Recipes() {
  const url = 'https://masak-apa.tomorisakura.vercel.app/api/recipes';
  const [recipe, setRecipe] = useState(null);

  let content = null;

  useEffect(() => {
    Axios.get(url).then((res) => {
      setRecipe(res.data);
    });
  }, [url]);

  if (recipe) {
    content = (
      <div>
        <h1>Resep masakan terbaru</h1>
        <hr />
        <h3>{recipe.results[3].title}</h3>
        <img src={recipe.results[3].thumb} alt={recipe.results[3].title} />
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Recipes;
