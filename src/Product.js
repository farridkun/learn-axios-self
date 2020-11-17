import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  const url = `https://5fa178342541640016b6b13b.mockapi.io/api/v1/products/${id}`;
  const [product, setProduct] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, [url]);

  if (product) {
    content = (
      <div>
        <h1>{product.name}</h1>
        <img src={product.images} alt={product.name} />
        <h3>$ {product.price}</h3>
        <p>{product.description}</p>
      </div>
    );
  }

  return <>{content}</>;
}

export default Product;
