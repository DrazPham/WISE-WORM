import { LazyLoadImage } from "react-lazy-load-image-component";
import PostMeta from "./PostMeta";
import PostTags from "./PostTags";
import ReactMarkdown from 'react-markdown';
import { useContext } from "react";
import { BlogContext } from "../../SingleBlog";

function BlogDetails() {
	const blogContent = useContext(BlogContext);

	return (
		<>
			<div className="post-thumbnail">
				<LazyLoadImage
					src={blogContent.image}
					width={850}
					height={500}
					alt={blogContent.title}
					effect="blur"
					placeholderSrc={blogContent.imagePreview}
				/>
			</div>
			<div className="single-post-content-wrap">
				<PostMeta category={blogContent.meta.author} date={blogContent.meta.date} />
				<div className="entry-content">
				<h3>{blogContent.title}</h3>
					<ReactMarkdown breaks>{blogContent.content}</ReactMarkdown>
					<PostTags tags={blogContent.tags}/>
				</div>
			</div>
		</>
	);
}

export default BlogDetails;
