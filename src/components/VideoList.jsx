class VideoList extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // //   title: exampleVideoData.snippet.title,
    // //   description: exampleVideoData.snippet.description,
    // //   thumbnail: exampleVideoData.snippet.thumbnails.default.url
    // };
  }
  
  render() {
    // let eachVideo = exampleVideoData.map(() => {
    // };

    return (
      <div className="video-list">
        {exampleVideoData.map(item => 
          <div><h5><em><VideoListEntry>{item}</VideoListEntry></em></h5></div>
        )}
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
