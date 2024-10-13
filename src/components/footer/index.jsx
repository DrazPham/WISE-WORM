import FooterCopyright from "./FooterCopyright";
import logo from "assets/images/logo/logo.png";
import { Link } from "react-router-dom";
function Footer() {
	return (
		<footer className="aximo-footer-section4">
			<div className="container">
				<div className="aximo-footer-top4">
					<div className="row">
						<div className="col-xl-4 col-lg-12">
							<div className="aximo-footer-textarea light-one">
								<a href="#">
									{/* <img src={logo} style={{maxHeight:"100px"}}alt="Logo" /> */}
									<h2 style={{
										background: "linear-gradient(to right, #4f469c,#2c61d1)",
										backgroundClip: "text",
										color: "transparent",
									}}>WISE WORM</h2>
								</a>
								<p>
								Dự án dạy Tiếng Anh trực tuyến phi lợi nhuận, mang cơ hội tiếp cận Tiếng Anh đến trẻ em ở những vùng sâu, vùng xa, vùng gặp nhiều khó khăn
								</p>
								<div className="aximo-social-icon aximo-social-icon3">
									<ul>
										{/* <li>
											<a href="https://twitter.com/" target="_blank">
												<i className="icon-twitter"></i>
											</a>
										</li> */}
										<li>
											<a href="https://www.facebook.com/wiseworm" target="_blank">
												<i className="icon-facebook"></i>
											</a>
										</li>
										{/* <li>
											<a href="https://www.instagram.com/" target="_blank">
												<i className="icon-instagram"></i>
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/" target="_blank">
												<i className="icon-linkedin"></i>
											</a>
										</li> */}
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-4">
							<div className="aximo-footer-menu extar-margin light-one">
								<div className="aximo-footer-title light-one">
									<h3 style={{color:"#fff7ea"}}>Trang</h3>
								</div>
								<ul>
									<li>
										<Link to="/about-us">Giới thiệu</Link>
									</li>
									<li>
										<Link to="/moments">Câu chuyện từ dự án</Link>
									</li>
									<li>
										<Link to="/blog-grid">Bài viết</Link>
									</li>
									<li>
										<Link to="/contact-us">Liên hệ</Link>
									</li>
								</ul>
							</div>
						</div>
						{/* <div className="col-xl-2 col-md-4">
							<div className="aximo-footer-menu light-one">
								<div className="aximo-footer-title light-one">
									<p>Utility pages</p>
								</div>
								<ul>
									<li>
										<Link to="/about">About us</Link>
									</li>
									<li>
										<Link to="/service">Our services</Link>
									</li>
									<li>
										<Link to="/portfolio-one">Portfolio</Link>
									</li>
									<li>
										<Link to="/blog">Blogs</Link>
									</li>
									<li>
										<Link to="/">Premium member</Link>
									</li>
								</ul>
							</div>
						</div> */}
						<div className="col-xl-4 col-md-4">
							<div className="aximo-footer-menu light-one m-0">
								<div className="aximo-footer-title light-one">
									<h3 style={{color:"#fff7ea"}}>Liên hệ</h3>
								</div>
								<div className="aximo-contact-info2">
									<ul>
										<li>
											<a href="tel: +09135742169">
												<i className="icon-phone"></i>
												0913574216
											</a>
										</li>
										<li>
											<a href="tel: +0976250807">
												<i className="icon-phone"></i>
												0976250807
											</a>
										</li>
										<li>
											<a href="mailto:example@gmail.com">
												<i className="icon-message"></i>
												hello@wiseworm.org
											</a>
										</li>
										{/* <li>
											<a href="">
												<i className="icon-map"></i>
												Viet Nam
											</a>
										</li> */}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="aximo-footer-bottom four">
					<FooterCopyright />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
