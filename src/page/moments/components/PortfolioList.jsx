import PortfolioCard from "./PortfolioCard";
import Form from "./Form";

function PortfolioList() {
	return (
		<div className="section aximo-project-page aximo-section-padding5">
			<div className="container">
				<div className="row">
					<PortfolioCard></PortfolioCard>
					<Form></Form>
				</div>
			</div>
		</div>
	);
}

export default PortfolioList;
