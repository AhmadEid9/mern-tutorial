import { createContext, useReducer } from 'react';

const initialState = {
  workouts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { ...state, workouts: action.payload };
    case 'CREATE_WORKOUT' :
      {
        return {
          workouts: [action.payload, ...state.workouts]
        }
      }
    case 'UPDATE_WORKOUT':
      return {
        ...state,
        workouts: state.workouts.map((workout) =>
          workout._id === action.payload._id ? action.payload : workout
        ),
      };
    default:
      return state;
  }
};

const WorkoutsContext = createContext();

const WorkoutsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export { WorkoutsProvider, WorkoutsContext };