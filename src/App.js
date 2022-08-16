import './App.css';
import Projects from './components/Projects';
import Links from './components/Links';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Garrett Gordon</h1>
        <h3>Project Portfolio</h3>
      </header>
      <Projects/>
      <Links/>
    </div>
  );
}

export default App;
