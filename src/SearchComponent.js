	import React from 'react';
	import ReactDOM from 'react-dom';
	import _ from 'lodash'
	import Button from 'react-bootstrap';




class SearchComponent extends React.Component {

handleSort =(e)=>{
	console.log(e)
	this.props.onReOrder(e.target.id, this.props.order)
};

handleOrder = (e) => {
	console.log(e)
	this.props.onReOrder( this.props.order, e.target.id)
};

handleSearch = (e) => {
	this.props.onSearch(e.target.value);
};

	render(){
		return(
			<div>
<form class="search-form">
    <div class="input-group">
        <div class="input-group-prepend"></div>
        <input type="text" onChange={this.handleSearch} placeholder="Search" class="form-control" style={{fontSize: 45 + 'px'},{height: 45 + 'px'}} />

    </div>
</form>
			</div>
			)
	}
}

export default SearchComponent;