import React from 'react';
import play from './icon/play.svg';
import pause from './icon/pause.svg';

const Player = ({videoSource, reference}) => (
	<>
		<div className="player">
			<video controls name="media" ref={reference}>
				<source src={videoSource} type="video/mp4"></source>
				Your browser does not support HTML5 video.
			</video>
		</div>
		<div className="control">
			<img alt="play" className="icon" src={play} onClick={() => reference.current.play()} />
			<img alt="pause" className="icon" src={pause} onClick={() => reference.current.pause()} />
		</div>
	</>
)

export default Player;