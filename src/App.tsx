import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import EcologyProjects from './pages/EcologyProjects';
import BankCards from './pages/BankCards';
import Trading from './pages/Trading';
import EnergyStaking from './pages/EnergyStaking';
import CompanyShares from './pages/CompanyShares';
import OilForecast from './pages/OilForecast';
import Profile from './pages/Profile';
import Info from './pages/Info';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-black text-gold-400">
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ecology" element={<EcologyProjects />} />
              <Route path="/bank" element={<BankCards />} />
              <Route path="/trading" element={<Trading />} />
              <Route path="/energy" element={<EnergyStaking />} />
              <Route path="/shares" element={<CompanyShares />} />
              <Route path="/forecast" element={<OilForecast />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/info" element={<Info />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;