import React, { useState } from "react";
import { BrowserRouter, Route, Link, redirect } from "react-router-dom";

import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import logo from './logo.svg';
import './App.css';

function App() {

  const commands = [
    {
      command: ["Go to * page", "Go to *", "Open * page", "Open *"],
      callback: (redirectPage: any) => setRedirectUrl(redirectPage),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");
  const pages = ["home", "blog", "new blog post", "contact"];
  const urls = {
    home: "/",
    blog: "/blog",
    "new blog post": "/blog/new",
    contact: "/contact",
  };



  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  let redirect = "";

  async function clickButton(){
    SpeechRecognition.startListening()
    console.log("Click Button")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>        
        <p id="transcript">Transcript: {transcript}</p>
        <button onClick={() => clickButton()}>Start</button>
      </header>
    </div>
  );
}

export default App;
