import React, {useEffect, useState, useRef} from 'react';
import Poster from './Poster';
import Player from './Player';
import './Reset.css';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [videoSource, setVideoSource] = useState('');
  const player = useRef(null);

  useEffect(() => {
    fetch('https://api.myjson.com/bins/so5pk')
      .then(response => response.json())
      .then(data => setItems(data));
  }, [])

  const posterClickHandler = selectedVideoSource => {
    setVideoSource(selectedVideoSource);
    player.current.load();
    player.current.play();
  }

  return (
    <div className="container">
      
      <Player videoSource={videoSource} reference={player} />

      {!! items.length && <div className="list">
        {items.map((item, i) => <Poster key={i} posterClickHandler={posterClickHandler} videoSource={item.video} thumbnailSource={item.image} name={item.name} />)}
      </div>}

    </div>
  );
}

export default App;
