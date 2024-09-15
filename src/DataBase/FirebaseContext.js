// ProjectContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the FirebaseContext
const FirebaseContext = createContext();

// Create a provider component
export const FirebaseProvider = ({ children }) => {
  const [projectData, setProjectData] = useState(null);

  return (
    <FirebaseContext.Provider value={{ projectData, setProjectData }}>
      {children}
    </FirebaseContext.Provider>
  );
};

// Custom hook to use the FirebaseContext
export const useFirebase = () => useContext(FirebaseContext);
