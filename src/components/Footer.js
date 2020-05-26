import React, { Fragment } from "react";
import {
	Grid,
	Button,
	Divider,
	Header,
	List,
	Icon,
	Segment,
} from "semantic-ui-react";

class Footer extends React.Component {
	social = [
		{
			icon: "facebook f",
			link: "#",
			color: "blue",
		},
		{
			icon: "instagram",
			link: "#",
			color: "pink",
		},
		{
			icon: "quora",
			link: "#",
			color: "red",
		},
		{
			icon: "twitter",
			link: "#",
			color: "violet",
		},
		{
			icon: "mail",
			link: "#",
			color: "red",
		},
	];
	render() {
		return (
			<Fragment>
				{/* <div
					style={{
						height: "80px",
						backgroundColor: "rgb(100,65,165)",
						background:
							"linear-gradient(180deg, rgba(100,65,165,1) 0%, rgba(255,255,255,1) 100%)",
					}}
				/> */}
				<div
					style={{
						paddingTop: "100px",
						backgroundColor: "rgb(100,65,165)",
						background:
							"linear-gradient(180deg, rgba(100,65,165,1) 0%, rgba(142,103,212,1) 37%, rgba(255,255,255,1) 100%)",
					}}
				>
					<Grid centered padded>
						<Grid.Row centered>
							<Grid.Column width={12}>
								<p
									style={{
										fontSize: "1.5rem",
										lineHeight: "2.5rem",
										textAlign: "center",
									}}
								>
									After nearly two decades working for top
									design firms in the industry, I now focus
									all of my time on helping clients of my own.
									Whether you’re looking to redesign your
									website or just need help with user
									experience; need printed materials like
									business cards, brochures, or posters; are
									undertaking a logo or identity rework; even
									if you’re just working on a Powerpoint
									presentation—I’m here to help.
								</p>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row centered>
							<Segment centered basic>
								{this.social.map((item) => {
									return (
										<a href={item.link} target="_blank">
											<Icon
												circular
												link
												size="big"
												color={item.color}
												name={item.icon}
											/>
										</a>
									);
								})}
							</Segment>
						</Grid.Row>
					</Grid>
				</div>
				<div
					style={{
						width: "100%",
						padding: "20px",
						marginTop: "20px",
						backgroundColor: "black",
						color: "white",
						textAlign: "center",
					}}
				>
					Copyright © 2020 Ayushi Agrawal. All rights reserved.
				</div>
			</Fragment>
		);
	}
}

export default Footer;
