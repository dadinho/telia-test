import React from 'react';

const Poster = ({thumbnailSource, videoSource, name, description, posterClickHandler, posterHoverHandler}) => {
	
	const clickHandler = () => {
		posterClickHandler(videoSource);
	}

	return (
		<div className="poster" videosource={videoSource} onClick={clickHandler} onMouseEnter={() => posterHoverHandler('enter', description)} onMouseLeave={() => posterHoverHandler('leave', description)}>
			<img className="thumbnail" alt={name} src={thumbnailSource} />
			<span className="name">{name}</span>
		</div>
	)
}

export default Poster;