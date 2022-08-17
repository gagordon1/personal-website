import './App.css';
import Projects from './components/Projects';
import Links from './components/Links';
import { Heading2, Heading1 } from './components/Text';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading1>Garrett Gordon</Heading1>
        <Heading2>Project Portfolio</Heading2>
      </header>
      <Projects/>
      <Links/>
    </div>
  );
}

export default App;
