function PostMeta({ category, date }) {
	return (
		<div className="post-meta">
			<div className="post-category">
				<a href="">{category}</a>
			</div>
			<div className="post-date">{date}</div>
		</div>
	);
}
export default PostMeta;
