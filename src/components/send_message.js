import React, { Fragment, Component } from "react";
import * as core from "@material-ui/core";
import "./send_message.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import personImage from "../assets/Person.png"


class Send extends Component {
	state = {
		formValue: {},
		members: [],
		message: {},
		event_id: "",
		head:"",
		messageDetails:"",
		redirect: false,
	};
	componentDidMount() {
		console.log(this.state.message);
		console.log(process.env.REACT_APP_EVENTS)
		console.log(process.env.REACT_APP_REPRESENTATIVES);

		console.log("Hello from send Message");
		if (this.props.location.state) {
			var formValue = this.props.location.state.formValue;
			var fullName = formValue.firstName + " " + formValue.lastName;
			console.log("adding full name to message: "+fullName);
			var text = this.props.location.state.event_details.text;
			text = text + "\nSincerely,\n"+fullName
			console.log(text);
			var head = this.props.location.state.event_details.head;
			var messageDetails = this.props.location.state.event_details.TEXT;
			var jurisdiction = this.props.location.state.event_details.jurisdiction;
			var representative_payload = formValue;
			representative_payload[ 'jurisdiction'] = jurisdiction;
			console.log("form value then repN payload");
			console.log(formValue);
			console.log(representative_payload);
			this.setState({
				formValue: formValue,
				text: text,
				head : head,
				messageDetails : messageDetails,
				redirect: false,
			});
			axios
				.post(
          process.env.REACT_APP_REPRESENTATIVES, representative_payload
          )
				.then((response,body) => {
					// handle success
					//console.error('error:', "error"); // Print the error if one occurred
				  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
					console.log(response);
					this.setState({
						members: response["data"]["representatives"],
					});
				})
				.catch(function (error) {
					// handle error
					console.log(error);
				})
				.then(function () {
					// always executed
				});
		} else {
			this.setState({
				redirect: true,
			});
		}
	}
	changeHandlerMessageSubject = (event) => {
		event.persist();
		this.setState((prevState) => ({
			message: { ...prevState.message, message_subject: event.target.value },
		}));
	};
	changeHandlerMessageBody = (event) => {
		event.persist();
		this.setState((prevState) => ({
			message: { ...prevState.message, message_body: event.target.value },
		}));
		console.log(this.state.message);
	};

	render() {
		return (
			<Fragment>

				<div className="container">
					<div className="header">
						<core.Typography variant="h4" align="left" className="form-ttle">
							Legislature
						</core.Typography>
					</div>
					{this.state.members.map((representative, index) => (
						<Fragment>
							<core.Paper
								elevation={5}
								className="mainContainer"
								color="primary.main">
								<core.Container maxWidth="lg" className="messageContainer">
									<core.Typography variant="h6" className="messageTitle">
										<b>{representative.type} </b>
									</core.Typography>
									<div className="flexBoxContainer">
										<NavLink
											to={{
												pathname: "/email",
												state: {
													thumbnail: representative.image ,
													district : representative.district,
													name: representative.name,
													head : this.state.head,
													email: {
														toAddress : representative.email,
														fromAddress : this.state.formValue.email,
														subject : "",
														emailBody : "This is a test body" + "\nSincerely,\n"+this.state.formValue.firstName+" "+this.state.formValue.lastName
													},
													messageDetails : this.state.messageDetails,
												},
											}}>
											<div className ="imageWidth">	
											<img src={`${representative.image ? representative.image: personImage}`}  className ="imageWidth" alt={representative.name}/>
											</div>
											</NavLink>
										<div className="memberInfoContainer">
											<div className="memberDetailContainer">
												<p>
													{representative.name}
												</p>
												<p>Party : {representative.party}</p>
												<p>Website : {representative.website}</p>
											</div>
										</div>
									</div>
								</core.Container>
							</core.Paper>
						</Fragment>
					))}
				</div>
			</Fragment>
		);
	}
}

export default Send;
