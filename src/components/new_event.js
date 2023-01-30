import React, {Fragment, Component} from "react";
import {
	Typography,
	Paper,
	Container,
	Grid,
	TextField,
	Button,
	Box,
} from "@material-ui/core";
import "./new_event.css";
import axios from "axios";

class Create_event extends Component {
	state = {
		eventName: "",
		eventPhoto: "",
		eventDescription: "",
		eventMessage: "",
		emailSubject: "",
		emailBody: "",
	};
	constructor(props) {
		super(props);
		this.submitDetails = this.submitDetails.bind(this);
	}
	changeEventname = (event) => {
		event.persist();
		this.setState(() => ({
			eventName: event.target.value,
		}));
	};
	changeEventPhoto = (event) => {
		event.persist();
		this.setState(() => ({
			eventPhoto: event.target.value,
		}));
	};
	changeEventDescription = (event) => {
		event.persist();
		this.setState(() => ({
			eventDescription: event.target.value,
		}));
	};
	changeMessageName = (event) => {
		event.persist();
		this.setState(() => ({
			eventMessage: event.target.value,
		}));
	};
	changeEmailSubject = (event) => {
		event.persist();
		this.setState(() => ({
			emailSubject: event.target.value,
		}));
	};
	changeEmailBody = (event) => {
		event.persist();
		this.setState(() => ({
			emailBody: event.target.value,
		}));
	};
	sendEventDetails() {
		axios
			.post("http://localhost:3001/event_create", null, {
				params: {
					event_name: this.state.eventName,
					event_photo: this.state.eventPhoto,
					event_description: this.state.eventDescription,
					message_name: this.state.eventMessage,
					email_subject: this.state.emailSubject,
					email_body: this.state.emailBody,
				},
			})
			.then(function (response) {})
			.catch(function (error) {});
	}

	submitDetails(a) {
		a.persist();
		this.sendEventDetails();
	}
	render() {
		return (
			<Fragment>
				<div className="container">
					<div className="header"></div>
					<Paper elevation={5} className="mainContainer" color="primary.main">
						<Typography variant="h4" className="form-title">
							Add Event
						</Typography>
						<Container maxWidth="md" className="newEventContainer divider">
							<Grid container direction="column" justify="center" spacing={5}>
								<Grid
									container
									justify="center"
									alignItems="center"
									spacing={3}
									item>
									<Grid item xs={2}>
										Event Name
									</Grid>
									<Grid item xs>
										<TextField
											required
											id="outlined-full-width"
											label="Name"
											variant="outlined"
											fullWidth
											size="small"
											onChange={(value) => this.changeEventname(value)}
										/>
									</Grid>
								</Grid>
								<Grid
									container
									justify="center"
									alignItems="center"
									spacing={3}
									item>
									<Grid item xs={2}>
										Image
									</Grid>
									<Grid item xs>
										<TextField
											required
											id="outlined-full-width"
											label="Photo URL"
											variant="outlined"
											fullWidth
											size="small"
											onChange={(value) => this.changeEventPhoto(value)}
										/>
									</Grid>
								</Grid>
								<Grid container justify="center" spacing={3} item>
									<Grid item xs={2}>
										Description
									</Grid>
									<Grid item xs>
										<TextField
											id="outlined-full-width"
											label="Description about event"
											variant="outlined"
											fullWidth
											size="small"
											multiline
											rows={10}
											onChange={(value) => this.changeEventDescription(value)}
										/>
									</Grid>
								</Grid>
							</Grid>
						</Container>
						<Typography variant="h4" className="form-title">
							Add default email data for this event
						</Typography>
						<Container maxWidth="md" className="newEventContainer">
							<Grid container direction="column" justify="center" spacing={5}>
								<Grid
									container
									justify="center"
									alignItems="center"
									spacing={3}
									item>
									<Grid item xs={2}>
										Message Name
									</Grid>
									<Grid item xs>
										<TextField
											required
											id="outlined-full-width"
											label="Message Name"
											variant="outlined"
											fullWidth
											size="small"
											onChange={(value) => this.changeMessageName(value)}
										/>
									</Grid>
								</Grid>
								<Grid
									container
									justify="center"
									alignItems="center"
									spacing={3}
									item>
									<Grid item xs={2}>
										Email Subject
									</Grid>
									<Grid item xs>
										<TextField
											required
											id="outlined-full-width"
											label="Email Subject"
											variant="outlined"
											fullWidth
											size="small"
											onChange={(value) => this.changeEmailSubject(value)}
										/>
									</Grid>
								</Grid>
								<Grid container justify="center" spacing={3} item>
									<Grid item xs={2}>
										Email Body
									</Grid>
									<Grid item xs>
										<TextField
											id="outlined-full-width"
											label="Email Body"
											variant="outlined"
											fullWidth
											size="small"
											multiline
											rows={10}
											onChange={(value) => this.changeEmailBody(value)}
										/>
									</Grid>
								</Grid>
							</Grid>
						</Container>
						<Box my={4}>
							<Button
								onClick={this.submitDetails}
								variant="contained"
								size="large"
								color="primary"
								fullWidth>
								Add Event
							</Button>
						</Box>
					</Paper>
				</div>
			</Fragment>
		);
	}
}

export default Create_event;
