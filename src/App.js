import { useState } from 'react';

// const orders = [100, 200, 300];

const gifts = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB Keyboard'
]

function App() {

  // const [counter, setCounter] = useState(() => {
  //   const total = orders.reduce((total, cur) => total + cur)

  //   console.log(total);
  //   return total;
  // })

  // const [info, setInfo] = useState({
  //   name: 'Nguyen Song Nguyen',
  //   age: 2,
  //   address: 'HCM, VN'
  // })

  // const handleIncrease = () => {
  // setCounter(prevState => prevState + 1)
  // setCounter(prevState => prevState + 1)
  // setCounter(prevState => prevState + 1)
  // }

  // const handleUpdate = () => {
    // setInfo({
    //   ...info,
    //   bio: 'Yeu mau hong, ghet su gia doi'
    // })

    //dung trong su ly logic
    // setInfo(prev => {

      // logic...

  //     return {
  //       ...info,
  //       bio: 'Yeu mau hong, ghet su gia doi'
  //     }
  //   })
  // }

  // const [gift, setGift] = useState()
  
  // const ramdomGift = () => {
  //   const index = Math.floor(Math.random() * gifts.length)

  //   setGift(gifts[index]);
  // }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    console.log({
      name,
      email
    });
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      {/* <button onClick={handleIncrease}>Increase</button> */}
      {/* <h1>{gift || 'Chưa có phần thưởng'}</h1> */}
      {/* <button onClick={ramdomGift}>Lấy Thưởng</button> */}
      <input 
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input 
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
