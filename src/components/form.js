import React, {Fragment, Component} from "react";
import {
	Typography,
	Container,
	Grid,
	TextField,
	Button,
	MenuItem,
	Paper,
} from "@material-ui/core";
import {NavLink, Redirect} from "react-router-dom";
import "./form.css";

class Form extends Component {
	state = {
		formValue: {
			prefix: "",
			firstName: "",
			lastName: "",
			email: "",
			address: "",
			city: "",
			state: "",
			zipcode: "",
		},
		event_details: {
			text: "",
			head: "",
			message: "",
			jurisdiction: "",
		},
		redirect: false,
	};
	componentDidMount() {
		if (this.props.location.state) {
			console.log(this.props.location.state.message);
			var head = this.props.location.state.head;
			var message = this.props.location.state.message;
			var id = this.props.location.state.id;
			var jurisdiction = this.props.location.state.jurisdiction;

			this.setState({
				event_details: {
					id: id,
					head: head,
					message: message,
					jurisdiction: jurisdiction,
				},
				redirect: false,
			});
		} else {
			this.setState({
				redirect: true,
			});
		}
	}

	changeHandlerPrefix = (event) => {
		event.persist();
		this.setState((prevState) => ({
			formValue: {...prevState.formValue, prefix: event.target.value},
		}));
	};
	changeHandlerFName = (event) => {
		event.persist();
		this.setState((prevState) => ({
			formValue: {...prevState.formValue, firstName: event.target.value},
		}));
	};
	changeHandlerLName = (event) => {
		event.persist();
		this.setState((prevState) => ({
			formValue: {...prevState.formValue, lastName: event.target.value},
		}));
	};
	changeHandlerEmail = (event) => {
		event.persist();
		this.setState((prevState) => ({
			formValue: {...prevState.formValue, email: event.target.value},
		}));
	};
	changeHandlerAddress = (event) => {
		event.persist();

		this.setState((prevState) => ({
			formValue: {...prevState.formValue, address: event.target.value},
		}));
	};
	changeHandlerZip = (event) => {
		event.persist();
		var length = event.target.value.length;
		this.setState((prevState) => ({
			formValue: {...prevState.formValue, zipcode: event.target.value},
		}));

		if (length === 5) {
			fetch(` http://ZiptasticAPI.com/${event.target.value}`)
				.then((res) => res.json())
				.then(
					(result) => {
						this.setState((prevState) => ({
							formValue: {
								...prevState.formValue,
								city: result.city,
								state: result.state,
							},
						}));
					},
					(error) => {
						this.setState((prevState) => ({
							formValue: {
								...prevState.formValue,
								zipcode: error,
							},
						}));
						console.log("Error" + error);
					},
				);
		}
	};

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

				<div>
					<Typography variant="h4" className="form-title">
						Form
					</Typography>
				</div>
				<Paper elevation={5} className="mainContainer" color="primary.main">
					<Container maxWidth="lg">
						<div className="form-desc">
							<h4>{this.state.event_details.head}</h4>
							<p>{this.state.event_details.message}</p>
						</div>
					</Container>
					<Container maxWidth="md" className="formContainer">
						<Grid container direction="column" justify="center" spacing={5}>
							<Grid container spacing={3} item>
								<Grid item xs={2}>
									<TextField
										id="prefix"
										select
										label="Prefix"
										value={this.state.formValue.prefix}
										onChange={(value) => this.changeHandlerPrefix(value)}
										variant="outlined">
										<MenuItem key="Mrs" value="Mrs">
											Dr
										</MenuItem>
										<MenuItem key="Mr" value="Mr">
											Mr
										</MenuItem>
										<MenuItem key="Ms" value="Ms">
											Ms
										</MenuItem>
										<MenuItem key="Mrs" value="Mrs">
											Mrs
										</MenuItem>
									</TextField>
								</Grid>
								<Grid item xs>
									<TextField
										required
										id="outlined-full-width"
										label="First Name"
										variant="outlined"
										fullWidth
										onChange={(value) => this.changeHandlerFName(value)}
									/>
								</Grid>
								<Grid item xs>
									<TextField
										required
										id="outlined-full-width"
										label="Last Name"
										variant="outlined"
										fullWidth
										onChange={(value) => this.changeHandlerLName(value)}
									/>
								</Grid>
							</Grid>
							<Grid container spacing={3} item>
								<Grid item sm>
									<TextField
										required
										id="outlined-full-width"
										label="Email"
										variant="outlined"
										fullWidth
										onChange={(value) => this.changeHandlerEmail(value)}
									/>
								</Grid>
							</Grid>
							<Grid container spacing={3} item>
								<Grid item sm>
									<TextField
										required
										id="outlined-full-width"
										label="Address"
										variant="outlined"
										fullWidth
										onChange={(value) => this.changeHandlerAddress(value)}
									/>
								</Grid>
							</Grid>
							<Grid container spacing={3} item>
								<Grid item xs={3}>
									<TextField
										id="outlined-full-width"
										label="City"
										variant="filled"
										disabled
										value={this.state.formValue.city}
									/>
								</Grid>
								<Grid item xs>
									<TextField
										id="outlined-full-width"
										label="State"
										variant="filled"
										fullWidth
										disabled
										value={this.state.formValue.state}
									/>
								</Grid>
								<Grid item xs>
									<TextField
										required
										id="outlined-full-width"
										label="Zip Code"
										variant="outlined"
										fullWidth
										onChange={(value) => this.changeHandlerZip(value)}
									/>
								</Grid>
							</Grid>
							<Grid item>
								<NavLink
									to={{
										pathname: "/send",
										state: {
											formValue: this.state.formValue,
											event_details: this.state.event_details,
										},
									}}>
									<Button
										variant="contained"
										size="large"
										color="primary"
										fullWidth>
										Submit
									</Button>
								</NavLink>
							</Grid>
						</Grid>
					</Container>
				</Paper>
			</Fragment>
		);
	}
}

export default Form;
