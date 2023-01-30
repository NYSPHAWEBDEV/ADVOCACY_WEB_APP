import React, {Fragment, Component} from "react";
import {
	Typography,
	Paper,
	Container,
	Grid,
	TextField,
	Button,
	MenuItem,
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
import "./representative_list.css";

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

function createData(name, type, status, action) {
	return {name, type, status, action};
}

const rows = [
	createData("Abbas Shamshi", "SENATE MEMBER", "Active", "as10608n@pace.edu"),
	createData(
		"Kautilya Save",
		"ASSEMBLY MEMBER",
		"Inactive",
		"ks12875n@pace.edu",
	),
	createData(
		"Andrea Sonberg",
		"ASSEMBLY MEMBER",
		"Inactive",
		"andrea@pace.edu",
	),
	createData("Jane Shmidt", "SENATE MEMBER", "Active", "jshmidt@pace.edu"),
	createData("Abbas Shamshi", "SENATE MEMBER", "Inactive", "as10608n@pace.edu"),
	createData("Kautilya Save", "ASSEMBLY MEMBER", "Active", "ks12875n@pace.edu"),
	createData(
		"Andrea Sonberg",
		"ASSEMBLY MEMBER",
		"Inactive",
		"andrea@pace.edu",
	),
	createData("Jane Shmidt", "SENATE MEMBER", "Inactive", "jshmidt@pace.edu"),
];

class R_list extends Component {
	state = {};

	changeHandlerPrefix = (event) => {
		event.persist();
	};
	render() {
		return (
			<Fragment>
				<div className="container">
					<div className="header"></div>
					<Paper elevation={5} className="mainContainer" color="primary.main">
						<Typography variant="h4" className="form-title">
							Representative Profile
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
											<TextField id="Name" label="Name" fullWidth />
											<Button>
												<SearchIcon />
											</Button>
										</div>
										<div className="gridItem">
											<TextField id="Type" label="Type" fullWidth />
											<Button>
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
															Representative Type
														</StyledTableCell>
														<StyledTableCell align="left">
															Status
														</StyledTableCell>
														<StyledTableCell align="left">
															Action
														</StyledTableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{rows.map((row) => (
														<StyledTableRow key={row.name}>
															<StyledTableCell component="th" scope="row">
																{row.name}
															</StyledTableCell>
															<StyledTableCell align="left">
																{row.type}
															</StyledTableCell>
															<StyledTableCell align="left">
																{row.status}
															</StyledTableCell>
															<StyledTableCell align="left">
																<TextField
																	id="action"
																	select
																	label="action"
																	onChange={(value) =>
																		this.changeHandlerPrefix(value)
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

export default R_list;
