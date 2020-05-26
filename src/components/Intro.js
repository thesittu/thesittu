import "./Intro.scss";
import React from "react";
import { Popup } from "semantic-ui-react";

class Intro extends React.Component {
	render() {
		return (
			<div className="intro">
				<div className="home">
					<div className="imgMain">
						<img id="illutstration" src="/images/rest.png" />
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

export default Intro;
