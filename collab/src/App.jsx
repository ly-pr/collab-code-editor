import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Signup from './components/pages/SignupPage/Signup';
import Login from './components/pages/LoginPage/Login';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Editors from './components/pages/Dashboard/Createproject/Editors';
import Joinproject from './components/pages/Dashboard/Joinproject/Joinproject';
import Joinprojecteditor from './components/pages/Dashboard/Joinproject/Joinprojecteditor/Joinprojecteditor'
function App() {
  const [currentForm, setCurrentForm] = useState('signup');

  const switchForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForms currentForm={currentForm} switchForm={switchForm} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editors" element={<Editors />} />
        <Route path="/joinproject" element={<Joinproject/>} />
        <Route path="/project/:id" element={<Joinprojecteditor />} />
        
        </Routes>
        </Router>
    );
  }
  
  const AuthForms = ({ currentForm, switchForm }) => {
    const navigate = useNavigate();
  
    const handleSubmit = () => {
      // Perform any validation and authentication logic here
      navigate('/dashboard');
    };
  
    return (
      <div>
        {currentForm === 'signup' ? (
          <Signup switchForm={switchForm} onSubmit={handleSubmit} />
        ) : (
          <Login switchForm={switchForm} onSubmit={handleSubmit} />
        )}
      </div>
    );
  };
  
  export default App;
  