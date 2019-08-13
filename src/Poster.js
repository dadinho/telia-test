import React from 'react';

const Poster = ({thumbnailSource, videoSource, name, posterClickHandler}) => {
	
	const clickHandler = () => {
		posterClickHandler(videoSource);
	}

	return (
		<div className="poster" videosource={videoSource} onClick={clickHandler}>
			<img className="thumbnail" src={thumbnailSource} />
			<span className="name">{name}</span>
		</div>
	)
}

export default Poster;