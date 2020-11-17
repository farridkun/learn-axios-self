import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function News() {
  const apiKey = '19e1db4212cc4cc18ac9053a378cf9be';
  const { searchNews } = useParams();
  const url = `http://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`;
  const [news, setNews] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((res) => {
      setNews(res.data);
    });
  }, [url]);

  if (news) {
    content = (
      <div>
        <h1>Headline berita terkini</h1>
        <p>
          total data : <strong>{news.totalResults}</strong>
        </p>
        <hr />
        <h2>{news.articles[`${searchNews}`].title}</h2>
        <img
          src={news.articles[`${searchNews}`].urlToImage}
          alt={news.articles[`${searchNews}`].title}
        />
        <p>{news.articles[`${searchNews}`].description}</p>
        <hr />
        <p>
          Sumber : <em>{news.articles[`${searchNews}`].source.name}</em>
        </p>
      </div>
    );
  }

  return <>{content}</>;
}

export default News;
