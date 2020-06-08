import "./Intro.scss";
import React from "react";
import { Popup } from "semantic-ui-react";
import { withSizes } from "react-sizes";

import intro_img from "../assets/imgs/ayushi_intro.png";

class Intro extends React.Component {
	render() {
		return (
			<div className="introW">
				<div className="introTextW">
					<div className="introText">
						HI I'M {this.props.isMobile ? <br></br> : null}AYUSHI
						AGRAWAL<br></br>GRAPHICS DESIGNER
					</div>
				</div>
				<div className="introImgW">
					<img src={intro_img} />
				</div>
			</div>
		);
	}

	rrender() {
		return (
			<div className="intro">
				<div className="home">
					<div className="imgMain">
						<img id="illutstration" src={intro_img} />
						<img id="hand" src="/images/hand.png" />
					</div>
					<div className="outShape">
						<div className="inShape"></div>
					</div>

					<div className="ayushiName">
						HI, I'M <span className="inv">AYUSHI</span>
						<span> AGRAWAL</span>
						<br></br>
						<span>
							GRAPHICS
							{/* <span className="inv">DESIGNER</span> */}
							<span> </span>
							{/* <span className="zteal">D</span> */}
							<Popup
								trigger={<span className="zteal">D</span>}
								position="bottom center"
								size="large"
							>
								<Popup.Header>Logo Design</Popup.Header>
								<Popup.Content>
									We design <b>beautiful</b> logos
								</Popup.Content>
							</Popup>
							<span className="zpurple">E</span>
							<span className="zblue">S</span>
							<span className="zteal">I</span>
							<span className="zgreen">G</span>
							<span className="zpurple">N</span>
							<span className="zred">E</span>
							<span className="zblue">R</span>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ width }) => ({
	isMobile: width < 480,
});
export default withSizes(mapStateToProps)(Intro);
