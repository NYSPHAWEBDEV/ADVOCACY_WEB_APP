import React, {Fragment, Component} from "react";
import {Typography, Paper, Container, Grid, Box} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import "./home_page.css";

class Home extends Component {
	state = {};

	render() {
		return (
			<Fragment>
				<div className="container">
					<div className="header"></div>
					<Paper elevation={5} className="mainContainer" color="primary.main">
						<Typography variant="h4" className="form-title">
							Dash Board
						</Typography>
						<Container maxWidth="xl" className="newEventContainer">
							<Box pb={5} class="buttonContainer">
								<Grid
									container
									xs
									justify="space-evenly"
									alignContent="center"
									spacing={3}>
									<NavLink
										to={{
											pathname: "/user_entries",
										}}
										style={{textDecoration: "none", color: "inherit"}}>
										<Grid item class="button">
											View All Entries
										</Grid>
									</NavLink>
									<NavLink
										to={{
											pathname: "/event_list",
										}}
										style={{textDecoration: "none", color: "inherit"}}>
										<Grid item class="button">
											View All Events
										</Grid>
									</NavLink>
									<NavLink
										to={{
											pathname: "/d",
										}}
										style={{textDecoration: "none", color: "inherit"}}>
										<Grid item class="button">
											View Representative
										</Grid>
									</NavLink>
									<NavLink
										to={{
											pathname: "/new_event",
										}}
										style={{textDecoration: "none", color: "inherit"}}>
										<Grid item class="button">
											Add New Event
										</Grid>
									</NavLink>
									<NavLink
										to={{
											pathname: "/c",
										}}
										style={{textDecoration: "none", color: "inherit"}}>
										<Grid item class="button">
											Add Representative
										</Grid>
									</NavLink>
								</Grid>
							</Box>
						</Container>
					</Paper>
				</div>
			</Fragment>
		);
	}
}

export default Home;
