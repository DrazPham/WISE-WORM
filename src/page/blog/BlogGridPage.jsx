import GridBlog from "./components/grid-blog";
import BreadCrumb from "components/common/Breadcrumb";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, query,orderBy } from 'firebase/firestore';
import { db } from 'fbase/Firebase';

const BlogGridContext = createContext([]);

const timestampToDate = (timestamp) => {
	if (timestamp && timestamp.seconds !== undefined) {
		const date = new Date(timestamp.seconds * 1000);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	}
	return null;
};

function BlogGridPage() {

	const [gridBlogData, setGridBlogData] = useState([]);
	
	useEffect(() => {
		const fetchBlogData = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, 'blog'));
				const blogs = querySnapshot.docs.map(doc => {
					const data = doc.data();
					return {
						id: doc.id,
						...data,
						meta: {
							...data.meta,
							date: timestampToDate(data.meta.date)
						}
					};
				});
				const sortedBlogs = blogs.sort((a, b) => b.id.localeCompare(a.id));

				setGridBlogData(sortedBlogs);
			} catch (error) {
				console.error('Error fetching blog posts:', error);
			}
		};
		fetchBlogData();
	}, []);

	return (
		<BlogGridContext.Provider value={gridBlogData}>
			<BreadCrumb title="Bài viết" />
			<GridBlog />
		</BlogGridContext.Provider>
	);
}

export default BlogGridPage;
export { BlogGridContext }
