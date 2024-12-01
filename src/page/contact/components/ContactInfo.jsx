import Call2Img from "assets/images/icon/call2.svg";
import EmailImg from "assets/images/icon/email.svg";
import MapImg from "assets/images/icon/map.svg";
import Star2Img from "assets/images/v1/star2.png";
function ContactInfo() {
	return (
		<div className="section" style={{ margin: "30px 0 100px" }}>
			<div className="container">
				<div className="aximo-contact-info-title">
					<h2>
						THÔNG TIN LIÊN HỆ
					</h2>
				</div>
				<div className="row" style={{ "--bs-gutter-y": "1.5rem" }}>
					<div className="col-xl-4 col-md-6">
						<a href="">
							<div className="aximo-contact-info-box">
								<div className="aximo-contact-info-icon" style={{color:"white"}}>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
										<path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
									</svg>
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
								<div className="aximo-contact-info-icon" style={{color:"white"}}>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
										<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
									</svg>
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
							<div className="aximo-contact-info-icon" style={{color:"white"}}>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
									<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
								</svg>
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
