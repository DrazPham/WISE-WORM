import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query,orderBy } from 'firebase/firestore';
// import PostTags from "./PostTags";
import { db } from 'fbase/Firebase';
import ReactMarkdown from 'react-markdown';


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

Modal.setAppElement('#root'); // to avoid screen reader accessibility issues
function newLineFix(text) {
	return text.replace(/\\n/g, '  \n');  // Markdown line break
}

function PortfolioCard() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedStory, setSelectedStory] = useState(null);

	const openModal = (story) => {
        setSelectedStory(story);
        setModalIsOpen(true);
	}

	const closeModal = () => {
        setModalIsOpen(false);
        setSelectedStory(null);
    };

	const [storyContent, setStoryContent] = useState([]);

	useEffect(() => {
		const fetchStoryContent = async () => {
			const q = query(collection(db, 'stories'), orderBy('postDate', 'desc'));
			const querySnapshot = await getDocs(q);
			const contentArray = querySnapshot.docs.map(doc => doc.data());
			setStoryContent(contentArray);		
		};

		fetchStoryContent();
	}, []);

	if (storyContent.length === 0) {
		return <div>Loading...</div>;
	}

	let storyInfo = storyContent[0];
	console.log(storyContent);
	return (
		<div className="row">
            {storyContent.map((story, i) => (
                <div className="col-lg-4" key={i}>
                    <div 
                        onClick={() => openModal(story)} 
                        style={{ cursor: 'pointer', border: "1px solid black", padding: "20px", margin: "10px 0", borderRadius: "10px" }} 
                        className="aximo-project-data"
                    >
                        <h3 style={{color: "black", borderBottom: "1px solid black" }}>
                            {story.title}
                        </h3>
                        <p style={{
                            color: "black",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: "5",
                            lineClamp: "5",
                            WebkitBoxOrient: "vertical"
                        }}>
                            {story.description}
                        </p>
                    </div>
                </div>
            ))}

            {selectedStory && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Story Modal"
                    style={{
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            width: "70vw",
                            height: "70vh",
                            // borderRadius:"20px",
                        },
                        overlay:{
                            backgroundColor:"rgba(0,0,0,0.4)"
                        }
                    }}
                >
                    <div style={{ padding: "20px", borderRadius: "10px" }}>
                        {selectedStory.description.map((e, i) => (
                            <div key={i} style={{ margin: "10px 0" }}>
                                <ReactMarkdown style={{ fontSize: "120%" }}>{e}</ReactMarkdown>
                            </div>
                        ))}
                        <h2 style={{ borderTop: "1px solid black", padding:"10px 0"}}>{selectedStory.author}</h2>
                        <h4>{timestampToDateString(selectedStory.postDate.seconds).slice(0,-15)}</h4>
                    </div>
                </Modal>
            )}
        </div>
	);
}

export default PortfolioCard
