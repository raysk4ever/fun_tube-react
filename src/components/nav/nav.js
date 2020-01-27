import React, { Component } from 'react';
import "./nav.css"

const Nav = props => {
    
    return ( 
        <div className="nav-container">
            <div className='nav-brand-container'>
                    <div className="">
                        <span className="brand-title">Fun Tube</span>
                    </div>
                    <div>
                        <span className="nav-items">Movies</span>
                        <span className="nav-items">Video</span>
                        <span className="nav-items">Music</span>
                        <span className="nav-items">Games</span>
                    </div>
                </div>
                <div >
                    <img className="brand-logo" src={require("../../assets/film.png")}/>
                </div>
                
            <div className="search-container">
                <div className='search-input-container'>
                    <input type="text" onChange={ (e)=> props.onNavSearchChange(e)}/>
                    <button>search</button>
                <div className="search-list-container" style={{display: props.showNavSearchItemsList}}>
                    {props.navSearchList.map(item=><span onClick={()=>props.handleListItemClick(item)}>{item.title}</span>)}
                </div>
                </div>
            </div>
        </div>
    );
}
 
export default Nav;