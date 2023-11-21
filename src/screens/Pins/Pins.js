import "../../App.css";
import { TiPinOutline } from "react-icons/ti";

const PinView = ({ subtitle }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				flexDirection: "row",
			}}
		>
			<p>{subtitle}</p>
			<TiPinOutline />
		</div>
	);
};

const Pins = () => {
	return (
		<div>
			<div>
				<input className="search-bar" />
			</div>
			<div>
				<PinView subtitle="CGPSC# Chhattisgarh Public Service Commision" />
			</div>
		</div>
	);
};

export default Pins;
