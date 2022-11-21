import RocketComponent from './components/Rocket/Rocket';
import space from './assets/images/space.jpg'
import astronaut from './assets/images/astronaut.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="section">
        <img src={space} className="img" alt="space" />
        <img src={astronaut} className="astronaut" alt="logo" />
      </div>
      <div className="section">
        <RocketComponent />
      </div>
    </div>
  );
}

export default App;
