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
										marginBottom: "20px"
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
												<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
													<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
												</svg>
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
									<p>Trang</p>
								</div>
								<ul>
									<li>
										<Link to="/about-us">Giới thiệu</Link>
									</li>
									<li>
										<Link to="/single-portfolio">Dạy học</Link>
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
									<p>Liên hệ</p>
								</div>
								<div className="aximo-contact-info2">
									<ul>
										<li>
											<a href="tel: +09135742169">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
													<path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
												</svg>
												0913574216
											</a>
										</li>
										<li>
											<a href="tel: +0976250807">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
													<path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
												</svg>
												0976250807
											</a>
										</li>
										<li>
											<a href="mailto:example@gmail.com">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
													<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
												</svg>
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
