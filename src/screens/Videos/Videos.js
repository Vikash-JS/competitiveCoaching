import study from "../../assets/images/study.jpg";
import study1 from "../../assets/images/study1.jpg";
import study2 from "../../assets/images/study2.jpg";
import study3 from "../../assets/images/study3.jpg";
import study4 from "../../assets/images/study4.jpg";
import study5 from "../../assets/images/study5.jpg";
import "../../App.css";

const VideoContainer = ({ imageName }) => {
	return (
		<div className="videos-integrated">
			<img className="integrated-videos-img" src={imageName} />
			<h6 style={{ marginTop: 30, lineHeight: 1.2, letterSpacing: 1.2 }}>
				CGPSC Yearly offline Test Series
			</h6>
		</div>
	);
};

const Videos = () => {
	return (
		<div>
			<div>
				<div className="videos-container">
					<h4 className="cgpsc-hover">CGPSC integrated</h4>
					<p>View All </p>
				</div>
				<div className="video-img">
					<VideoContainer imageName={study} />
					<VideoContainer imageName={study} />
					<VideoContainer imageName={study} />
				</div>
			</div>

			<div>
				<div className="videos-container">
					<h4 className="cgpsc-hover">CGPSC Mains</h4>
					<p>View All</p>
				</div>
				<div className="video-img">
					<VideoContainer imageName={study1} />
					<VideoContainer imageName={study1} />
					<VideoContainer imageName={study1} />
				</div>
			</div>

			<div>
				<div className="videos-container">
					<h4 className="cgpsc-hover">CGPSC Prelims</h4>
					<p>View All</p>
				</div>
				<div className="video-img">
					<VideoContainer imageName={study2} />
					<VideoContainer imageName={study2} />
					<VideoContainer imageName={study2} />
				</div>
			</div>

			<div>
				<div className="videos-container">
					<h4 className="cgpsc-hover">Vyapam & One Day Exam</h4>
					<p>View All</p>
				</div>
				<div className="video-img">
					<VideoContainer imageName={study5} />
					<VideoContainer imageName={study5} />
					<VideoContainer imageName={study5} />
				</div>
			</div>

			<div>
				<div className="videos-container">
					<h4 className="cgpsc-hover">Test Series</h4>
					<p>View All</p>
				</div>
				<div className="video-img">
					<VideoContainer imageName={study4} />
					<VideoContainer imageName={study4} />
					<VideoContainer imageName={study4} />
				</div>
			</div>

			<div>
				<div className="videos-container">
					<h4 className="cgpsc-hover">Recommended For You</h4>
					<p>View All</p>
				</div>
				<div className="video-img">
					<VideoContainer imageName={study3} />
					<VideoContainer imageName={study3} />
					<VideoContainer imageName={study3} />
				</div>
			</div>
		</div>
	);
};

export default Videos;
