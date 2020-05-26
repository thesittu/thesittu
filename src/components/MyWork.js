import "./MyWork.scss";
import React from "react";

import Showcase from "./Showcase";
import { Icon } from "semantic-ui-react";

class MyWork extends React.Component {
	render() {
		return (
			<div className="mywork">
				<h1 className="workHeading">
					<Icon name="idea" color="yellow" /> My Creations
				</h1>
				<Showcase data={this.props.data} />
			</div>
		);
	}
}

export default MyWork;
