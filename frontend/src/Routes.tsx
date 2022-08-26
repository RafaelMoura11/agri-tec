import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import LostDetails from './pages/LostDetails';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/details/:id" element={ <LostDetails /> } />
    </Routes>
  );
}
