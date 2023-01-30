import React, {Fragment, Component} from "react";
import {
	Typography,
	Paper,
	Container,
	Grid,
	TextField,
	Button,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Box,
} from "@material-ui/core";
import "./new_event.css";

class R_profile extends Component {
	state = {};

	render() {
		return (
			<Fragment>
				<div className="container">
					<div className="header"></div>
					<Paper elevation={5} className="mainContainer" color="primary.main">
						<Typography variant="h4" className="form-title">
							Representative Profile
						</Typography>
						<Container maxWidth="md" className="newEventContainer">
							<Grid container direction="column" justify="center">
								<FormLabel component="legend">
									Representaive Profile Type
								</FormLabel>
								<RadioGroup row aria-label="Profile" name="r_profile">
									<FormControlLabel
										value="Assembly Member"
										control={<Radio />}
										label="Assembly"
									/>
									<FormControlLabel
										value="male"
										control={<Radio />}
										label="State Senator"
									/>
									<FormControlLabel
										value="other"
										control={<Radio />}
										label="Representative in Congress"
									/>
								</RadioGroup>
							</Grid>
							<Grid container direction="column" justify="center" spacing={5}>
								<Grid
									container
									justify="center"
									alignItems="center"
									spacing={3}
									item>
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
											onChange={(value) => this.changeHandlerFName(value)}
										/>
									</Grid>
								</Grid>
								<Grid
									container
									justify="ceter"
									alignItems="center"
									spacing={3}
									item>
									<Grid item xs>
										<TextField
											required
											id="outlined-full-width"
											label="Email"
											variant="outlined"
											fullWidth
											onChange={(value) => this.changeHandlerFName(value)}
										/>
									</Grid>

									<Grid item xs>
										<TextField
											required
											id="outlined-full-width"
											label="Phone Number"
											variant="outlined"
											fullWidth
											onChange={(value) => this.changeHandlerFName(value)}
										/>
									</Grid>
								</Grid>
								<Grid
									container
									justify="ceter"
									alignItems="center"
									spacing={3}
									item>
									<Grid item xs>
										<Button variant="contained" component="label">
											Upload Image
											<input type="file" hidden />
										</Button>
									</Grid>

									<Grid item xs>
										<TextField
											required
											id="outlined-full-width"
											label="Zip Code"
											variant="outlined"
											fullWidth
											onChange={(value) => this.changeHandlerFName(value)}
										/>
									</Grid>
								</Grid>
								<Grid
									container
									justify="ceter"
									alignItems="center"
									spacing={3}
									item>
									<Grid item xs>
										<TextField
											required
											id="outlined-full-width"
											label="Website"
											variant="outlined"
											fullWidth
											onChange={(value) => this.changeHandlerFName(value)}
										/>
									</Grid>
								</Grid>
								<Grid
									container
									justify="ceter"
									alignItems="center"
									spacing={3}
									item>
									<Grid item xs>
										<TextField
											required
											id="outlined-full-width"
											label="Organizations Address"
											variant="outlined"
											fullWidth
											onChange={(value) => this.changeHandlerFName(value)}
										/>
									</Grid>
								</Grid>
								<Grid
									container
									justify="ceter"
									alignItems="center"
									spacing={3}
									item>
									<Grid item xs>
										<TextField
											required
											id="outlined-full-width"
											label="Term Start Date"
											variant="outlined"
											fullWidth
											onChange={(value) => this.changeHandlerFName(value)}
										/>
									</Grid>

									<Grid item xs>
										<TextField
											required
											id="outlined-full-width"
											label="Term End Date"
											variant="outlined"
											fullWidth
											onChange={(value) => this.changeHandlerFName(value)}
										/>
									</Grid>
								</Grid>
							</Grid>
						</Container>
						<Box my={4}>
							<Button
								variant="contained"
								size="large"
								color="primary"
								fullWidth>
								Save Profile
							</Button>
						</Box>
					</Paper>
				</div>
			</Fragment>
		);
	}
}

export default R_profile;
