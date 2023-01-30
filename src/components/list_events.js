import React, {Fragment, Component} from "react";
import {
	Typography,
	Paper,
	Container,
	Grid,
	TextField,
	Button,
	Box,
	Table,
	MenuItem,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import "./list_events.css";
import axios from "axios";

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: "#313c7a",
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

class Event_list extends Component {
	state = {
		events: [],
		searchQuery: "",
	};
	getAllEvents = () => {
		axios
			.get("http://localhost:3001/all_events")
			.then((response) => {
				// handle success
				this.setState({
					events: response.data,
				});
				console.log(this.state.events);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};
	componentDidMount() {
		this.getAllEvents();
		console.log(this.state.events);
	}

	changeEventStatus = (event, eventId) => {
		axios
			.put(
				`http://localhost:3001/update_event/${eventId}/${event.target.value}`,
			)
			.then((response) => {
				// handle success
				this.getAllEvents();

				console.log(this.state.events);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
		console.log(event.target.value);
	};
	changesearchQuery = (event) => {
		this.setState({
			searchQuery: event.target.value,
		});
	};
	searchEvent = () => {
		if (this.state.searchQuery) {
			axios
				.get(`http://localhost:3001/find_event/${this.state.searchQuery}`)
				.then((response) => {
					// handle success
					this.setState({
						events: response.data,
					});
					console.log(this.state.events);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
				})
				.then(function () {
					// always executed
				});
			console.log("search event");
		} else {
			this.getAllEvents();
		}
	};
	render() {
		return (
			<Fragment>
				<div className="container">
					<div className="header"></div>
					<Paper elevation={5} className="mainContainer" color="primary.main">
						<Typography variant="h4" className="form-title">
							List of Events
						</Typography>
						<Container maxWidth="xl" className="newEventContainer">
							<Box pb={5}>
								<Grid
									container
									className="mainGridContainer"
									direction="row"
									justify="center"
									spacing={5}>
									<Grid
										className="filterGrid"
										direction="column"
										container
										xs={2}
										justify="start"
										alignItems="center">
										<div className="gridItemHead">
											<Typography variant="h5"> Search By</Typography>
										</div>
										<div className="gridItem">
											<TextField
												id="Name"
												label="Name"
												fullWidth
												onChange={(value) => this.changesearchQuery(value)}
											/>
											<Button onClick={this.searchEvent}>
												<SearchIcon />
											</Button>
										</div>
									</Grid>
									<Grid
										container
										xs
										justify="center"
										alignContent="center"
										padding={5}>
										<TableContainer component={Paper}>
											<Table aria-label="customized table">
												<TableHead>
													<TableRow>
														<StyledTableCell>Event Name</StyledTableCell>
														<StyledTableCell align="left">
															Status
														</StyledTableCell>
														<StyledTableCell align="left">Edit</StyledTableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{this.state.events.map((event) => (
														<StyledTableRow key={event.event_name}>
															<StyledTableCell component="th" scope="row">
																{event.event_name}
															</StyledTableCell>
															<StyledTableCell align="left">
																{event.event_status}
															</StyledTableCell>
															<StyledTableCell align="left">
																<TextField
																	id="action"
																	defaultValue={event.event_status}
																	select
																	label="action"
																	onChange={(value) =>
																		this.changeEventStatus(
																			value,
																			event.event_id,
																		)
																	}
																	variant="outlined"
																	size="small">
																	<MenuItem key="active" value="active">
																		Active
																	</MenuItem>
																	<MenuItem key="inactive" value="inactive">
																		Inactive
																	</MenuItem>
																</TextField>
															</StyledTableCell>
														</StyledTableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									</Grid>
								</Grid>
							</Box>
						</Container>
					</Paper>
				</div>
			</Fragment>
		);
	}
}
export default Event_list;
