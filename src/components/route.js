import React, {Component} from "react";
import {Route, Switch} from "react-router";
import {HashRouter} from "react-router-dom";
import Form from "./form";
import Thanks from "./thanks_page";
import Send from "./send_message";
import Events from "./event_list";
import Create_event from "./new_event";
import Entries from "./entries";
import R_profile from "./representaive_profile";
import R_list from "./representative_list";
import Event_list from "./list_events";
import Home from "./home_page";
import Email from "./email";
import SendEmail from "./SendEmail";

class RouteJS extends Component {
	render() {
		return (
			<HashRouter>
				<div className="flex-left">
					<div className="content">
						<Switch>
							<Route exact path="/" component={Events} />
							<Route path="/form" component={Form} />
							<Route path="/send" component={Send} />
							<Route path="/thanks" component={Thanks} />
							<Route path="/email" component={Email} />
							<Route path="/sendEmail" component={SendEmail} />
							{/* <Route path="/t" component={Temp} /> */}
							<Route exact path="/dashboard" component={Home} />
							<Route exact path="/new_event" component={Create_event} />
							<Route exact path="/user_entries" component={Entries} />
							<Route exact path="/event_list" component={Event_list} />
							<Route exact path="/c" component={R_profile} />
							<Route exact path="/d" component={R_list} />
						</Switch>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default RouteJS;
