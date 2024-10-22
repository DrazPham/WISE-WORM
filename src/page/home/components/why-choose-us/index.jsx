import Shape2Img from "assets/images/v4/shape2.png";
import Thumb1Img from "assets/images/home/frameImage.png";
function WhyChooseUs() {
	return (
		<div className="section">
			<div className="container">
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
							<span className="aximo-subtitle">WELCOME TO WISEWORM</span>
							<h3>Dự án dạy Tiếng Anh cho trẻ em khó khăn</h3>
							{/* <p>
							Dự án dạy Tiếng Anh trực tuyến phi lợi nhuận, mang cơ hội tiếp cận Tiếng Anh đến trẻ em ở những vùng sâu, vùng xa, vùng gặp nhiều khó khăn
							</p>
							<p>
							Học tiếng Anh là cả một hành trình kỳ diệu và ý nghĩa, dù là với các bạn học sinh đến từ miền núi. Chính vì vậy, Wise Worm không chỉ đem đến kiến thức mà còn tạo ra môi trường học tập gần gũi.
							</p> */}
							<p>Wise Worm là dự án phi lợi nhuận được thành lập bởi một nhóm học sinh THPT trên địa bàn Thành phố Hà Nội vào tháng 8 năm 2023. Mục đích chính của dự án là giúp đỡ và giảng dạy Tiếng Anh cho những trẻ em vùng sâu, vùng xa, nơi ít có điều kiện tiếp cận với ngôn ngữ đang ngày càng trở nên quan trọng này. Wise Worm đã thành công trong việc đem đến cho hơn 104 em học sinh khó khăn đến từ các huyện miền núi xa xôi, hẻo lánh những giờ học thú vị và kiến thức bổ ích về bộ môn Tiếng Anh. Tất cả các bài học đều được biên soạn cẩn thận, tỉ mỉ từ chính những tình nguyện viên là các bạn học sinh vẫn còn đang ở độ tuổi cấp 3.<br></br> <br />
							Đến với mỗi buổi học, chúng ta không chỉ có những giảng viên năng động nhiệt huyết mà còn cả sự hào hứng, sôi nổi từ các bạn học sinh. Học sinh có thể nâng cao trình độ tiếng Anh qua các bài giảng, chơi những trò chơi luyện tập, ôn lại bài cũ để ghi nhớ kiến thức lâu hơn. Bên cạnh đó, các bạn học sinh còn có cơ hội thể hiện những tài năng cá nhân, rèn luyện kĩ năng mềm có ích cho cuộc sống như diễn thuyết, hoạt động nhóm. </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyChooseUs;
