import "./App.css";
import Courses from "./screens/Courses/Courses";
import CustomNavbar from "./screens/Navbar/Navbar";
import Videos from "./screens/Videos/Videos";
import Footer from "./screens/Footer/Footers";
import CustomCarousel from "./screens/Carousels/Carousels";
import ThumbnailView from "./screens/Cards/Cards";
import Alumni from "./screens/Alumni/Alumni";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Pins from "./screens/Pins/Pins";

const particlesInit = async (main) => {
	console.log(main);
	await loadFull(main);
};

const particlesLoaded = (container) => {
	console.log(container);
};

const App = () => {
	return (
		<div>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				style={{
					position: "absolute",
					zIndex: 0,
					width: "100%",
					height: "100%",
				}}
				options={{
					background: {
						color: "transparent",
					},
					fpsLimit: 60,
					particles: {
						move: {
							bounce: false,
							direction: "none",
							enable: true,
							outModes: "out",
							random: false,
							speed: 2,
							straight: false,
						},

						shape: {
							type: "circle",
						},
						size: {
							random: {
								enable: true,
								minimumValue: 0.5,
							},
							value: 1.4,
						},
						color: {
							value: "#f1f1f1",
						},
						number: {
							density: {
								enable: true,
								area: 1080,
							},
							limit: 0,
							value: 800,
						},
						opacity: {
							animation: {
								enable: true,
								minimumValue: 0.5,
								speed: 1.6,
								sync: false,
							},
							random: {
								enable: true,
								minimumValue: 0.1,
							},
							value: 1,
						},
						interactivity: {
							detectsOn: "canvas",
							events: {
								resize: true,
							},
						},
					},
				}}
			/>

			<CustomNavbar />
			<CustomCarousel />
			<ThumbnailView />
			<Courses />
			<Videos />
			<Alumni />
			<Footer />
			{/* <Pins /> */}
		</div>
	);
};

export default App;
