import HeroBg from "assets/images/v4/hero-bg.png";
import HeroContent from "./HeroContent";

function Hero() {
	return (
		<div className="aximo-hero-section4" style={{ backgroundImage: `url(${HeroBg})` }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<HeroContent />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
