import logo from './logo.svg';
import Greet from './greet';
import Button from './button';
import ClassButton from './classButton';
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
      <Button buttonText="Click Me" />

      {/* custom styles by classNames */}
      <Button redButton="error" buttonText="Delete" />

      {/* custom styles by props */}
      <Button buttonText="Hello" backgroundColor="green" color="white"  />

      {/* Class based component */}
      <ClassButton buttonText="Class Button" />
    </div>
  );
}

export default App;
