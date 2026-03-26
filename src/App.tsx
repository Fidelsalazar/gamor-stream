import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import { AppRoutes } from './components/routes';

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
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;