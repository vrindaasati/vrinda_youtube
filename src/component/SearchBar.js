import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''};

    onInputChange = (event) =>{
      this.setState({term: event.target.value})
    };

    onFormSubmit = (event) =>{
     event.preventDefault();
     this.props.onSearchTerm(this.state.term);
    };
    render(){
        return(
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                   <label>Search Videos</label>
                   <input type="text" value={this.state.term} onChange={this.onInputChange} />
                </form>
            </div>
        );
    };
};

export default SearchBar;