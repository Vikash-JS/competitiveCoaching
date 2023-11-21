import "../../App.css";
import { FaChevronRight } from "react-icons/fa";

const CustomCards = ({ nameTitle, subTitle }) => {
	return (
		<div className="alumni-container">
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-evenly",
					alignItems: "center",
				}}
			>
				<div className="alumni-img" />
				<h5>{nameTitle}</h5>
			</div>
			<div className="alumni-subtitle" style={{ marginTop: "1.4ch" }}>
				<p>{subTitle}</p>
			</div>
		</div>
	);
};

const Alumni = () => {
	return (
		<div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-evenly",
					marginTop: "4vh",
				}}
			>
				<h3>What Our Students Say</h3>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<p>View All</p>
					<FaChevronRight style={{ marginTop: -14, marginLeft: 5 }} />
				</div>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
				}}
			>
				<CustomCards
					nameTitle="Jhulendra Mehra SASO"
					subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				<CustomCards
					nameTitle="Atul Dewangan ESI"
					subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				<CustomCards
					nameTitle="Viswas Sahu SAP"
					subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
			</div>
		</div>
	);
};

export default Alumni;
