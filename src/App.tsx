import './css/App.css';

const text = 'wrgdhfjgk'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {text}
        </p>
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
