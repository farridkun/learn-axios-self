import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Film from './Film';
import News from './News';
import Product from './Product';
import ProductAdvance from './ProductAdvance';
import Recipes from './Recipes';
import Followers from './Followers';

function App() {
  return (
    <>
      <Router>
        <h1>Welcoming to Learn Fetch by myself @Farrid_Jr</h1>
        <table border="2">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Product API</td>
              <td>
                <a href="http://localhost:3000/products/1">
                  <code>http://localhost:3000/products/1</code>
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Resep API</td>
              <td>
                <a href="http://localhost:3000/recipes/">
                  <code>http://localhost:3000/recipes/</code>
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Film API</td>
              <td>
                <a href="http://localhost:3000/film/serigala">
                  <code>http://localhost:3000/film/serigala</code>
                </a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Berita API</td>
              <td>
                <a href="http://localhost:3000/news/1">
                  <code>http://localhost:3000/news/1</code>
                </a>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Product Advance API</td>
              <td>
                <a href="http://localhost:3000/producting/">
                  <code>http://localhost:3000/producting/</code>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <Switch>
          <Route path="/products/:id">
            <Product />
          </Route>
          <Route path="/film/:searchFilm">
            <Film />
          </Route>
          <Route path="/news/:searchNews">
            <News />
          </Route>
          <Route path="/recipes/">
            <Recipes />
          </Route>
          <Route path="/producting/">
            <ProductAdvance />
          </Route>
          <Route path="/followers/">
            <Followers />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
