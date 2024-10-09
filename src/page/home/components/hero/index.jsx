import HeroBg from "assets/images/cover/doraemonCover.jpg";
import HeroContent from "./HeroContent";

function Hero() {
	return (
		<div className="aximo-hero-section4" style={{ backgroundImage: `url(${HeroBg})`,  height:"80vh"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						{/* <HeroContent/> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
