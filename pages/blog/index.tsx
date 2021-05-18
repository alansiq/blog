import { contentSample } from '../api/hello';
import React from 'react';
import { useState, useEffect } from 'react'
 
interface fieldsData {
    body: string,
    description: string,
    publishDate: string,
    title: ""

}

async function getPosts() {
    const posts = await contentSample();
    console.log(posts);
    return posts;
}



export default function Blog() {
    const [posts, setPosts] = useState([]);
    

    const getAllPosts = async () => {
        const acquiredPosts = await contentSample();
        console.log(acquiredPosts);
        setPosts(acquiredPosts);
    }


    useEffect(() => {
        getAllPosts();
    }, [])


    return (
        <div>
        <h1>Blog posts below</h1>
        {posts.map(post => (

        <div key={post.title}>
            <h1>{post.title}</h1> <br></br>
            {post.body}
        </div>
        
        ))}


        <style jsx>{`

            div {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                min-height: 100vh;
            }

            
        `}</style>

        </div>

    )
}