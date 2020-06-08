import "./App.scss";
import React, { Fragment } from "react";
import {
	Link,
	DirectLink,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";

import Header from "./Header";
import Intro from "./Intro";
import MyWork from "./MyWork";
import Footer from "./Footer";
import Skills from "./Skills";

import Github from "../api/Github";
import About from "./About";

import scrollToComponent from "react-scroll-to-component";

class App extends React.Component {
	state = {
		data: null,
	};

	componentDidMount() {
		Events.scrollEvent.register("begin", function () {
			console.log("begin", arguments);
		});

		Events.scrollEvent.register("end", function () {
			console.log("end", arguments);
		});
		Github.get("")
			.then((res) => {
				console.log("Got the data");
				console.log(res.data);
				this.setState({ data: res.data });
			})
			.catch((err) => {
				console.log("Error while getting data");
				console.log(err);
			});
	}
	componentWillUnmount() {
		Events.scrollEvent.remove("begin");
		Events.scrollEvent.remove("end");
	}

	justScroll = (ref, offset = 0) => {
		scrollToComponent(ref, {
			offset: offset,
			align: "top",
			duration: 500,
		});
	};

	render() {
		return (
			<Fragment>
				<Header
					open={(item) => {
						console.log("Going To");
						console.log(item);
						switch (item) {
							case "about":
								this.justScroll(this.about, 50);
								break;
							case "contact":
								this.justScroll(this.footer);
								break;
							case "creations":
								this.justScroll(this.work, 80);
								break;
							case "skills":
								this.justScroll(this.skills, 50);
								break;
							case "home":
							default:
								this.justScroll(this.intro);
						}
					}}
				/>
				{/* <About data={this.state.data} /> */}
				<Intro
					ref={(section) => {
						this.intro = section;
					}}
				/>
				<Skills
					name="skills"
					data={this.state.data}
					ref={(section) => {
						this.skills = section;
					}}
				/>
				<MyWork
					data={this.state.data}
					ref={(section) => {
						this.work = section;
					}}
				/>
				<About
					data={this.state.data}
					ref={(section) => {
						this.about = section;
					}}
				/>
				<Footer
					ref={(section) => {
						this.footer = section;
					}}
				/>
			</Fragment>
		);
	}
}

export default App;

// https://www.npmjs.com/package/react-carousel-vertical
