import logo from "./logo.svg";
import "./App.css";
let monday = "sad";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <p>{
            monday} 
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>React is so cool!</p>
          <p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            
          </p>
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
