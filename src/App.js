import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
      <h1>CS 330L</h1>
      <h2>Section - 010</h2>
      <p>WVU ID: 800418467</p>
      <p>Hi, I am Joe!</p>
      <h3> Take a look at some of my coding projects:</h3>
      <div classname="Card">
        <Card />
      </div>
    </div>
  );
}

export default App;
