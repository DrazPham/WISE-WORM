import BreadCrumbStory from "./components/BreadCrumbStory";
import PortfolioList from "./components/PortfolioList";

function PortfolioTwoColumn() {
	return (
		<>
			<BreadCrumbStory title="Câu chuyện từ dự án" />
			{/* <GridBlog /> */}
			<PortfolioList />
		</>
	);
}

export default PortfolioTwoColumn;
