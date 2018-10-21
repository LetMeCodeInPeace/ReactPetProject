var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
	render: function()
	{
		return (
			<div className="interface">
			<h1>Pet Appointments</h1>
			</div>
			)
	}
});

ReactDOM.render(<MainInterface />,document.getElementById('petAppointments'));