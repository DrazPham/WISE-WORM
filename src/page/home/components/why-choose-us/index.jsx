import Shape2Img from "assets/images/v4/shape2.png";
import Thumb1Img from "assets/images/home/frameImage.png";
function WhyChooseUs() {
	return (
		<div className="section">
			<div className="container align-middle">
				<div className="row">
					<div className="col-lg-5">
						<div className="aximo-content-thumb border-radius ">
							<img src={Thumb1Img}  style = {{}}alt="Thumb1Img" />
							<div className="aximo-thumb-shape4">
								<img src={Shape2Img} alt="Shape2Img" />
							</div>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="aximo-default-content arimo-font m-left-gap">
							<h3>Dự án dạy Tiếng Anh cho trẻ em khó khăn</h3>
							{/* <p>
							Dự án dạy Tiếng Anh trực tuyến phi lợi nhuận, mang cơ hội tiếp cận Tiếng Anh đến trẻ em ở những vùng sâu, vùng xa, vùng gặp nhiều khó khăn
							</p>*/}
							<br></br>
							<p>Wise Worm là dự án phi lợi nhuận được thành lập bởi một nhóm học sinh THPT trên địa bàn Thành phố Hà Nội vào tháng 8 năm 2023. Mục đích chính của dự án là giúp đỡ và giảng dạy Tiếng Anh cho những trẻ em vùng sâu, vùng xa, nơi ít có điều kiện tiếp cận với ngôn ngữ đang ngày càng trở nên quan trọng này. Wise Worm đã thành công trong việc đem đến cho hơn 104 em học sinh khó khăn đến từ các huyện miền núi xa xôi, hẻo lánh những giờ học thú vị và kiến thức bổ ích về bộ môn Tiếng Anh. Tất cả các bài học đều được biên soạn cẩn thận, tỉ mỉ từ chính những tình nguyện viên là các bạn học sinh vẫn còn đang ở độ tuổi cấp 3.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyChooseUs;
