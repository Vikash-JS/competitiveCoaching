import "../../App.css";
import thumbnail from "../../assets/images/video-thumbnail.jpg";

const CustomCards = ({ title }) => {
	return (
		<div className="custom-card">
			<p
				style={{ textAlign: "center", fontFamily: "cursive", letterSpacing: 1 }}
			>
				{title}
			</p>
		</div>
	);
};

const Cards = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-evenly",
				marginTop: 30,
				marginBottom: 30,
			}}
		>
			<CustomCards title="Previous Year Question Paper" />
			<CustomCards title="About CGPSC" />
			<CustomCards title="Free Study Material" />
			<CustomCards title="Daily News & Articles" />
			<CustomCards title="Latest Updates" />
			<CustomCards title="UPSC | MPPSC | SSC" />
		</div>
	);
};

const ThumbnailView = () => {
	return (
		<div>
			<div>
				<Cards />
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<img className="thumbnail" src={thumbnail} />
				<div
					style={{
						height: "5rem",
						width: "5rem",
						backgroundColor: "transparent",
						borderRadius: "2.5rem",
						borderWidth: 5,
						borderColor: "white",
						borderStyle: "solid",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						position: "relative",
						right: "26vw",
					}}
				>
					<div
						style={{
							borderLeft: "20px solid transparent",
							borderRight: "20px solid transparent",
							borderBottom: "40px solid white",
							transform: "rotate(90deg)",
							position: "relative",
							left: 5,
						}}
					/>
				</div>
			</div>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					marginTop: "2vh",
				}}
			>
				<div className="updates-container">
					<p style={{ fontWeight: "800" }}>Our Latest Updates</p>
					<p>Click to View</p>
				</div>
			</div>
		</div>
	);
};

export default ThumbnailView;
