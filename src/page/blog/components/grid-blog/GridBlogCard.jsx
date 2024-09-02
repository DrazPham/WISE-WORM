import { Link } from "react-router-dom";
import ArrayRightImg from "assets/images/icon/arrow-right.svg";

function GridBlogCard({ blog: { id, imagePreview, title, meta } }) {
	return (
		<div className="col-xl-4">
			<div className="single-post-item">
				<div className="post-thumbnail">
					<img src={imagePreview} alt={title} />
				</div>
				<div className="post-content">
					<div className="post-meta">
						<div className="post-category">
							<a href="#">{meta.category}</a>
						</div>
						<div className="post-date">{meta.date}</div>
					</div>
					<Link to={`/blog/${id}`}>
						<h3 className="entry-title">{title}</h3>
					</Link>
					<Link className="post-read-more" to={`/blog/${id}`}>
						Read more <img src={ArrayRightImg} alt="Arrow" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default GridBlogCard;
