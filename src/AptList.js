	import React from 'react'
  // import './css/bootstrap.min.css'
class AptList extends React.Component {

  constructor(){
    super()
    this.handleDelete = this.handleDelete.bind(this);
  }

	  handleDelete(){
    this.props.onDelete(this.props.whichItem)
  }

  render(){
		return(
			<div>
 <li className="list-group-item">
  <div className="pet"><h1 className="pet-name"><button type="button" onClick={this.handleDelete}
                              className="btn btn-danger glyphicon glyphicon-trash"></button>&nbsp;
  {this.props.singleItem.petName}</h1>
    
  <p>
  <span className="apt-date">{this.props.singleItem.aptDate}</span></p></div>
  <div className="owner"><b>Owner:</b> {this.props.singleItem.ownerName}</div>
  <div><b>Notes:</b> {this.props.singleItem.aptNotes}</div>
  </li>
  </div>
			)
	}



}

    export default AptList;