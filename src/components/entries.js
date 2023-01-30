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
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import "./entries.css";
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

class Entries extends Component {
	state = {
		entries: [],
		event_name: "",
		zipcode: "",
	};

	componentDidMount() {
		axios
			.get("http://localhost:3001/user_message")
			.then((response) => {
				// handle success
				console.log(response.data);
				this.setState({
					entries: response.data,
				});
				console.log(this.state.entries);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	}
	nameSearchQuery = (event) => {
		this.setState({
			event_name: event.target.value,
		});
	};
	zipcodeSearchQuery = (event) => {
		this.setState({
			zipcode: event.target.value,
		});
	};

	searchQueryName = () => {
		axios
			.get(`http://localhost:3001/user_message/q1/${this.state.event_name}`)
			.then((response) => {
				// handle success
				this.setState({
					entries: response.data,
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
	};
	searchQueryZipcode = () => {
		axios
			.get(`http://localhost:3001/user_message/q2/${this.state.zipcode} `)
			.then((response) => {
				// handle success
				this.setState({
					entries: response.data,
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
	};
	render() {
		return (
			<Fragment>
				<div className="container">
					<div className="header"></div>
					<Paper elevation={5} className="mainContainer" color="primary.main">
						<Typography variant="h4" className="form-title">
							Entries
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
												id="Event"
												label="Event Name"
												fullWidth
												onChange={(value) => this.nameSearchQuery(value)}
											/>
											<Button onClick={this.searchQueryName}>
												<SearchIcon />
											</Button>
										</div>
										<div className="gridItem">
											<TextField
												id="Zipcode"
												label="Zip Code"
												fullWidth
												onChange={(value) => this.zipcodeSearchQuery(value)}
											/>
											<Button onClick={this.searchQueryZipcode}>
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
														<StyledTableCell>Full Name</StyledTableCell>
														<StyledTableCell align="left">
															Event
														</StyledTableCell>
														<StyledTableCell align="left">Date</StyledTableCell>
														<StyledTableCell align="left">
															Email
														</StyledTableCell>
														<StyledTableCell align="left">
															Zipcode
														</StyledTableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{this.state.entries.map((e, index) => (
														<StyledTableRow key={e.name}>
															<StyledTableCell component="th" scope="row">
																{e.f_name} {e.l_name}
															</StyledTableCell>
															<StyledTableCell align="left">
																{e.event_name}
															</StyledTableCell>
															<StyledTableCell align="left">
																{e.date}
															</StyledTableCell>
															<StyledTableCell align="left">
																{e.email}
															</StyledTableCell>
															<StyledTableCell align="left">
																{e.zipcode}
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

export default Entries;
