import { Link } from "react-router-dom";

function HeroContent() {
	return (
		<div className="aximo-hero-content4">
			<h1 className="text-light pb-2">
				Dự án dạy Tiếng Anh cho trẻ em khó khăn
			</h1>
			<p>
				Dự án dạy Tiếng Anh trực tuyến phi lợi nhuận, mang cơ hội tiếp cận Tiếng Anh đến trẻ em ở những vùng sâu, vùng xa, vùng gặp nhiều khó khăn
			</p>
			<div className="aximo-hero-btn-wrap">
				<Link className="aximo-default-btn pill blue-btn" to="/about-us">
					Tìm hiểu
				</Link>
				<Link className="aximo-default-btn aximo-default-btn-outline pill outline-white" to="/portfolio-one">
					<span className="aximo-label-up">View all projects</span>
					<span className="aximo-label-up">View all projects</span>
				</Link>
			</div>
		</div>
	);
}

export default HeroContent;
