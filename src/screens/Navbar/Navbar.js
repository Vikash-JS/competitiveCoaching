import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/logo_red.png";
import "../../App.css";

const CustomNavbar = () => {
	return (
		<Navbar expand="lg" collapseOnSelect className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">
					<img
						src={logo}
						width="150"
						height="50"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>
				<Nav className="me-auto nav-top">
					<Nav.Link className="nav-home" href="#home">
						Home
					</Nav.Link>
					<Nav.Link className="nav-support" href="#features">
						Support
					</Nav.Link>
					<Nav.Link className="nav-plan" href="#pricing">
						Plan
					</Nav.Link>
				</Nav>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className=" nav-bottom">
						<Nav.Link className="nav-teachers" href="#home">
							Teachers
						</Nav.Link>
						<Nav.Link href="#link">My Desk</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default CustomNavbar;
