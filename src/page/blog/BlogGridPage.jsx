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

function timestampToDateString(seconds) {
	const date = new Date(seconds * 1000); // Convert seconds to milliseconds
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	});
}


function BlogGridPage() {

	const [gridBlogData, setGridBlogData] = useState([]);
	
	useEffect(() => {
		const fetchBlogData = async () => {
			try {
				// Create a query with orderBy on 'date'
				const q = query(collection(db, 'blog'), orderBy('meta.date', 'desc')); // or 'desc' for newest to oldest				
				const querySnapshot = await getDocs(q);				
				const blogs = querySnapshot.docs.map(doc => {
					const data = doc.data();
					return {
						id: doc.id,
						...data,
						meta: {
							category: data.category,
							date: timestampToDateString(data.meta.date.seconds).slice(0,-15)// Assuming Firestore timestamp
						}
					};
				});
	
				setGridBlogData(blogs);
			} 
			catch (error) {
				console.error('Error fetching blog posts:', error);
			}
		};
		fetchBlogData();
	}, []);

	return (
		<BlogGridContext.Provider value={gridBlogData}>
			<BreadCrumb title="BÀI VIẾT" />
			<GridBlog />
		</BlogGridContext.Provider>
	);
}

export default BlogGridPage;
export { BlogGridContext }
