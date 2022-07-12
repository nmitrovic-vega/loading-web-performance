import React, { Suspense, useRef } from 'react';
import { useVisible } from './hooks/useVisible';
import logo from './assets/images/omega.png';
import astronaut from './assets/images/astronaut.jpg';
import './App.css';

// import RocketLoader from './components/RocketLoader/RocketLoader';
// lazy loaded component
const RocketLoader = React.lazy(
  () => import('./components/RocketLoader/RocketLoader')
);

function App() {
  const sectionTwoRef = useRef<HTMLDivElement>(null);
  const isVisible = useVisible(sectionTwoRef);
  console.log('SECTION 2 is visible', isVisible);

  return (
    <>
      <div className="section section--first">
        <img src={logo} className="omega__logo" alt="logo" />
      </div>
      <div ref={sectionTwoRef} className="section section--second">
        <img src={astronaut} className="omega__logo" alt="logo" />
      </div>
      {/* when second section is visible on the screen, we will start lazy loading of rocket loader component */}
      {isVisible && (
        <Suspense fallback={<div>Loading...</div>}>
          <RocketLoader />
        </Suspense>
      )}
    </>
  );
}

export default App;
