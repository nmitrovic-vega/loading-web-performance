import React, { useEffect, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { mutate } from 'swr';
import Button from '@material-ui/core/Button/Button';

import FirstPage from './components/FirstPage/FirstPage';
import LaunchesPage from './components/LaunchesPage/LaunchesPage';
import './App.css';

// import RocketLoader from './components/RocketLoader/RocketLoader';

const RocketLoaderPromise = import('./components/RocketLoader/RocketLoader');
const RocketLoader = React.lazy(() => RocketLoaderPromise);

function App() {
  const [launches, setLaunches] = useState<any[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     const launches = await mutate(
  //       'https://api.spacex.land/rest/launches?limit=10',
  //       fetch('https://api.spacex.land/rest/launches?limit=10').then((res) =>
  //         res.json()
  //       )
  //     );
  //     setLaunches(launches);
  //   })();
  // }, []);

  const handlePrefetch = async () => {
    const launches = await mutate(
      'https://api.spacex.land/rest/launches?limit=10',
      fetch('https://api.spacex.land/rest/launches?limit=10').then((res) =>
        res.json()
      )
    );
    setLaunches(launches);
  };

  return (
    <Suspense fallback={<RocketLoader />}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <FirstPage>
                <Link
                  to="rocket"
                  onMouseOver={handlePrefetch}
                  style={{
                    display: 'block',
                    margin: '50px auto',
                    textAlign: 'center',
                  }}
                >
                  <Button variant="contained" style={{ margin: 'auto' }}>
                    Go to Rocket List Page
                  </Button>
                </Link>
              </FirstPage>
            }
          />
          <Route
            path="/rocket"
            element={<LaunchesPage launches={launches as any} />}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
