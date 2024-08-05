import logo from './logo.svg';
import Greet from './greet';
import IncrementButton from './IncrementButton';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Greet />
      <IncrementButton />
      
      
    </div>
  );
}

export default App;
