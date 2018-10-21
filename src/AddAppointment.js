	import React from 'react';
    import $ from 'jquery'; 
    import jquery from 'jquery'; 
	// import './css/Pretty-Registration-Form.css'

	class AddAppointment extends React.Component {
		toggleAptDisplay = () => {
			this.props.handleToggle();
		};

        handleAdd = (event) => {
            var tempItem = {
                petName: this.refs.inputPetname.value,
                ownerName: this.refs.inputOwnername.value,
                aptDate: this.refs.inputDate.value + ' ' + this.refs.inputTime.value,
                aptNotes: this.refs.inputNotes.value
            }
            event.preventDefault();
            this.props.addApt(tempItem);
            } 

		render()
		{
			var displayAptBody = {
				display: this.props.bodyVisible ? 'block' : 'none'
			}
			return(
				<div>
				<div className="row register-form">
				<div>
					<button className="btn btn-outline-primary" onClick={this.toggleAptDisplay}><font size="15px">Toggle Appointment Creator</font></button>
				</div>
                <p></p>
                <div className="col-sm-12" style={displayAptBody}>
                    <form className="custom-form" onSubmit = {this.handleAdd.bind(this)} >
                    <p>
                        <h1>Create Appointment</h1>
                        </p>
                        <div className="form-row form-group">
                            <div className="col-sm-4 label-column"><label className="col-form-label" for="name-input-field">Pet Name</label></div>
                            <div className="col-sm-6 input-column"><input className="form-control" type="text" placeholder="e.g, Rufus" ref="inputPetname"/></div>
                        </div>
                        <div className="form-row form-group">
                            <div className="col-sm-4 label-column"><label className="col-form-label" for="email-input-field">Pet Owner</label></div>
                            <div className="col-sm-6 input-column"><input className="form-control" type="text" placeholder="Your Name" ref="inputOwnername"/></div>
                        </div>
                        <div className="form-row form-group">
                            <div className="col-sm-4 label-column"><label className="col-form-label" for="pawssword-input-field">Date</label></div>
                            <div className="col-sm-6 input-column"><input type="date" className="form-control" ref="inputDate"/></div>
                        </div>
                        <div className="form-row form-group">
                            <div className="col-sm-4 label-column"><label className="col-form-label" for="pawssword-input-field">Time</label></div>
                            <div className="col-sm-6 input-column"><input type="time" className="form-control" ref="inputTime"/></div>
                        </div>
                        <div className="form-row form-group">
                            <div className="col-sm-4 label-column"><label className="col-form-label" for="repeat-pawssword-input-field">Notes</label></div>
                            <div className="col-sm-6 input-column"><input className="form-control" type="text" placeholder="Any visible changes?" ref="inputNotes"/></div>
                        </div><button className="btn btn-light submit-button" type="submit">Add Appointment</button></form>
                </div>
            </div>
				</div>
			)
		}
	}


	export default AddAppointment;