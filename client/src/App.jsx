import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import DashboardLayout from './components/DashboardLayout';
import CoreDashboard from './modules/CoreDashboard';
import AddExpense from './modules/AddExpense';
import AddIncome from './modules/AddIncome';
import Analytics from './modules/Analytics';
import WealthTargets from './modules/WealthTargets';
import Subscriptions from './modules/Subscriptions'; // ◄— Aligned path name
import Achievements from './modules/Achievements';
import Profile from './modules/Profile';
import Settings from './modules/Settings';
import Assets from './modules/Assets';

// Configure global Axios interceptor to handle token expiry / invalidation
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/" replace />;
  return children;
};

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page remains locked and untouched */}
        <Route path="/" element={<Landing />} />
        
        {/* Premium Production Authenticated Shell */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<CoreDashboard />} />
          <Route path="transactions" element={<CoreDashboard />} />
          <Route path="add-expense" element={<AddExpense />} />
          <Route path="add-income" element={<AddIncome />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="targets" element={<WealthTargets />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="assets" element={<Assets />} />
          <Route path="*" element={<CoreDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}