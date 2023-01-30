import React, { Fragment, Component } from "react";
import {
	Typography,
	Container,
	Grid,
	TextField,
	Button,
    TextareaAutosize,
	Paper,
} from "@material-ui/core";
import "./email.css";
import personImage from "../assets/Person.png"
import { Link } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	typography: {
	  fontFamily: [
		'Roboto',
		'sans-serif',
	  ].join(','),
},});

class Email extends Component{

    state = {
		email:{
			toAddress : "",
			fromAddress : "",
			subject : "",
			emailBody : "",
		},
		thumbnail: {},
        name: "",
		district:"",
		event_id: "",
		head:"",
		messageDetails:"",
		redirect: false,
	};
	

    componentDidMount() {
		console.log("hello from email js");
        console.log(this.state);
        if (this.props.location.state) {
            var representative = this.props.location.state.representative;
            var thumbnail = this.props.location.state.thumbnail;
            var name = this.props.location.state.name;
			var district = this.props.location.state.district;
			var head = this.props.location.state.head;
			console.log(head);
			var messageDetails = this.props.location.state.messageDetails;
			console.log(messageDetails);
			this.setState({
				email:{
					subject : head,
					emailBody : messageDetails,
				},
				representative: representative,
                thumbnail: thumbnail,
                name: name,
				district:district,
				redirect: false,
			});
        } else {
			this.setState({
				redirect: true,
			});
		}
    }

    render() {
		return (

			<Fragment>

				<div className="container">
					<div className="header">
						<Typography variant="h4" align="left" className="form-ttle">
							Send an Email
						</Typography>
					</div>
				</div>
                <Paper elevation={5} className="mainContainer" color="primary.main">
                    <Container maxWidth="md" className="emailContainer">
					<ThemeProvider theme={theme}>
                    <Grid container direction="column" justify="center" spacing={5}>
                        <Grid container spacing={3} item>
                            <Grid item sm>
                                <img src={this.state.thumbnail ? this.state.thumbnail : personImage} className ="imageWidth" alt={this.state.name}/>
								<Typography variant="h6" align="center">{this.state.name}</Typography>
								<Typography variant="h6" align="center">District {this.state.district}</Typography>
                            </Grid>    
                        </Grid>
                        <Grid container spacing={3} item>
								<Grid item sm>
									<TextField
										id="outlined-full-width"
										label="To:"
                                        defaultValue="scldeveloper1@gmail.com"
										value={this.state.email.toAddress?this.state.email.toAddress:"scldeveloper1@gmail.com"}
                                        variant="outlined"
										fullWidth
                                        style={{ background :"White"}}
									/>
								</Grid>
						</Grid>
                        <Grid container spacing={3} item>
								<Grid item sm>
									<TextField
										id="outlined-full-width"
										label="From:"
										defaultValue="scldeveloper1@gmail.com"
										value={this.state.email.fromAddress?this.state.email.fromAddress:this.props.location.state.email.fromAddress}
										variant="outlined"
										fullWidth
										style={{ background :"White"}}
									/>
								</Grid>
						</Grid>
                        <Grid container spacing={3} item>
								<Grid item sm>
									<TextField
										id="outlined-full-width"
										label="CC:"
										variant="outlined"
										fullWidth
										style={{ background :"White"}}
									/>
								</Grid>
						</Grid>
                        <Grid container spacing={3} item>
								<Grid item sm>
									<TextField
										id="outlined-full-width"
										label="Subject:"
										value={this.state.email.subject}
										variant="outlined"
										fullWidth
										style={{ background :"White"}}
									/>
								</Grid>
						</Grid>
                        <Grid container spacing={3} item>
								<Grid item xs={12}>
									<TextareaAutosize
                                        id="outlined-full-width"
										maxrows={100}
										defaultValue={this.state.email.emailBody}
										className = "messageBody"
									/>
								</Grid>
						</Grid>
                        <Grid item>
								<Link
									to={{
										pathname: "/sendEmail",
										state: {
                                            email:{
												toAddress : "scldeveloper1@gmail.com",
												fromAddress : "scldeveloper1@gmail.com",
												subject : this.state.email.subject,
												emailBody : this.state.email.emailBody,
											},
                                        },
									}}>
									<Button
										variant="contained"
										size="large"
										color="primary"
										fullWidth>
										Send
									</Button>
								</Link>
						</Grid>
                    </Grid>
					
					</ThemeProvider>
                    </Container>
                </Paper>
			</Fragment>
		);
	}
}

export default Email;