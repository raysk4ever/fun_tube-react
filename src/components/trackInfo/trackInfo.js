import React, { Component } from 'react';
import "./trackInfo.css"
const TrackInfo = props => { 
    const {title} = props.selectedItem;
    return ( 
        <div className="track-container">
            <div>
            <span className="track-title">{title}</span>
            <div className="track-sub-container">
                <div>
                    <span className="track-sub-info">{Math.floor((Math.random() * 1000) + 100)} views</span>
                    <img src={require("../../assets/like.png")} className="icon-sm"/>
                    <span className="track-sub-info">{Math.floor((Math.random() * 1000) + 100)}</span>
                    <img src={require("../../assets/dislike.png")} className="icon-sm"/>
                    <span className="track-sub-info">{Math.floor((Math.random() * 1000) + 100)}</span>
                </div>

                <span className="track-sub-info">Dec 31, 2019</span>
            </div>
            </div>
            <div>
                <div>{}</div>
            </div>
        </div> 
    );
}
 
export default TrackInfo;