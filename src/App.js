import Content from './Content';
import { useCallback, useState } from 'react';

function App() {
  const  [count, setCount] = useState(0);
  
  const handelIncrease = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div className="App" style={{ padding: '10px 20px' }}>
      <Content onIncrease={handelIncrease}/>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
