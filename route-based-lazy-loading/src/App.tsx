import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage/FirstPage';
import './App.css';

// import RocketLoader from './components/RocketLoader/RocketLoader';
const RocketLoader = React.lazy(
  () => import('./components/RocketLoader/RocketLoader')
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route
          path="/rocket"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <RocketLoader />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
