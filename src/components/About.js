import "./About.scss";
import React from "react";
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

const pstyle = {
	fontSize: "1.2rem",
	lineHeight: "2.0rem",
	userSelect: "none",
};

const IMAGE_BASE =
	"https://raw.githubusercontent.com/thesittu/thesittu.github.io/master/imgs/works/";

class About extends React.Component {
	render() {
		if (!this.props.data) {
			return <h3>Loading...</h3>;
		}
		const main = IMAGE_BASE + this.props.data.about_main_photo;
		const text = "My name is Ayushi Agrawal";
		return (
			<div className="aboutContainer">
				<Grid centered padded>
					<Grid.Row centered>
						<Grid.Column width={6}>
							<img />
						</Grid.Column>
						<Grid.Column width={7}>
							<h1 className="aboutHead">About</h1>
							<p className="aboutText">
								Reprehenderit reprehenderit proident officia ut
								culpa ex sit. Laborum ea enim excepteur occaecat
								fugiat magna pariatur sunt pariatur aliqua ut.
								Ex pariatur Lorem est occaecat commodo mollit
								anim deserunt veniam velit commodo Lorem magna
								laborum. Amet nisi anim anim tempor ut veniam
								elit. Veniam dolore eiusmod consequat qui sint
								Lorem fugiat. Qui proident amet cillum deserunt
								adipisicing elit amet enim culpa esse elit.
								Occaecat ad reprehenderit eiusmod duis officia
								ea qui amet aliquip. Magna id minim commodo quis
								in et sunt minim est officia pariatur esse
								commodo. Qui commodo enim tempor voluptate irure
								magna cupidatat consectetur pariatur quis
								exercitation ea consequat elit. Pariatur est
								quis ipsum sunt nulla aute sunt nulla
								exercitation cupidatat. Eiusmod nostrud
								consequat nulla magna sit. Commodo aute et sit
								veniam dolor eu culpa officia nisi ex. Tempor
								nisi veniam quis nisi voluptate duis. Enim
								ullamco amet velit culpa consectetur cillum
								proident. Id id in laborum eu veniam consectetur
								labore cillum proident cupidatat nostrud
								occaecat aliquip. Eu aute culpa dolor pariatur
								aliquip excepteur in labore quis aliquip.
								Consectetur est incididunt deserunt Lorem amet
								deserunt. Fugiat ipsum duis consequat sit do
								duis proident enim est consequat do ullamco
								esse. Incididunt deserunt ipsum sunt incididunt
								elit nisi nisi eiusmod adipisicing proident anim
								velit do pariatur. Anim est reprehenderit non
								sunt eiusmod laborum elit exercitation ad
								ullamco irure pariatur nisi ullamco. Sint duis
								et est elit dolor aliquip velit laborum ullamco
								labore irure exercitation consequat.
							</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default About;
