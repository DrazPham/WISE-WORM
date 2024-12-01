import CountUp from "react-countup";
function TestimonialsCard() {
	return (
		<>
			<div className="row" style={{marginTop:"20px",gap:"20px"}}>
				<div className="col-md-3">
					<div className="aximo-counter-wrap4" style={{height:"100%"}}>
						<div className="aximo-counter-data4">
							<h2>
								<span className="aximo-counter">
									<CountUp end={10} duration={3} enableScrollSpy />
								</span>
								+
							</h2>
							<p>Tỉnh, thành phố</p>
						</div>
					</div>
				</div>
				<div className="col-md-3 order-md-2">
					<div className="aximo-counter-wrap4" style={{height:"100%"}}>
						<div className="aximo-counter-data4">
							<h2>
								<span className="aximo-counter">
									<CountUp end={150} duration={3} enableScrollSpy />
								</span>
								+
							</h2>
							<p>Học viên</p>
						</div>
					</div>
				</div>
				<div className="col-md-3 order-md-2">
					<div className="aximo-counter-wrap4" style={{height:"100%"}}>
						<div className="aximo-counter-data4">
							<h2>
								<span className="aximo-counter">
									<CountUp end={1000} duration={3} enableScrollSpy />
								</span>
								+
							</h2>
							<p>Giờ dạy học</p>
						</div>
					</div>
				</div>
				<div className="col-md-3 order-md-2">
					<div className="aximo-counter-wrap4" style={{height:"100%"}}>
						<div className="aximo-counter-data4">
							<h2>
								<span className="aximo-counter">
									<CountUp end={35} duration={3} enableScrollSpy />
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
