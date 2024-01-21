import logo from './assets/imgs/logo.png';
import React, { useState } from 'react';
import { firestore } from './components/firebase/firebaseConfig'; // Adjust the path as necessary
import { initializeApp } from 'firebase/app';
import { getFirestore, arrayUnion, collection, doc, setDoc  } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import './App.css';

function App() {

  const firestore = getFirestore();
  const collectionRef = collection(firestore, "waitlistEmails");
  const docRef = doc(collectionRef, "emails");

  const auth = getAuth();

  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await setDoc (docRef,{
        emails: arrayUnion(email)
      }, { merge: true });
      alert('Email added to waitlist!');
    } catch (error) {
      console.error('Error adding email to Firestore: ', error);
      alert('Failed to add email. Please try again.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Main-frame">
          <div className="Two-col" style={{width: "40%"}}>
            <div className="Text-holder">
              <p className="Text-title">kush.</p>
              <p className="text1" style={{fontWeight: "normal"}}>Weed on speed dial.</p>
              <div className="Text-holder2">
                <p className="text2" style={{fontWeight: "lighter", marginBottom: "1.5rem"}}> We're over it and you
                  should
                  be too.</p>
                <p className="text2"> That's why we created <b>kush.</b></p>
                <p className="text2"><u>Learn More <b>→</b></u></p>
                <p className="text2"><b>Join the waitlist</b></p>
              </div>
            </div>

            <div className="email-signup">
              <form onSubmit={handleSubmit} className="btn-form">
                <input
                    type="email"
                    className="email-input"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <button type="submit" className="signup-button">I'm in!</button>
              </form>
            </div>

          </div>

          <div className="Text-holder" style={{width: "40%"}}>
            <img src={logo} className="App-logo" alt="logo"/>
          </div>
        </div>

        <div className={"bottomnavWrapper"}>
          <center>
            <div className="bottomnav">
            <p className="text2" style={{fontSize: "24px", fontWeight: "normal"}}>What we do <b>↓</b></p>
            </div>
          </center>
        </div>

      </header>
    </div>
  );
}

export default App;
