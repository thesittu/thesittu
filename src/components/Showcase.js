import "./Showcase.scss";
import React, { createRef } from "react";
import ImageCard from "./ImageCard";
import { Menu, Sticky, Ref } from "semantic-ui-react";

const IMAGE_BASE =
	"https://raw.githubusercontent.com/thesittu/thesittu.github.io/master/imgs/works/";

class Showcase extends React.Component {
	state = { activeItem: "home" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	contextRef = createRef();

	render() {
		if (!this.props.data) {
			return <h2>Loading...</h2>;
		}
		const creations = this.props.data.creations;
		console.log("Creations");
		console.log(creations);

		const images = creations.map((cc) => {
			console.log("URL: " + IMAGE_BASE + cc.thumb);
			return <ImageCard image={cc} />;
		});

		const { activeItem } = this.state;
		return (
			<div className="showcase">
				<Sticky
					context={this.contextRef}
					offset={80}
					className="workMenu"
				>
					<Menu vertical size="big">
						<Menu.Item
							name="home"
							active={activeItem === "home"}
							onClick={this.handleItemClick}
						/>
						<Menu.Item
							name="messages"
							active={activeItem === "messages"}
							onClick={this.handleItemClick}
						/>
						<Menu.Item
							name="friends"
							active={activeItem === "friends"}
							onClick={this.handleItemClick}
						/>
					</Menu>
				</Sticky>
				<div className="ilContainer">
					<Ref innerRef={this.contextRef}>
						<div className="image-list">{images}</div>
					</Ref>
				</div>
			</div>
		);
	}
}

export default Showcase;
