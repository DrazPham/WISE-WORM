import Call2Img from "assets/images/icon/call2.svg";
import EmailImg from "assets/images/icon/email.svg";
import MapImg from "assets/images/icon/map.svg";
import Star2Img from "assets/images/v1/star2.png";
function ContactInfo() {
	return (
		<div className="section" style={{margin:"30px 0 100px"}}>
			<div className="container">
				<div className="aximo-contact-info-title">
					<h2>
						THÔNG TIN LIÊN HỆ
					</h2>
				</div>
				<div className="row" style={{"--bs-gutter-y": "1.5rem"}}>
					<div className="col-xl-4 col-md-6">
						<a href="">
							<div className="aximo-contact-info-box">
								<div className="aximo-contact-info-icon">
									<img src={Call2Img} alt="Call Img" />
								</div>
								<div className="aximo-contact-info-data">
									<span>Điện thoại</span>
									<p>09123456789</p>
									<p>09123456789</p>
								</div>
							</div>
						</a>
					</div>
					<div className="col-xl-4 col-md-6">
						<a href="">
							<div className="aximo-contact-info-box">
								<div className="aximo-contact-info-icon">
									<img src={EmailImg} alt="Email" />
								</div>
								<div className="aximo-contact-info-data">
									<span>Email</span>
									<p>hello@wiseworm.org</p>
								</div>
							</div>
						</a>
					</div>
					<div className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<img src={MapImg} alt="Map" />
							</div>
							<div className="aximo-contact-info-data">
								<span>Facebook</span>
								<p>Wise Worm</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
