// [id]/page.js
'use client';

import {useEffect, useState} from 'react';
import {useParams} from 'next/navigation';
import BlogPostDetail from '@/app/components/BlogPostDetail';

export default function PostPage() {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchPost = async () => {
                try {
                    const response = await fetch('/data/data.json');
                    const data = await response.json();
                    const postData = data.find(post => post.id === parseInt(id));
                    setPost(postData);
                } catch (error) {
                    console.error('Error fetching data: ', error);
                }
            };

            fetchPost();
        }
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto py-12">
            <BlogPostDetail post={post}/>
        </div>
    );
}
