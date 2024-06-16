import React from 'react'

const Modal = ({ post, showModal, setShowModal }) => {
    console.log(post)
    const handleClose = () => {
        setShowModal(!showModal)
    }

    return (
        <div className='modalContainer'>
            <div className='modal'>
                <div className='close' onClick={handleClose}>&times;</div>
                <div className='modalImage'>
                    <img src={post.thumbnail.large} alt="modalImage" className='modalImage' />
                    <div className='modalContent'>
                        <h4 style={{ margin: '1rem' }}>{post.title}</h4>
                        <p style={{ margin: '1rem', fontWeight: '300' }}>{post.content}</p>

                        <div className='modalAuthorDetails'>
                            <img className='authorAvatar' src={post.author?.avatar} alt={post.author.name} />
                            <p style={{ fontWeight: '300' }}>{post.author.name}</p>
                            <p style={{ fontWeight: '300' }}>{post.author.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
