import React, {useEffect, useState, useRef} from 'react';
import Poster from './Poster';
import Player from './Player';
import Info from './Info';
import './Reset.css';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [videoSource, setVideoSource] = useState('');
  const [description, setDescription] = useState('Lorem ipsum');
  const player = useRef(null);
  const infobox = useRef(null);

  useEffect(() => {
    fetch('https://api.myjson.com/bins/so5pk')
      .then(response => response.json())
      .then(data => setItems(data));
  }, [])

  const posterClickHandler = (selectedVideoSource) => {
    setVideoSource(selectedVideoSource);
    player.current.load();
    player.current.play();
  }
  
  const posterHoverHandler = (direction, description) => {
    setDescription(description);
    if (direction === 'enter') infobox.current.style.display = 'block';
    if (direction === 'leave') infobox.current.style.display = 'none';
  }

  return (
    <div className="container">
      <Info description={description} reference={infobox} />
      <Player videoSource={videoSource} reference={player} />
      {!! items.length && <div className="list">
        {items.map((item, i) => <Poster key={i} data={item} posterHoverHandler={posterHoverHandler} posterClickHandler={posterClickHandler} />)}
      </div>}
    </div>
  );
}

export default App;
