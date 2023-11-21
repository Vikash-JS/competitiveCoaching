import Carousel from "react-bootstrap/Carousel";
import bg from "../../assets/images/bg.jpg";
import bg1 from "../../assets/images/bg1.jpg";
import bg2 from "../../assets/images/bg2.jpg";
import "../../App.css";

const CustomCarousel = () => {
	return (
		<Carousel data-bs-theme="dark">
			<Carousel.Item>
				<img
					className="bg-carousel"
					src={bg}
					alt="First slide"
					style={{ opacity: 0.7 }}
				/>
				<Carousel.Caption>
					<h5 style={{ color: "white" }}>Why Competition Community</h5>
					<p style={{ color: "white" }}>
						Online Ed-Tech | Classroom Education | Dedicated Management
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="bg-carousel"
					src={bg1}
					alt="Second slide"
					style={{ opacity: 0.7 }}
				/>
				<Carousel.Caption>
					<h5 className="carousel-title"> Explore All of Our programs</h5>
					<p className="carousel-subtitle">
						Online Classes | Offline Classes | E-books | PDF Notes
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="bg-carousel"
					src={bg2}
					alt="Third slide"
					style={{ opacity: 0.7 }}
				/>
				<Carousel.Caption>
					<h5 className="carousel-title">
						Why Competition Community for CGPSC Preparation
					</h5>
					<p className="carousel-subtitle">
						CGPSC Mains | CSPSC Prelims | Vyapam | CGPSC integrated | Test
						Series
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default CustomCarousel;
