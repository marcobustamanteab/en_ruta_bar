import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {ClientPage} from './pages/ClientPage';
import {ClientFormPage} from './pages/ClientFormPage';
import { Navigation } from './components/Navigation';

function App(){
  return (
    <BrowserRouter>
    <Navigation />
    
      <Routes>
        <Route path="/" element={<Navigate to="/clients" />} />
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/client-create" element={<ClientFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;