import './App.css';
import GetResult from './components/GetResult';
import SendResult from './components/SendResult';

function App() {
  return (
    <div className="App">
      <h1>Three Phase Fault Detection</h1>
      {/* <h2>Sending Data to Firebase</h2> */}
      <SendResult/>
      <h2 style={{fontSize: "40px"}}>Result</h2>
      <GetResult/>
    </div>
  );
}

export default App;
