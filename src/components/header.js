import React, {Component} from "react";
import {AppBar, Toolbar, Typography, Container} from "@material-ui/core";

class Header extends Component {
	render() {
		return (
			<AppBar position="static">
				<Container fixed>
					<Toolbar variant="dense">
						<Typography variant="h6" color="inherit">
							NYSPHA
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
		);
	}
}

export default Header;
