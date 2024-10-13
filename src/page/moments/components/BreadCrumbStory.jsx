import BreadCrumb from "components/common/Breadcrumb";
import { Link } from "react-router-dom";
import Form from "./Form";


function BreadCrumbStory({ title }) {
	return (
		<div className="aximo-breadcrumb">
			<div className="container">
				<h1 className="post__title">{title}</h1>
				<nav className="breadcrumbs">
					<ul>
						<li>
							<Link to="/">Trang chủ</Link>
						</li>
						<li aria-current="page"> {title}</li>
					</ul>
				</nav>
                <Form></Form>
			</div>
		</div>
	);
}

export default BreadCrumbStory;
