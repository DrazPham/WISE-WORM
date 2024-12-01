import PortfolioCard from "./PortfolioCard";
import Form from "./Form";

function PortfolioList() {
	return (
		<div className="section aximo-project-page" style={{margin:"30px 0 100px"}}>
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
