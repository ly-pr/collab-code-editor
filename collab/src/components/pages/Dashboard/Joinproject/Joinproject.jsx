import React, { useState } from 'react';
import './Joinproject.css';
import { useNavigate } from 'react-router-dom';

function Joinproject() {
  const [projectLink, setProjectLink] = useState('');
  const navigate = useNavigate();

  function handleJoin() {
    if (projectLink.trim()) {
      navigate(`/project/${projectLink}`);
    }
  }

  return (
    <div className="join-container">
      <h2>Join Project</h2>
      <input
        type="text"
        value={projectLink}
        onChange={(e) => setProjectLink(e.target.value)}
        placeholder="Enter project link"
        className="project-input"
      />
      <button onClick={handleJoin}>Join</button>
    </div>
  );
}

export default Joinproject;
