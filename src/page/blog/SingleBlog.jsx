import SingleBlog from "./components/single-blog";
import BreadCrumb from "components/common/Breadcrumb";
import { useParams } from "react-router-dom";
import { createContext } from 'react';
import { useState, useEffect } from "react";
import { doc, getDoc } from 'firebase/firestore';  
import { db } from 'fbase/Firebase';  
import ReactMarkdown from 'react-markdown';


const BlogContext = createContext({});

function timestampToDate(timestamp) {  
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

function newLineFix(text) {
    return text.replace(/\\n/g, '  \n');  // Markdown line break
}

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
                blogData.content = blogData.content.map((e) => {
                    if (e.text) {
                        e.text = newLineFix(e.text);
                    }
                    return e;
                });
                setBlog(blogData);
            } else {
                console.log('No such document!');
            }
        };

        fetchBlog();
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }


    return (
        <div style={{marginTop:"90px"}} className="container">
            <h2 style={{margin:"0 20px"}}>{blog.title}</h2>
            <img src={blog.image}  style={{aspectRatio:"16/9", borderRadius:"50px"}} />
            <div style={{margin:"10px 30px 0"}}>
                {blog.content.map((e, index) => (
                    <div key={index} style={{margin:"10px 0"}}>
                        {<h3>{e.headline}</h3>}
                        {e.image && <img src={e.image} style={{borderRadius:"20px"}} alt={`Content Image ${index}`} />}
                        {e.text && (
                            <ReactMarkdown>{e.text}</ReactMarkdown>
                        )}
                    </div>
                ))}
            </div>
        <h2>Categories:</h2>
        <ul style={{display:"flex",gap:"20px",margin:"10px 0"}}>
        {blog.tags.map((e, index) => (
            <li key={index} style={{padding:"10px 20px",backgroundColor:"#787c91",color:"white",borderRadius:"30px"}}> {e} </li>
        ))}
        </ul>
        </div>
    );
}

export default SingleBlogPage;
export { BlogContext };