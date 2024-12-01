import BreadCrumb from "components/common/Breadcrumb";
import PortfolioList from "./components/PortfolioList";
function PortfolioTwoColumn() {
	return (
		<>
			<BreadCrumb title="CÂU CHUYỆN TỪ DỰ ÁN" />
			{/* <GridBlog /> */}
			<PortfolioList />
		</>
	);
}

export default PortfolioTwoColumn;
