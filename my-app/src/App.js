import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Main-frame">

          <div className="Text-holder" style={{width: "50%"}}>
            <p className="Text-title">kush.</p>
            <p className="text1" style={{fontWeight: "normal"}}>Weed on speed dial.</p>
            <div className="Text-holder2">
              <p className="text2" style={{fontWeight: "lighter", marginBottom: "1.5rem"}}> We're over it and you should
                be too.</p>
              <p className="text2"> That's why we created <b>kush.</b></p>
              <p className="text2"><u>Learn More <b>→</b></u></p>
              <p className="text2"><b>Join the waitlist</b></p>

            </div>
          </div>
          <div className="Text-holder" style={{width: "30%"}}>
            <p>hello</p>
          </div>

          <div className={"bottomnavWrapper"}>
            <center>
              <div className="bottomnav">
                <p className="text2" style={{fontSize: "24px"}}>What's kush? <b>↓</b></p>
              </div>
            </center>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
