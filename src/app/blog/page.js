'use client';
import {useEffect, useState} from "react";
import BlogCard from "@/app/components/BlogCard";
import Head from "next/head";

export default function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/data.json');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="py-12 md:py-16 lg:py-20">
            <div className="container grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8
                lg:grid-cols-4 lg:gap-10 center">
                    {posts.map(post => (
                        <div key={post.id} className="hidden">
                            <Head>
                                <meta name="title" content={post.title} />
                                <meta name="description" content={post.description} />
                                <meta name="author" content={post.author} />
                            </Head>
                        </div>
                    ))}

                {posts.map(post => (
                    <BlogCard key={post.id} post={post}/>
                ))}
            </div>
        </section>
    )
        ;
}

