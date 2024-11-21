import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Welcome from './components/Welcome'
import FirstPage from './components/FirstPage'
import Login from './components/Login'
import Signup from './components/Signup'
import Emergency from './components/Emergency'
import Employee from './components/Employee'
import Nurse from './components/Nurse'
import Doctor from './components/Doctor'
import Verification from './components/Verification'
import Confirm from './components/Confirm';
import User from './components/User';
import Hosp1 from './components/Hosp1';
import Hosp2 from './components/Hosp2';
import Hosp3 from './components/Hosp3';
import Hosp4 from './components/Hosp4';
import Stretcher from './components/Stretcher';

function App() {
  return (
    <>
    <Router> {/* This wraps the app with Router functionality */}
      <Routes> {/* Define the routes */}
        <Route path="/welcome" element={<Welcome />} />         {/* Default Route */}
        <Route path="/firstpage" element={<FirstPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/nurse" element={<Nurse />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/user" element={<User />} />
        <Route path="/hosp1" element={<Hosp1 />} />
        <Route path="/hosp2" element={<Hosp2 />} />
        <Route path="/hosp3" element={<Hosp3 />} />
        <Route path="/hosp4" element={<Hosp4 />} />
        <Route path="/stretcher" element={<Stretcher/>} />

      </Routes>
    </Router>
    </>
    
  );
}

export default App