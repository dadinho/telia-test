import React, {useEffect} from 'react';

const activateFollowing = infoBox => {
	
	window.addEventListener("mousemove", (event) => {
		const infoBoxWidth = infoBox.offsetWidth;
		const infoBoxHeight = infoBox.offsetHeight; 
		const cursorPositionX = event.clientX;
		const cursorPositionY = event.clientY;

		const infoBoxPositionX = cursorPositionX - infoBoxWidth < 0 ? 0 : cursorPositionX - infoBoxWidth + window.pageXOffset;
		const infoBoxPositionY = cursorPositionY - infoBoxHeight < 0 ? 0 : cursorPositionY - infoBoxHeight + window.pageYOffset;
		
		infoBox.style.left = infoBoxPositionX + 'px';
		infoBox.style.top = infoBoxPositionY + 'px';
	})

}

const Info = ({description, reference}) => {

	useEffect(() => {
		activateFollowing(reference.current);
	}, [reference]);

	return <div className="info" ref={reference}>
		{description}
	</div>
}

export default Info;