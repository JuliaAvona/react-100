import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Tech />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">News</a>
      <a href="#">About</a>
    </div>
  );
};

const Tech = () => {
  return (
    <div>
      <h1>Hello React!</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>TS</li>
      </ul>
    </div>
  );
};

export default App;
