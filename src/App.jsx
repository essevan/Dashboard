import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import Table from './components/Table';
import SyntheticTable from './components/SyntheticData';
import Models from './components/Models';


function App() {

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <Router>
      <div className="flex radial-gradient">
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex flex-col flex-grow radial-gradient min-h-screen ${isSidebarOpen ? 'ml-56' : 'ml-16'}`}>
          <NavBar />
          <main className="flex-grow p-4 pb-16 ">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/LoanApplication" element={<Table />} />
              <Route path="/SyntheticData" element={<SyntheticTable />} />
              <Route path="/models" element={<Models />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
