import React from 'react';

const Poster = ({data, posterClickHandler, posterHoverHandler}) => {
	
	const clickHandler = () => posterClickHandler(data.video);
	const mouseEnterHandler = () => posterHoverHandler('enter', data.description);
	const mouseLeaveHandler = () => posterHoverHandler('leave', data.description);

	return (
		<div className="poster" onClick={clickHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
			<img className="thumbnail" alt={data.name} src={data.image} />
			<span className="name">{data.name}</span>
		</div>
	)
}

export default Poster;