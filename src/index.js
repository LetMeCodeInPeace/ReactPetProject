import React from 'react'
import ReactDOM from 'react-dom'
// import Header from './components/header'
// import './data.json';
import $ from 'jquery';
import AptList from './AptList';
import AddAppointment from './AddAppointment.js';
import SearchComponent from './SearchComponent.js';
import _ from 'lodash'




class MainInterface extends React.Component {

	 constructor(props) {
    	super(props);
    	//this.state = {title: "Appointments", show: true};
    this.state =	{
    	aptBodyVisible: false,
      orderBy: 'aptDate',
      order: 'asc',
      queryText: '',
      myAppointments: []
  		}
  	}

  		componentDidMount(){
    this.serverRequest = $.get('./data.json', function(result) {
  				var tempApts = result;
  				this.setState({
  					myAppointments: tempApts
  				})
  			}.bind(this));
  		}


  		componentWillUnmount(){
  			this.serverRequest.abort();
  		}


  		deleteMessage(item){
  			var prevAppts = this.state.myAppointments
  			var newAppts = _.without(prevAppts, item)
  			this.setState({
  				myAppointments: newAppts
  			})
  		}

  		toggleAddDisplay(){
  			var tempVisibility = !this.state.aptBodyVisible;
  			this.setState({
  				aptBodyVisible: tempVisibility
  			})
  		}

      addItem(tempItem){
        var disposableApts = this.state.myAppointments;
        disposableApts.push(tempItem);
        this.setState({myAppointments:disposableApts});
      }

      reOrder=(orderBy,order)=>{
        this.setState({orderBy: orderBy, order: order})
      }

      searchApts(q){
        this.setState({queryText:q})
      }


  render() {

  	var filteredApts = [];
    var orderBy=this.state.orderBy;
    var order=this.state.order;
    var queryText = this.state.queryText;
    var myAppointments = this.state.myAppointments;


    myAppointments.forEach(function(item){
      if(
        (item.petName.toLowerCase().indexOf(queryText)!=-1) || (item.ownerName.toLowerCase().indexOf(queryText)!=-1) || (item.aptDate.toLowerCase().indexOf(queryText)!=-1) || (item.aptNotes.toLowerCase().indexOf(queryText)!=-1)
        ){
        filteredApts.push(item);
      }
    }.bind(this));


    filteredApts = _.orderBy(filteredApts, function(item)
    {
      return item[orderBy].toLowerCase();
    }, order)


  	filteredApts = filteredApts.map(function(item, index) {
  		return(
  			<AptList key = {index} 
  			singleItem = {item} 
  			whichItem = {item}
  			onDelete = {this.deleteMessage.bind(this)}
  			/>
  			)
  	}.bind(this));

   return (
  	<div className="interface">

<AddAppointment bodyVisible = {this.state.aptBodyVisible} handleToggle={this.toggleAddDisplay.bind(this)} addApt = {this.addItem.bind(this)}/>
		<SearchComponent 
    orderBy={this.state.orderBy} 
    order={this.state.order} 
    onReOrder = {this.reOrder}
    onSearch = {this.searchApts.bind(this)}
    />
    <ul className="list-group">{filteredApts}</ul>
	</div>
			)
  }



}

ReactDOM.render(<MainInterface />,document.getElementById('petAppointments'));

