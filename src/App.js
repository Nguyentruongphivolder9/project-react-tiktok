import Content from './Content';
import { useState } from 'react';

function App() {
  const  [count, setCount] = useState(0);
  const  [count2, setCount2] = useState(0);
  
  const handelCount = () => {
    setCount(prev => prev + 1);
  }

  const handelCount2 = () => {
    setCount2(prev => prev + 1);
  }

  return (
    <div className="App" style={{ padding: '10px 20px' }}>
      <Content count={count}/>
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={handelCount}>Increat</button>
      <button onClick={handelCount2}>Increat2</button>
    </div>
  );
}

export default App;
