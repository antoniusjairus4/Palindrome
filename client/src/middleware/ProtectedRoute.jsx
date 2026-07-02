import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  // Pull the cryptographic session signature from browser local application storage
  const token = localStorage.getItem('token');

  // If no token exists, block component rendering and reroute straight to the landing portal
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Session exists! Grant safe passage to the secure layout component
  return children;
}