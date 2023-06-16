import { useReducer, useRef } from 'react';

const initState = {
  job: '',
  jobs: []
}

const SET_JOB = 'setJob';
const ADD_JOB = 'addJob';
const DELETE_JOB = 'deleteJob';

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}
const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}

const reducer = (state, action) => {
  console.log('Action: ', action);
  console.log('Prev: ', state);

  let newState;

  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);

      newState = {
        ...state,
        jobs: newJobs
      }
      break;
    default:
      throw new Error('Invalid action');
  }

  console.log('NewState: ', newState);

  return newState
}

function App() {

  const [state, dispatch] = useReducer(reducer, initState);
  const inputRef = useRef();

  const { job, jobs } = state;

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));

    inputRef.current.focus();
  }

  return (
    <div className="App" style={{ padding: '10px 32px' }}>
      <h1>Todo</h1>
      <input
        ref={inputRef}
        value={job}
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
        placeholder='Enter todo...'
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
