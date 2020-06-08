import "./Showcase.scss";
import React, { createRef } from "react";
import ImageCard from "./ImageCard";
import { Menu, Sticky } from "semantic-ui-react";
import withSizes from "react-sizes";

import Gallery from "react-photo-gallery";
import { photos } from "../api/photos";

import CImage from "./CImage";

class Showcase extends React.Component {
	state = { activeItem: "home" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	imageRenderr = ({ index, left, top, key, photo }) => {
		console.log("Rendering Next");
		return (
			<CImage
				key={key}
				margin={"5px"}
				index={index}
				photo={photo}
				left={left}
				top={top}
			/>
		);
	};

	render() {
		if (!this.props.data) {
			return <h2>Loading...</h2>;
		}
		const creations = this.props.data.creations;
		console.log("Creations");
		console.log(creations);

		// const isMobile = window.innerWidth < 480;
		// const showItems = isMobile ? 1 : 3;

		const { activeItem } = this.state;
		return (
			<div className="showcase">
				{/* <Sticky
					context={this.contextRef}
					offset={80}
					className="workMenu"
				>
					<Menu vertical size="medium">
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
				</Sticky> */}
				<div className="ilContainer">
					<Gallery
						className="showcase"
						photos={photos}
						direction={"column"}
						renderImage={this.imageRenderr}
						// columns={showItems}
						columns={this.props.isMobile ? 1 : 3}
					/>
				</div>
			</div>
		);
	}
}

const mapSizesToProps = ({ width }) => ({
	isMobile: width < 480,
});

export default withSizes(mapSizesToProps)(Showcase);
