import Single1Img from "assets/images/portfolio/p_single.png";
import Single2Img from "assets/images/portfolio/p_single2.png";
import Star2Img from "assets/images/v1/star2.png";
function PortfolioDetails() {
	return (
		<div style={{margin:"30px 0 0 "}}>
			<div className="container" >
				<div className="container" style={{borderBotton:"1px solid black", marginBottom:"20px"}}>
					<div className="aximo-project-single-thumb" style={{ aspectRatio: "16/9" }}>
						<iframe width="100%" height="100%" src="https://www.youtube.com/embed/VIjUM-g5ksQ?si=iyBevZyHwBBiYgBP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
					</div>
					<div className="aximo-default-content">
						<h2 style={{textAlign:"center"}}>WISE WORM - MỞ CỬA TRI THỨC CHO TRẺ</h2>
						<p>Wise Worm là dự án phi lợi nhuận tổ chức lớp học tiếng Anh trực tuyến dành cho các bé nhỏ vùng sâu xa trên toàn quốc. Mỗi buổi học kéo dài 1 giờ 30 phút qua các ứng dụng Google Meet và Zoom, vừa kết hợp lý thuyết sinh động và các trò chơi thú vị, qua đó giúp các bé học Tiếng Anh một cách tự nhiên và vui vẻ. Đội ngũ các bạn trẻ cấp 3 chuyên Anh giảng viên đều giàu chuyên môn về tiếng Anh, có nhiều giải thưởng học thuật, sở hữu sự nhiệt huyết với việc dạy học cũng như giúp đỡ các bé nhỏ vùng xâu xa, và quan trọng hơn hết là luôn tận tâm hướng dẫn các bé. Với phương pháp dạy và học có chuyên môn cao theo lộ trình sách Cambridge, lớp học không chỉ giúp các bé phát triển đồng đều 4 kỹ năng Tiếng Anh mà còn phát triển tư duy sáng tạo, kỹ năng mềm và sự tự tin.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PortfolioDetails;
