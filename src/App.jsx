import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Table from './components/Table';
import Models from './components/Models';

const App = () => {
  const isAuthenticated = true;
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Dashboard /></ProtectedRoute>} />
          <Route path="/LoanApplication" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Table /></ProtectedRoute>} />
          <Route path="/models" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Models /></ProtectedRoute>} />
          
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
};

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return isAuthenticated ? (
    <>
      <div className="flex radial-gradient">
         <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
         <div className={`flex flex-col flex-grow radial-gradient min-h-screen ${isSidebarOpen ? 'ml-56 w-[80%]' : 'ml-16 w-[100%]'}`}>
           <NavBar />
           <main className="flex-grow p-4 pb-16 ">
           {children}
           </main>
         </div>
       </div>
    </>
  ) : (
    <Navigate to="/signin" />
  );
};

export default App;
