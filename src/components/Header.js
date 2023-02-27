import React from 'react';
import troll from '../image/troll-face.png'

export default function Header() {
  return (
    <div>
      <header className="header">
      <img 
                src={troll}
                alt='meme face' 
                className="header--image"
            />
        <h2 className="header--title">Meme Generator </h2>
        <h2 className="header--project">React Course-Project 3 </h2>
      </header>
    </div>
  );
}
