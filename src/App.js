import React from 'react';
import './Reset.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="player">
        <video controls name="media">
          <source src="http://mirrors.standaloneinstaller.com/video-sample/dolbycanyon.mp4" type="video/mp4"></source>
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="list">
        <div className="item">
          <img className="thumbnail" src="https://iptvimagecache-playplus-prod-vip.han.telia.se/crop/200x290/http%3A%2F%2Fiptvlogin.telia.se%2F%2FSF%20Anytime%2F4749441.jpg" />
          <span className="title">Aquaman</span>
        </div>
        <div className="item">
          <img className="thumbnail" src="https://iptvimagecache-playplus-prod-vip.han.telia.se/crop/200x290/http%3A%2F%2Fiptvlogin.telia.se%2F%2FSF%20Anytime%2F4749441.jpg" />
          <span className="title">Aquaman</span>
        </div>
        <div className="item">
          <img className="thumbnail" src="https://iptvimagecache-playplus-prod-vip.han.telia.se/crop/200x290/http%3A%2F%2Fiptvlogin.telia.se%2F%2FSF%20Anytime%2F4749441.jpg" />
          <span className="title">Aquaman</span>
        </div>
        <div className="item">
          <img className="thumbnail" src="https://iptvimagecache-playplus-prod-vip.han.telia.se/crop/200x290/http%3A%2F%2Fiptvlogin.telia.se%2F%2FSF%20Anytime%2F4749441.jpg" />
          <span className="title">Aquaman</span>
        </div>
      </div>
    </div>
  );
}

export default App;
