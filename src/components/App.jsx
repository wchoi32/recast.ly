class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPlaying: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };
  }

  onVideoClick(video) {
    this.setState({
      nowPlaying: video.video
    });
  }

  newSearch(string) {
    searchYouTube(string, this.setNewVideoList.bind(this));
  }

  setNewVideoList(searchResults) {
    this.setState({
      nowPlaying: searchResults[0],
      videoList: searchResults 
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search newSearch={this.newSearch.bind(this)}/></em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer videos={this.state.nowPlaying}/></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={this.state.videoList} onVideoClick={this.onVideoClick.bind(this)}/></em></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> view goes here</h5></div>
//       </div>
//     </div>
//   </div>
// );


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
