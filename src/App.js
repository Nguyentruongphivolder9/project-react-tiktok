import { useMemo, useRef, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: +price // chuyển từ kiểu chuỗi về kiểu số
    }]);
    setName('');
    setPrice('');


    nameRef.current.focus();
  }

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("Tinh toan lai...");
      return result += prod.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div className="App" style={{ padding: '10px 32px' }}>
      <input
        ref={nameRef}
        value={name}
        placeholder='Enter name...'
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder='Enter price...'
        onChange={e => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit} >Add</button>
      <br />
      Total: {total}
      {products.map((product, index) => (
        <li key={index}>{product.name} - {product.price}</li>
      ))}
    </div>
  );
}

export default App;
