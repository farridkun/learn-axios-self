import React, { Component } from 'react';
import axios from 'axios';

const api = axios({
  method: 'post',
  url: 'https://bomgram.com/sys/api/json.php/',
  data: 'x',
  headers: { 'Content-Type': 'multipart/form-data' }
});

class Followers extends Component {
  state = {
    prods: []
  };

  constructor() {
    super();
    this.getProds();
  }

  getProds = async () => {
    try {
      let data = await api.get('/').then(({ data }) => data);
      this.setState({ prods: data });
    } catch (err) {
      console.log(err);
    }
  };

  createProd = async () => {
    let res = await api
      .post('/', {
        name: 'Seblak Tanjung Special',
        material: 'Kerupuk',
        price: '17.000'
      })
      .catch((err) => console.log(err.res));
    console.log(res);
  };

  deleteProd = async (id) => {
    let data = await api.delete(`/${id}`);
    this.getProds();
  };

  updateProd = async (id, val) => {
    let data = await api.patch(`/${id}`, { name: val });
    this.getProds();
  };

  render() {
    return (
      <div>
        <button onClick={this.createProd}>Buat Produk</button>
        {this.state.prods.map((prod) => (
          <div key={prod.id}>
            <h2 onClick={() => this.updateProd(prod.id, `${prod.name} 🤙`)}>
              {prod.name}
              <button onClick={() => this.deleteProd(prod.id)}>X</button>
            </h2>
            <h3>
              <em>Rp. {prod.price}</em>
            </h3>
          </div>
        ))}
      </div>
    );
  }
}

export default Followers;
