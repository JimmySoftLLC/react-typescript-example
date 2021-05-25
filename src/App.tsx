import './App.css';

let myString: string = "Is typescript being used? ";
let isTypeScriptBeingUsed: boolean = true;
let sentence: string = myString + isTypeScriptBeingUsed;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {sentence}
        </p>
      </header>
    </div>
  );
}

export default App;
