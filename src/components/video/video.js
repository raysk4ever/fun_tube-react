import React, { Component } from 'react';
import { Player, ControlBar, VolumeMenuButton, PlayToggle, BigPlayButton, LoadingSpinner } from 'video-react';
import 'video-react/dist/video-react.css';
import './video.css'

const MyVideo = props => {
	return ( 
		<div className="df video-container bg-dark">
			<Player
				// playsInline
				// autoPlay
				poster={props.videoData.poster}
				src={props.videoData.sources}>
				<BigPlayButton position="center" />
				<LoadingSpinner/>
				<ControlBar autoHide={true}>
						<PlayToggle />
						<VolumeMenuButton vertical />
				</ControlBar>
			</Player>
		</div>
	);
} 
export default MyVideo;