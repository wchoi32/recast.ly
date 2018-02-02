var VideoPlayer = (props) => (
  <div className="video-player" > 
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={'https:www.youtube.com/embed/' + props.videos.id.videoId + '?autoplay=' + props.autoPlay} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <label class="switch">
        <input type="checkbox" data-toggle="toggle" data-size="normal" onChange={ () => { props.toggleAutoPlay(props); }} />
        <span class="slider"></span>
      </label>
      <h3>{props.videos.snippet.title}</h3>
      <div>{props.videos.snippet.description}</div>
    </div>
  </div>
);
// let videLink = 'https://www.youtube.com/embed/' + this.state.videoID;

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
