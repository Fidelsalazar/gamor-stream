import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './components/pages/Home';

const AppMetaTags: React.FC = () => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, user-scalable=yes, viewport-fit=cover" />
      <meta name="theme-color" content="#667eea" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Gamor" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    </>
  );
};

function App() {
  return (
    <>
      <AppMetaTags />
      <AuthProvider>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={
              <MainLayout>
                <Home/>
              </MainLayout>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;