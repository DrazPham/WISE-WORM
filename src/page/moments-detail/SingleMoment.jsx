import BreadCrumb from "components/common/Breadcrumb";
import PortfolioDetails from "./components/PortfolioDetails";
import Testimonial from "src/components/common/testimonial/index";

function SinglePortfolio() {
	return (
		<>
			<BreadCrumb title="Dạy học" />
			<PortfolioDetails />
			<Testimonial />
		</>
	);
}

export default SinglePortfolio;
