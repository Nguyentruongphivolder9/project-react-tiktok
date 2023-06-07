import './App.css';
import { useState } from 'react';

// const gifts = [
//   'CPU i9',
//   'RAM 32GB RGB',
//   'RGB Keyboard'
// ]

const courses = [
  {
    id: 1,
    name: 'JavaScript'
  },
  {
    id: 2,
    name: 'PHP'
  },
  {
    id: 3,
    name: 'Java'
  }
]

function App() {
  const [checked, setChecked] = useState();

  const handleSubmit = () => {
    console.log({ id: checked });
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      {courses.map(course => (
        <div ket={course.id}>
          <input
            type='radio'
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
