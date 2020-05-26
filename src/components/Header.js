import React, { Fragment } from "react";
import { Menu, Divider } from "semantic-ui-react";

class Header extends React.Component {
	state = {};

	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name });
		this.props.open(name);
	};

	render() {
		const { activeItem } = this.state;

		return (
			// <Menu fixed="top" size="massive" borderless color="purple" inverted>
			<Fragment>
				<div
					style={{
						width: "100%",
						height: "100px",
						position: "fixed",
						zIndex: 7,
						background: "rgb(255,255,255)",
						background:
							"linear-gradient(180deg, rgba(255,255,255,1) 57%, rgba(255,255,255,0) 100%)",
					}}
				/>
				<Menu
					fixed="top"
					size="massive"
					borderless
					color="purple"
					secondary
				>
					<Menu.Item header as="h1">
						Ayushi Agrawal
					</Menu.Item>
					<Menu.Menu position="right">
						<Menu.Item
							name="home"
							active={activeItem === "home"}
							onClick={this.handleItemClick}
						>
							Home
						</Menu.Item>
						<Menu.Item
							name="about"
							active={activeItem === "about"}
							onClick={this.handleItemClick}
						>
							About
						</Menu.Item>
						<Menu.Item
							name="skills"
							active={activeItem === "skills"}
							onClick={this.handleItemClick}
						>
							Skills
						</Menu.Item>
						<Menu.Item
							name="creations"
							active={activeItem === "creations"}
							onClick={this.handleItemClick}
						>
							Creations
						</Menu.Item>
						<Menu.Item
							name="contact"
							active={activeItem === "contact"}
							onClick={this.handleItemClick}
						>
							Contact Me
						</Menu.Item>
						<Menu.Item>
							<Divider />
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</Fragment>
		);
	}
}

export default Header;
