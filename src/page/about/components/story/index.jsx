import Star2Img from "assets/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section " style={{ marginTop: "100px" }}>
			<div className="container">
				<div className="aximo-section-title center title-description">
					<h2>
						<span className="aximo-title-animation">
							Giới thiệu chung
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="star" />
							</span>
						</span>
					</h2>
					<p style={{textAlign:"left"}}>
						Wise Worm là dự án phi lợi nhuận thành lập vào mùa hè năm 2023 với sứ mệnh dạy học miễn phí Tiếng Anh cho trẻ em ở vùng cao và các vùng quê xa xôi, nơi mà điều kiện tiếp cận giáo dục ngoại ngữ còn nhiều khó khăn. Các lớp học được tổ chức với mong muốn giúp các em nhỏ cải thiện khả năng Tiếng Anh, một ngôn ngữ quan trọng trong thời đại hội nhập.
					</p><p style={{textAlign:"left"}}>
						Trải qua năm học đầu tiên, Wise Worm đã cung cấp hơn 500 giờ dạy, giúp đỡ hơn 100 em học sinh vùng sâu, vùng xa nâng cao trình độ tiếng Anh. Các học sinh đã có những tiến bộ rõ rệt trong điểm số và khả năng giao tiếp bằng tiếng Anh, giúp các em mở rộng cơ hội trong tương lai.
					</p><p style={{textAlign:"left"}}>
						Không chỉ tập trung vào việc giảng dạy kiến thức Tiếng Anh, Wise Worm còn mang đến nhiều hoạt động bổ ích như cuộc thi “Teach a Friend”, nơi các em học sinh vùng cao có cơ hội chia sẻ kiến thức, học hỏi lẫn nhau. Mỗi lớp học tại Wise Worm luôn tràn đầy năng lượng từ giảng viên và sự hào hứng của học sinh, giúp quá trình học tập trở nên thú vị hơn.
					</p><p style={{textAlign:"left"}}>
						Trong giai đoạn 2024 – 2025, Wise Worm dự định mở rộng không chỉ về số lượng học sinh mà còn về đối tượng giảng dạy, bao gồm cả người trung niên và người cao tuổi mong muốn học tiếng Anh. Dự án cũng sẽ triển khai các lớp học về lập trình và quản lý tài chính, nhằm trang bị cho các bạn học sinh vùng quê những kiến thức thiết thực cho tương lai.
					</p><p style={{textAlign:"left"}}>
						Wise Worm cam kết tiếp tục đồng hành cùng trẻ em vùng cao và mọi lứa tuổi với các chương trình học tập bổ ích, miễn phí, giúp đỡ người học vượt qua khó khăn trong việc tiếp cận giáo dục.
					</p>
				</div>

				{/* <div className="row">
					<StoryPhotos />
				</div>

				<div className="aximo-story-content">
					<StoryContent />
				</div> */}
			</div>
		</div>
	);
}

export default Story;
