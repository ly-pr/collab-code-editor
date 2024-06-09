import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const navigatetoeditor = () => {
  navigate('/editors');
}
const navigatetojoinproject = () => {
  navigate('/joinproject');
}
  return (
    <div className="dashboard">
    <header className="dashboard-header">
      <h1>Collaborative Code Editor</h1>
    </header>
    <div className="dashboard-options">
      <button className="dashboard-button" onClick={navigatetoeditor}>Create Project</button>
      <button className="dashboard-button" onClick={navigatetojoinproject} >Join Project</button>
    </div>
  </div>
);
};
export default Dashboard;