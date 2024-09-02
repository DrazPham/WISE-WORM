import SingleBlog from "./components/single-blog";
import BreadCrumb from "components/common/Breadcrumb";
import { useParams } from "react-router-dom";
import { createContext } from 'react';
import { useState, useEffect } from "react";
import { doc, getDoc } from 'firebase/firestore';  
import { db } from 'fbase/Firebase';  

const BlogContext = createContext({});

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

function SingleBlogPage() {
	const { id } = useParams();

	const [blog, setBlog] = useState(null);  

	useEffect(() => {  
		const fetchBlog = async () => {  
		const docRef = doc(db, 'blog', id);  
		const docSnap = await getDoc(docRef);  

		if (docSnap.exists()) {  
			const blogData = docSnap.data();
			if (blogData.meta.date) {  
				blogData.meta.date = timestampToDate(blogData.meta.date);  
			}
			blogData.content = blogData.content?.replace(/\n/gi, "  \n") ?? "";
			setBlog(blogData);  
		} else {  
			console.log('No such document!');  
		}  
		};  

		fetchBlog();  
	}, [id]);  

	console.log(blog)

	if (!blog) {  
		return <div>Loading...</div>;  
	}

	return (
		<BlogContext.Provider value={blog}>
			<BreadCrumb title="Blog Details"/>
			<SingleBlog/>
		</BlogContext.Provider>
	);
}

export default SingleBlogPage;
export { BlogContext };