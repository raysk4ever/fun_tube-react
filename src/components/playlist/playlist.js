import React, { Component } from 'react';
import "./playlist.css"

class Playlist extends Component {
    render() { 
        return ( 
            <div className="playlist-container">
                {this.props.data.map(item=>(
                    <div onClick={()=>this.props.onClick(item)} className={this.props.selectedItem.title === item.title? "single-list-item active":"single-list-item"}>
                        <img src={require("../../assets/poster.jpeg")}/>
                        <div className="df fdc track-info">
                            <span className="title">{item.title}</span>
                            <sapn className="by">{item.subtitle}</sapn>
                            <sapn className="by">{item.category}</sapn>
                        </div>
                    </div>
                ))}
            </div>
         );
    }
}
 
export default Playlist;