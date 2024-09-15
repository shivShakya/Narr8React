import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useFirebase } from './FirebaseContext.js';
// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCzta1ILyzbj85sDkYoUlFaMXvKkiFuKbY",
  authDomain: "narr8ar.firebaseapp.com",
  projectId: "narr8ar",
  storageBucket: "narr8ar.appspot.com",
  messagingSenderId: "899909675011",
  appId: "1:899909675011:web:3b4bac95ed7abe9b12c636"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const ProjectData = () => {
  const { setProjectData } = useFirebase();
  const [error, setError] = useState(null);

  // Extracting userId and projectName from the URL
  const userId = getUrlParam("userId");
  const projectName = getUrlParam("projectName");

  console.log({userId, projectName});
  // Function to fetch user projects from Firestore
  const getUserProjects = async (userId, projectName) => {
    try {
      console.log('hi');
      const docRef = doc(firestore, `users/${userId}/projects/${projectName}`);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const projectData = docSnap.data();
        console.log({projectData});
        setProjectData(projectData);
      } else {
        setError("No data available for this user and project.");
      }
    } catch (error) {
      setError(`Error fetching data: ${error.message}`);
    }
  };

  useEffect(() => {
    if (userId && projectName) {
      getUserProjects(userId, projectName);
    }
  }, [userId, projectName]);

  return null;
};

export default ProjectData;
