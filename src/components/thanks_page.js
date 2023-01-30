import React, {Fragment, Component} from "react";
import {Typography, Paper, Grid, Button} from "@material-ui/core";
import {NavLink, Redirect} from "react-router-dom";
import axios from "axios";
import "./thanks.css";

class Thanks extends Component {
	state = {
		formValue: {},
		members: [],
		message: {},
		event_id: "",
		redirect: false,
	};
	componentDidMount() {
		console.log("Hello");
		console.log(this.props.history);
		if (this.props.location.state) {
			console.log(this.props.location.state.event_id);
			var formValue = this.props.location.state.formValue;
			var members = this.props.location.state.members;
			var message = this.props.location.state.message;
			var event_id = this.props.location.state.event_id;

			this.setState({
				formValue: formValue,
				members: members,
				message: message,
				event_id: event_id,
				redirect: false,
			});
			console.log(this.state.redirect);

			axios
				.post("http://localhost:3001/user_data_create", null, {
					params: {
						event_id: event_id,
						prefix: formValue.prefix,
						f_name: formValue.firstName,
						l_name: formValue.lastName,
						email: formValue.email,
						address: formValue.address,
						city: formValue.city,
						state: formValue.state,
						zipcode: formValue.zipcode,
						message_subject: message.message_subject,
						message_body: message.message_body,
						assemblyMember_id: members[0].member_id,
						senateMember_id: members[1].member_id,
					},
				})
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
		} else {
			this.setState({
				redirect: true,
			});
			console.log(this.state.redirect);
		}
	}
	render() {
		return (
			<Fragment>
				{this.state.redirect === false ? (
					<div></div>
				) : (
					<Redirect
						to={{
							pathname: "/",
						}}
					/>
				)}
				<div className="container">
					<div className="header">
						<Typography variant="h4" className="form-title">
							Thank You !
						</Typography>
					</div>
					<Paper elevation={5} className="mainContainer" color="primary.main">
						<div className="messageHeader">
							<div>We have sent the emails on your behalf.</div>
							<div>Thank you for supporting the cause !</div>
						</div>
						{/* {this.state.members} */}
						<div className="membersContainer">
							{this.state.members.map((person, index) => (
								<div className="memberRow">
									<div className="members">
										<div className="memberImgContainer">
											<img
												className="memberImg"
												src={person.image}
												alt={person.f_name}
											/>
										</div>
										<div className="memberDetails">
											<p>
												{person.f_name} {person.l_name}
											</p>
											<p>NY {person.r_type} Member</p>
											<p>{person.phone}</p>
											<p>{person.email}</p>
										</div>
									</div>
									<div className="additionalDetail">
										<p>{person.website}</p>
										<p>{person.address}</p>
									</div>
								</div>
							))}
						</div>

						<Grid item>
							<NavLink to="/">
								<Button
									variant="contained"
									size="large"
									color="primary"
									fullWidth>
									All Events
								</Button>
							</NavLink>
						</Grid>
					</Paper>
				</div>
			</Fragment>
		);
	}
}

export default Thanks;
