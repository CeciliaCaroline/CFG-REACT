import logo from './logo.svg';
import Greet from './greet';
import Button from './button';
import './App.css';

// functional component
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Button title="Click Me" />

      </header>
    </div>
  );
}

export default App;
