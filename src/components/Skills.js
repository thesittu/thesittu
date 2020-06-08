import "./Skills.scss";
import React from "react";
import { withSizes } from "react-sizes";
import { Segment, Progress, Grid, Header, Icon } from "semantic-ui-react";

class Skills extends React.Component {
	render() {
		if (!this.props.data) {
			return <h2>Loading..</h2>;
		}

		console.log("Data in Skills");
		console.log(this.props.data.skills);

		const rskills = this.props.data.skills;
		const skills = [];
		for (let i = 0; i < rskills.length; i += 2) {
			skills.push([rskills[i], rskills[i + 1]]);
		}
		console.log(skills);

		const isMobile = window.innerWidth < 480;
		const showItems = isMobile ? 1 : 2;

		return (
			<div className="skillsContainer">
				<div className="skills">
					<h1 className="skillHeading">
						<Icon name="bolt" color="olive" />
						My Skills
					</h1>
					<Grid columns={this.props.isMobile ? 1 : 2}>
						{skills.map(([s1, s2]) => {
							return (
								<Grid.Row centered>
									<Grid.Column>
										<h3>{s1.name}</h3>
										<Progress
											percent={s1.percent}
											color={s1.color}
										/>
									</Grid.Column>
									{s2 ? (
										<Grid.Column>
											<h3>{s2.name}</h3>
											<Progress
												percent={s2.percent}
												color={s2.color}
											/>
										</Grid.Column>
									) : (
										<Grid.Column></Grid.Column>
									)}
								</Grid.Row>
							);
						})}
					</Grid>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ width }) => ({
	isMobile: width < 480,
});

export default withSizes(mapStateToProps)(Skills);
