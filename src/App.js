import './App.css';
import { useState } from 'react';

// const gifts = [
//   'CPU i9',
//   'RAM 32GB RGB',
//   'RGB Keyboard'
// ]

function App() {
  const storageJobs = JSON.parse(localStorage.getItem('jobs'));

  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(storageJobs);

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job];

      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs);

      return newJobs;
    });
    setJob('');
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default App;
