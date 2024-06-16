import React, { useState } from 'react'
import Modal from './Modal'


const SinglePost = ({ post }) => {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    return (
        <>
            <div className='singlePost' onClick={handleClick}>
                <div className='postImage'>
                    <img src={post.thumbnail.small} alt='postImage' />
                    <div className='learnMore'>Learn More</div>
                </div>
                <div className='postContent'>
                    <div className='circles'>🔵🟡</div>
                    <p className='title'>{post.title}</p>
                    <p>{post.content}</p>
                    <div className='publicationDetails'>
                        <p className='author'>{post.author.name}</p>
                        <p className='date'>{post.date}</p>
                    </div>
                </div>

            </div>
            {showModal && <Modal post={post} showModal={showModal} setShowModal={setShowModal} />}
        </>
    )
}

export default SinglePost
