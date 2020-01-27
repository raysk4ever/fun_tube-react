import React from "react";
import "./App.css";
import Video from "./components/video/video";
import Playlist from "./components/playlist/playlist";
import { VideosData } from "./data/videoData";
import TrackInfo from "./components/trackInfo/trackInfo";
import Nav from "./components/nav/nav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: VideosData,
      videoData: {},
      poster: "https://picsum.photos/1200/720",
      navSearchList: [],
      showNavSearchItemsList: 'flex'
    };
  }
  componentDidMount() {
    const videoData = this.state.data[0];
    this.setState({ videoData });
  }
  handleOnClick = item => {
    let videoData = item,
      data = this.state.data;
    this.setState({ videoData, data });
  };
  handleOnNavSearchChange = item => {
    try{
      let value = item.currentTarget.value;
      let navSearchList = this.state.data;
      const regex = new RegExp(value, "g");
      navSearchList = navSearchList.filter(item => item.title.match(regex));
      if(navSearchList.length>5) navSearchList = navSearchList.slice(0,5)
      this.setState({ navSearchList, showNavSearchItemsList: 'flex' });
    }catch(ex){
      console.log(`search catch error`, ex)
    }
  };
  handleListItemClick = item => {
    console.log(`item clicked`, item)
    this.setState({videoData: item, showNavSearchItemsList: 'none'});
  }

  render() {
    const { data } = this.state;
    return (
      <div className="">
        <div>
          <Nav
            showNavSearchItemsList={this.state.showNavSearchItemsList}
            handleListItemClick={item => this.handleListItemClick(item)}
            navSearchList={this.state.navSearchList}
            showNavSearchItemsList={this.state.showNavSearchItemsList}
            onNavSearchChange={item => this.handleOnNavSearchChange(item)}
          />
        </div>
        <div className=" App df">
            <div className="df fdc sidebar">
              <span>Music</span>
              <span>Movie</span>
              <span>Game</span>
            </div>
          <div className="f1 fdc">
            <div className="">
              <Video videoData={this.state.videoData} />
            </div>
            <div>
              <TrackInfo selectedItem={this.state.videoData} />
            </div>
          </div>
          <div className="">
            <Playlist
              selectedItem={this.state.videoData}
              onClick={item => this.handleOnClick(item)}
              data={data}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
