import BreadCrumb from "components/common/Breadcrumb";
import PortfolioList from "./components/PortfolioList";
function PortfolioTwoColumn() {
	return (
		<>
			<BreadCrumb title="Câu chuyện từ dự án" />
			{/* <GridBlog /> */}
			<PortfolioList />
		</>
	);
}

export default PortfolioTwoColumn;
