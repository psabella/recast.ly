import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    // state serves as storage
    this.state = {
      videos: exampleVideoData,
      videoInPlayer: exampleVideoData[0]
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('puppies');
    console.log("did mount ran");
  }

  onClickTitle(video) {
    this.setState({
      videoInPlayer: video
    });
  }

  getYouTubeVideos (query) {
    var options = {
      key: this.props.API_KEY,
      query: query,
      max: 5
    };
    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        videoInPlayer: videos[0]
      });
    });
  }

  render() {

    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.videoInPlayer}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} titleClick={this.onClickTitle.bind(this)}/>
        </div>
      </div>
    </div>);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


