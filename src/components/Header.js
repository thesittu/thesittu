import React, { Fragment } from "react";
import {
	Menu,
	Divider,
	Container,
	Icon,
	Image,
	Sidebar,
	Responsive,
} from "semantic-ui-react";
import { withSizes } from "react-sizes";

class Header extends React.Component {
	state = { visible: false };

	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name });
		this.props.open(name);
	};

	getMenus = () => {
		let menus = [
			{ name: "home", dn: "Home" },
			{ name: "about", dn: "About" },
			{ name: "skills", dn: "Skills" },
			{ name: "creations", dn: "Creations" },
			{ name: "contact", dn: "Contact Me" },
		];
		return menus.map((menu) => {
			return (
				<Menu.Item
					name={menu.name}
					active={this.state.activeItem === menu.name}
					onClick={this.handleItemClick}
				>
					{menu.dn}
				</Menu.Item>
			);
		});
	};

	render() {
		const { activeItem } = this.state;

		return (
			<Sidebar.Pushable as={Fragment}>
				{/* <div
					style={{
						width: "100%",
						height: "100px",
						position: "fixed",
						zIndex: 7,
						background: "rgb(255,255,255)",
						background:
							"linear-gradient(180deg, rgba(255,255,255,1) 57%, rgba(255,255,255,0) 100%)",
					}}
				/> */}
				<Sidebar
					as={Menu}
					animation="overlay"
					icon="labeled"
					inverted
					onHide={() => this.setState({ visible: false })}
					vertical
					visible={this.state.visible}
					width="thin"
				>
					<Menu.Item header>Ayushi Agrawal</Menu.Item>
					{this.getMenus()}
				</Sidebar>
				<Sidebar.Pusher>
					<Menu
						fixed="top"
						size="massive"
						borderless
						color="purple"
						secondary
					>
						{this.props.isMobile ? (
							<Menu.Item
								onClick={() => this.setState({ visible: true })}
							>
								<Icon name="sidebar" />
							</Menu.Item>
						) : null}
						<Menu.Item header as="h1">
							Ayushi Agrawal
						</Menu.Item>
						{this.props.isMobile ? null : (
							<Menu.Menu position="right">
								{this.getMenus()}
								<Menu.Item>
									<Divider />
								</Menu.Item>
							</Menu.Menu>
						)}
					</Menu>
				</Sidebar.Pusher>
			</Sidebar.Pushable>
		);
	}
}

const mapStateToProps = ({ width }) => ({
	isMobile: width < 480,
});

export default withSizes(mapStateToProps)(Header);
