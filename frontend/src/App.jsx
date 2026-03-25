import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/products');
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    await axios.post('http://localhost:5000/products', { name, price });
    setName('');
    setPrice('');
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    fetchProducts();
  };
return (
  <div className="container">
    <h1>Mini Store</h1>

    <div className="input-group">
      <input
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={addProduct}>Add</button>
    </div>

    <ul className="product-list">
      {products.map((p) => (
        <li key={p.id} className="product-item">
          <span>{p.name} - ${p.price}</span>
          <button
            className="delete-btn"
            onClick={() => deleteProduct(p.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default App;