import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import Table from './components/Table';
import SyntheticTable from './components/SyntheticData';
import Models from './components/Models';


function App() {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col flex-grow radial-gradient min-h-screen">
          <NavBar />
          <main className="flex-grow p-4 pb-16 ml-56 ">
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
