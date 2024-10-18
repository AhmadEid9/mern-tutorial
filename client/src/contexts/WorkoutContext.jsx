import { createContext, useState } from 'react';

const WorkoutsContext = createContext();

const WorkoutsProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  return (
    <WorkoutsContext.Provider value={{ workouts, setWorkouts }}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export { WorkoutsProvider, WorkoutsContext };