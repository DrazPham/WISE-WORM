import Story from "./components/story";
import BreadCrumb from "components/common/Breadcrumb";
import Teams from "components/common/teams";
// Teams images
import thanh from "assets/images/core/thanh.jpg";
import kien from "assets/images/core/kien.jpg";
import HaPhuong from "assets/images/core/HaPhuong.jpg";
import ThanhHang from "assets/images/core/ThanhHang.jpg";
import TramAnh from "assets/images/core/TramAnh.jpg";
import ThanhHuyen from "assets/images/core/ThanhHuyen.jpg";
import ThienKim from "assets/images/core/ThienKim.jpeg";
import MinhChien from "assets/images/core/MinhChien.jpeg";
import AnhTu from "assets/images/core/AnhTu.jpeg";
import PhuongLinh from "assets/images/core/PhuongLinh.jpg";
import MinhUyen from "assets/images/core/MinhUyen.jpg";
import HaiAnh from "assets/images/core/HaiAnh.jpg";
import HanhDung from "assets/images/core/HanhDung.jpg";
import GiaBao from "assets/images/core/GiaBao.jpg";

const teamsDataPres = [
	{
		id: crypto.randomUUID(),
		name: "Hồ Hữu Kiên",
		designation: "Founder and National Co-President",
		img: kien,
	},
	{
		id: crypto.randomUUID(),
		name: "Lương Phạm Hải Thanh",
		designation: "Founder and National Co-President",
		img: thanh,
	},
	{
		id: crypto.randomUUID(),
		name: "Đặng Thanh Hằng",
		designation: "National President-elect",
		img: ThanhHang,
	},
	{
		id: crypto.randomUUID(),
		name: "Công Thu Hà Phương",
		designation: "National Vice President-elect",
		img: HaPhuong,
	},
]

const teamsDataBan = [
	{
		id: crypto.randomUUID(),
		name: "Nguyễn Trâm Anh",
		designation: "Trưởng ban Chuyên môn",
		img: TramAnh,
	},
	{
		id: crypto.randomUUID(),
		name: "Nguyễn Thị Thanh Huyền",
		designation: "Trưởng ban Chuyên môn",
		img: ThanhHuyen,
	},
	{
		id: crypto.randomUUID(),
		name: "Phan Thiên Kim",
		designation: "Trưởng ban Design",
		img: ThienKim,
	},
	{
		id: crypto.randomUUID(),
		name: "Nguyễn Minh Chiến",
		designation: "Trưởng ban Nhân sự",
		img: MinhChien,
	},
	{
		id: crypto.randomUUID(),
		name: "Phạm Anh Tú",
		designation: "Trưởng ban Nhân sự",
		img: AnhTu,
	},
	{
		id: crypto.randomUUID(),
		name: "Cao Phương Linh",
		designation: "Trưởng ban Tài Chính​",
		img: PhuongLinh,
	},
	{
		id: crypto.randomUUID(),
		name: "Hoàng Nguyễn Minh Uyên",
		designation: "Trưởng ban Tài Chính",
		img: MinhUyen,
	},
	{
		id: crypto.randomUUID(),
		name: "Nguyễn Hải Anh",
		designation: "Trưởng ban Truyền thông",
		img: HaiAnh,
	},
	{
		id: crypto.randomUUID(),
		name: "Nguyễn Hạnh Dung",
		designation: "Trưởng ban Truyền thông",
		img: HanhDung,
	},
	{
		id: crypto.randomUUID(),
		name: "Phạm Bùi Gia Bảo",
		designation: "Trưởng ban Phát triển Website",
		img: GiaBao,
	},
];

function AboutUs() {
	return (
		<>
			<BreadCrumb title="Giới thiệu" />
			{/* <About /> */}
			<Story />
			{/* <AutoSlider /> */}
			<Teams title={"Chủ tịch và Nhà sáng lập"} teams={teamsDataPres} />
			<Teams title={"Trưởng ban"} teams={teamsDataBan} />
		</>
	);
}

export default AboutUs;
