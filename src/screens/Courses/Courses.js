import "../../App.css";
import books from "../../assets/images/books.png";
import audio from "../../assets/images/audio_books.png";
import community from "../../assets/images/community.png";
import previousYear from "../../assets/images/p_year.png";
import series from "../../assets/images/series.png";
import video from "../../assets/images/v_class.png";
import teacher from "../../assets/images/teacher.png";
import pdfNotes from "../../assets/images/pdf_notes.png";

const Spheres = ({ logoName }) => {
	return (
		<div className="sphere">
			<img height="50" src={logoName} />
		</div>
	);
};

const Course = ({ name, logoName }) => {
	return (
		<div className="container-sphere">
			<Spheres logoName={logoName} />
			<h6 style={{ marginTop: 4 }}>{name}</h6>
		</div>
	);
};

const Courses = () => {
	return (
		<div>
			<h2 style={{ marginBottom: 30, marginTop: 20, marginLeft: 20 }}>
				Explore Our Courses
			</h2>
			<div
				style={{
					flexDirection: "row",
					justifyContent: "space-evenly",
					display: "flex",
					marginBottom: 50,
				}}
			>
				<Course name="Hybrid" logoName={community} />
				<Course name="Online Class" logoName={video} />
				<Course name="Offline Class" logoName={previousYear} />
				<Course name="PDF Notes" logoName={pdfNotes} />
				<Course name="E-books" logoName={books} />
				<Course name="Test Series" logoName={series} />
				<Course name="Magazines" logoName={audio} />
				<Course name="Community" logoName={teacher} />
			</div>
		</div>
	);
};

export default Courses;
