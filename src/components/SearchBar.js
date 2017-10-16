import React, { Component } from 'react';


class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
	}

	render() {
		return (
			<div className="search-bar">
			<input
			value={this.state.term}
			onChange={this.onInputChange} 
			/>
			</div>
		)
	}

	onInputChange(e) {
		// save search bar input
		const searchTerm = e.target.value;

		this.setState({
			term: searchTerm
		});

		this.props.onSearchTermChange(searchTerm);
	};
}

export default SearchBar;
