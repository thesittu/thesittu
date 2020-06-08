import "./About.scss";
import React from "react";
import { withSizes } from "react-sizes";
import {
	Segment,
	Grid,
	Header,
	Divider,
	Form,
	Button,
	List,
	Image,
	Card,
} from "semantic-ui-react";

import about_img from "../assets/imgs/ayushi_about.png";

const pstyle = {
	fontSize: "1.2rem",
	lineHeight: "2.0rem",
	userSelect: "none",
};

class About extends React.Component {
	render() {
		if (!this.props.data) {
			return <h3>Loading...</h3>;
		}

		const text = "My name is Ayushi Agrawal";

		const isMobile = window.innerWidth < 480;
		const imgCols = isMobile ? 14 : 6;
		const ctCols = isMobile ? 14 : 7;

		return (
			<div className="aboutContainer">
				<Grid centered padded>
					<Grid.Row centered>
						<Grid.Column width={this.props.isMobile ? 14 : 6}>
							<img className="aboutImg" src={about_img} />
						</Grid.Column>
						<Grid.Column width={this.props.isMobile ? 14 : 7}>
							<h1 className="aboutHead">About</h1>
							<p className="aboutText">
								Hello, my lovely viewers, I’m Ayushi Agrawal
								From India I am a creative and multi-talented
								graphic designer I believe in today's visual
								communication style which is a combination of
								vector illustration, images, audio, video, typo
								and playing right color choice. I am a quick
								learner, a positive attitude and I enjoy my
								work. My Devotion for creativity and way of
								today's visual communication which is important
								and needed in today's time. This all things
								extracted me in this creative field. By these
								graphics, we could reach our customers with an
								innovative idea that builds the best and trusted
								brand image in their mind as well as build
								emotional relationships with customers to buy a
								product or services we also want. I try to
								understand the client's mindset, then act
								according to them otherwise work according to my
								creativity or trend. I believe in both smart and
								hard work. I am passionate about my successful
								career. I deeply believe in design not just as a
								service provider but as a partner in the overall
								business and development of the final product.
								Have a Project we can help you with
							</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

const maptStateToProps = ({ width }) => ({
	isMobile: width < 480,
});

export default withSizes(maptStateToProps)(About);
