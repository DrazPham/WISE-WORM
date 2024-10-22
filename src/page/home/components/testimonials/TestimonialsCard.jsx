import CountUp from "react-countup";
import Thumb1Img from "assets/images/v1/t_thumb1.png";
import Thumb2Img from "assets/images/v1/t_thumb2.png";
import QuoteImg from "assets/images/v4/quote.png";
function TestimonialsCard() {
	return (
		<>
			<div className="row" style={{marginTop:"20px"}}>
				<div className="col-lg-6">
					<div className="aximo-counter-wrap4">
						<div className="aximo-counter-data4">
							<h2>
								<span className="aximo-counter">
									<CountUp end={10} duration={3} redraw={true} enableScrollSpy />
								</span>
								+
							</h2>
							<p>Tỉnh,thành phố</p>
						</div>
					</div>
				</div>
				<div className="col-lg-6 order-lg-2">
					<div className="aximo-counter-wrap4">
						<div className="aximo-counter-data4">
							<h2>
								<span className="aximo-counter">
									<CountUp end={100} duration={3} redraw={true} enableScrollSpy />
								</span>
								+
							</h2>
							<p>Học viên</p>
						</div>
					</div>
				</div>
				<div className="col-lg-6 order-lg-2">
					<div className="aximo-counter-wrap4">
						<div className="aximo-counter-data4">
							<h2>
								<span className="aximo-counter">
									<CountUp end={500} duration={3} redraw={true} enableScrollSpy />
								</span>
								+
							</h2>
							<p>Giờ dạy học</p>
						</div>
					</div>
				</div>
				<div className="col-lg-6 order-lg-2">
					<div className="aximo-counter-wrap4">
						<div className="aximo-counter-data4">
							<h2>
								<span className="aximo-counter">
									<CountUp end={24} duration={3} redraw={true} enableScrollSpy />
								</span>
								+
							</h2>
							<p>Giảng viên, trợ giảng</p>
						</div>
					</div>
				</div>
			</div>

				{/* <div className="row">
				<div className="col-lg-8">
					<div className="aximo-testimonial-wrap aximo-testimonial-wrap3">
						<div className="aximo-testimonial-quote">
							<img src={QuoteImg} alt="QuoteImg" />
						</div>
						<div className="aximo-testimonial-data">
							<p>
								"Working with Mthemeus has been a game-changer for our company. Their tailored solutions
								& hands-on approach have not only boosted our efficiency but have also opened up new
								avenues for growth. They are an invaluable partner in our journey to success."
							</p>
						</div>
						<div className="aximo-testimonial-author">
							<div className="aximo-testimonial-author-thumb">
								<img src={Thumb2Img} alt="Thumb2Img" />
							</div>
							<div className="aximo-testimonial-author-data">
								<span>Andrew Smith </span>
								<p>Businessman</p>
							</div>
						</div>
					</div>
				</div>
				</div> */}
		</>
	);
}

export default TestimonialsCard;
