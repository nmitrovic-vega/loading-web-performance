import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import FirstPage from './components/FirstPage/FirstPage';
import { theme } from './theme/theme';
import RocketLoader from './components/RocketLoader/RocketLoader';
import './App.css';

import RocketComponent from './components/Rocket/Rocket';
// const RocketComponent = React.lazy(() => import('./components/Rocket/Rocket'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route
            path="/rocket"
            element={
              <Suspense fallback={<RocketLoader />}>
                <RocketComponent />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
