import * as React from 'react';
import './style.css';
import Header from './components/Header';
import Meme from './components/Meme';

export default function App() {
  return (
    <div>
      <Header />

      <div style={{display: "flex",
                  justifyContent: "center"}} >
        <Meme />
      </div>
      <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    </div>
  );
}
// this is the meme generator project for self practice.
