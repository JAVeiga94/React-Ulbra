import ulbra from './ulbra.svg';
import './App.css';
import MeuComponente from './MeuComponente'; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ulbra} className="App-logo" alt="ulbra" />
        <p>
          Esse é o hino da ulbra!
          <MeuComponente />
        </p>
      </header>
      	
    </div>
  );


}

export default App;
