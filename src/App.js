import logo from './assets/images/omega.png';
import astronaut from './assets/images/astronaut.jpg';
import RocketLoader from './components/RocketLoader/RocketLoader';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="section section--first">
        <img src={logo} className="omega__logo" alt="logo" />
      </div>
      <div className="section section--second">
        <img src={astronaut} className="omega__logo" alt="logo" />
      </div>
      <RocketLoader />
    </div>
  );
}

export default App;
