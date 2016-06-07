//if its a library installed has name space 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//if its a component written by us | needs relative path
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDz2ZEjdn7Q_YqllsIUHHry0EZDizotQBk';



//create a new component. this component should produce some HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
			this.setState({ videos });
			//es6 this.setState({ videos: videos }) | when key = prop_name
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

//Take component's generated HTML and serve it up to the dom
ReactDOM.render(<App />, document.querySelector('.container'));