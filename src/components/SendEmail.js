import React,{ Fragment, Component} from "react";
import {
	Typography,
} from "@material-ui/core";
import axios from "axios";

class SendEmail extends Component{
    state = {
		email:{
			toAddress : "",
			fromAddress : "",
			subject : "",
			emailBody : "",
		},
		redirect: false,
	};
	
    componentDidMount() {

        if (this.props.location.state) {
			var email = this.props.location.state.email;
			
			this.setState({
				email:email,
				redirect: false,
			});
			axios
                .post(
                    "https://xzxkh212s1.execute-api.us-east-2.amazonaws.com/dev/email", email
                )
                .then((response,body) => {
                    console.log(response);
					if(response.data.statusCode===201){
						var answer = window.confirm("Email Sent Successfully!!!");
						if(answer){
							this.props.history.push("/");
						}
					}
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
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
							Representatives
						</Typography>
					</div>
				</div>

                </Fragment>
		);
	}
}

export default SendEmail;