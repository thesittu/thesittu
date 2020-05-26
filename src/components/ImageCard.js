import "./ImageCard.scss";
import React from "react";
import { Modal, Button, Image, Header, Icon, Label } from "semantic-ui-react";

const IMAGE_BASE =
	"https://raw.githubusercontent.com/thesittu/thesittu.github.io/master/imgs/works/";

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { span: 0, modalOpen: false };
		this.imgRef = React.createRef();
	}

	componentDidMount() {
		this.imgRef.current.addEventListener("load", this.setSpan);
	}

	setSpan = () => {
		let height = this.imgRef.current.clientHeight;
		let numSpan = Math.ceil(height / 10 + 1) + 2;
		console.log("Span: " + numSpan);
		this.setState({ span: numSpan });
	};

	render() {
		const { title, thumb, path } = this.props.image;
		return (
			<div
				className="image-card"
				style={{ gridRowEnd: `span ${this.state.span}` }}
			>
				<a
					onClick={() => this.setState({ modalOpen: true })}
					target="_blank"
				>
					<img
						ref={this.imgRef}
						alt={title}
						src={IMAGE_BASE + thumb}
						onError={() => {
							console.log("Error in IMG: " + title);
						}}
					/>
					<div className="middle">
						<Icon name="eye" size="big" inverted />
						<h2 style={{ color: "white" }}>{title}</h2>
						<Modal
							open={this.state.modalOpen}
							onClose={() => this.setState({ modalOpen: false })}
						>
							<Modal.Header>
								{title}
								<Button
									positive
									content="Download"
									icon="download"
									labelPosition="left"
									floated="right"
									href={IMAGE_BASE + path}
									download={title}
									target="_blank"
								/>
							</Modal.Header>
							<Modal.Content image>
								<Image src={IMAGE_BASE + path} centered />
							</Modal.Content>
						</Modal>
					</div>
				</a>
			</div>
		);
	}
}

export default ImageCard;
