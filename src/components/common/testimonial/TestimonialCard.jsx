function TestimonialCard({ testimonial: { source, title, description, author, designation, img } }) {
	return (
		<div className="col-lg-6">
			<div className="aximo-testimonial-wrap">
				<div className="aximo-testimonial-data">
				<iframe width="560" height="315" src={source} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<div className="aximo-testimonial-author">
					<div className="aximo-testimonial-author-thumb">
						<img src={img} alt={title} />
					</div>
					<div className="aximo-testimonial-author-data">
						<p>
							{author} <span>{designation}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
