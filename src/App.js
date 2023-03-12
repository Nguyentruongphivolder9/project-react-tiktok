import { useState } from 'react';

const orders = [100, 200, 300];

function App() {

  // const [counter, setCounter] = useState(() => {
  //   const total = orders.reduce((total, cur) => total + cur)

  //   console.log(total);
  //   return total;
  // })

  const [info, setInfo] = useState({
    name: 'Nguyen Song Nguyen',
    age: 2,
    address: 'HCM, VN'
  })

  // const handleIncrease = () => {
  // setCounter(prevState => prevState + 1)
  // setCounter(prevState => prevState + 1)
  // setCounter(prevState => prevState + 1)
  // }

  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: 'Yeu mau hong, ghet su gia doi'
    })
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{JSON.stringify(info)}</h1>
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <button onClick={handleUpdate}>update</button>
    </div>
  );
}

export default App;
