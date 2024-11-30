import Blogs from "./components/blogs";
import BrandLogo from "./components/brand-logo";
import Hero from "./components/hero";
import Instagrams from "./components/instagrams";
import MissionVision from "./components/mission-vission";
import NumberBox from "./components/number-box";
import Projects from "./components/projects";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import WhyChooseUs from "./components/why-choose-us";

function HomeFour() {
	return (
		<div className="aximo-all-section bg-light4" style={{margin: "20px 50px 100px", display:"flex",gap:"30px",flexDirection:"column"}}>
			<Hero />
			<WhyChooseUs />
			<BrandLogo />
			<Testimonials />
			<NumberBox />
			{/* <MissionVision /> */}
			{/* <Services /> */}
			{/* <Projects /> */}
			{/* <Instagrams /> */}
			{/* <Blogs /> */}
		</div>
	);
}

export default HomeFour;
