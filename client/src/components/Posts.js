import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SinglePost from './SinglePost'

const Posts = () => {
    const API = 'https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts'

    const [postsData, setPostsData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(API)
            setPostsData(data)
        }

        fetchData()
    }, [])


    return (
        <div className='posts'>
            {postsData.map((post) => {
                return <SinglePost post={post} key={post.id} />
            })}
        </div>
    )
}

export default Posts
