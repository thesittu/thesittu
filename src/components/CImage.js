import "./CImage.scss";
import React from "react";
import { Label, Reveal, Icon, Image, Modal, Button } from "semantic-ui-react";

class CImage extends React.Component {
	render() {
		const { margin, photo, top, left, index, key } = this.props;
		const cont = {
			backgroundColor: "#eee",
			cursor: "pointer",
			overflow: "hidden",
			position: "relative",
		};
		const direction = "column";
		if (direction === "column") {
			cont.position = "absolute";
			cont.left = left;
			cont.top = top;
		}

		return (
			<div
				style={{
					margin,
					height: photo.height,
					width: photo.width,
					...cont,
				}}
				className="cimg"
			>
				<img {...photo} />
				<div className="middle">
					<Icon name="eye" size="big" inverted />
					<h2 style={{ color: "white" }}>Title</h2>
				</div>
			</div>
		);
	}
}

export default CImage;
