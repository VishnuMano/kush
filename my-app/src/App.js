import logo from './assets/imgs/logo.png';
import React, { useState, useEffect } from 'react';
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
// Set the end date
const countDownDate = new Date('2024-04-20T00:00:00').getTime();

// State to hold the time left
const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
});

useEffect(() => {
    // Update the count down every 1 second
    const interval = setInterval(() => {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in the timeLeft state
        setTimeLeft({ days, hours, minutes, seconds });

        // If the count down is finished, stop the interval
        if (distance < 0) {
            clearInterval(interval);
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
}, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="Main-frame">
          <div className="Two-col" style={{width: "40%"}}>
            <div className="Text-holder">
              <p className="Text-title">kush.</p>
              <p className="text1" style={{fontWeight: "normal"}}>Seamless cannibus delivery.</p>
              <div className="Text-holder2">
                <p className="text2" style={{fontWeight: "lighter", marginBottom: "1.5rem"}}> Good weed. Good delivery. Great times.</p>
                <p style={{fontWeight: "lighter", marginBottom: "0rem"}}>launching in <strong>{`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</strong></p>
                <p style={{fontWeight: "lighter", marginBottom: "0rem"}}><a href="#" id="learn-more">Learn More<b>→</b></a></p>
                <p style={{fontWeight: "lighter", marginBottom: "0rem"}} className="text2">Join our waitlist</p>
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
