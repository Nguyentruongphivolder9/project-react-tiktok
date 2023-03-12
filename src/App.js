import { useState } from 'react';

// const orders = [100, 200, 300];

// const gifts = [
//   'CPU i9',
//   'RAM 32GB RGB',
//   'RGB Keyboard'
// ]

const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'JavaScript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
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

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')

  // const handleSubmit = () => {
  // Call API
  //   console.log({
  //     name,
  //     email
  //   });
  // }
  const [checked, setCheck] = useState([])

  console.log(checked)
  const handleCheck = (id) => {
    setCheck(prev => {
      const isChekced = checked.includes(id)

      if(isChekced){
        //Uncheck
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const handleSubmit = () => {
    //Call API
    console.log({ id: checked });
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      {/* <button onClick={handleIncrease}>Increase</button> */}

      {/* <h1>{gift || 'Chưa có phần thưởng'}</h1> */}
      {/* <button onClick={ramdomGift}>Lấy Thưởng</button> */}

      {/* <input 
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input 
        value={email}
        onChange={e => setEmail(e.target.value)}
      /> */}
      {/* <button onClick={handleSubmit}>Submit</button> */}

      {/* {courses.map(course => (
        <div key={course.id}>
          <input 
            type="radio" 
            checked={checked === course.id}
            onChange={() => setCheck(course.id)}
          /> 
          {course.name}
        </div>
      ))} */}

      {courses.map(course => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
