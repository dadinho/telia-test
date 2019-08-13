import React from 'react';

const Player = ({videoSource, reference}) => (
	<div className="player">
		<video controls name="media" ref={reference}>
 			<source src={videoSource} type="video/mp4"></source>
  			Your browser does not support HTML5 video.
		</video>
	</div>
)

export default Player;