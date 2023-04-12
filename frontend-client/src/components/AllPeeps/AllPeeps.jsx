import React from 'react';
import { useState, useEffect } from 'react';
import SinglePeep from '../SinglePeep/SinglePeep';
import './AllPeeps.css';
import env from "react-dotenv";

function AllPeeps() {
  const [samplePeeps, setPeeps] = useState([]); //correct these

  useEffect(() => {
    fetch(`${env.REACT_APP_SERVER_BASE_URL}/posts`)    
      .then(response => response.json())
      .then(data => setPeeps(data))
      .catch(error => console.error(error));
  }, []);
  
  const sortedPeeps = samplePeeps.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div className="md-3">
      {sortedPeeps.map((peep) => (
        <SinglePeep
          key={peep._id}    //underscore needed?
          username={peep.username}
          content={peep.content}
          createdAt={peep.createdAt}
        />
      ))}
    </div>
  )
};

export default AllPeeps;