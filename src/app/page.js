import Link from "next/link";

export default function Home() {
    return (
        <div>
            <section className="bg-gray-100 py-12 md:py-20 dark:bg-gray-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-3xl space-y-6 text-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Discover Our Captivating
                                Blog</h2>
                            <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
                                Dive into a world of engaging stories, insightful perspectives, and thought-provoking
                                content.
                            </p>
                        </div>
                        <Link
                            href="/blog"
                            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-800"
                            prefetch={false}
                        >
                            Explore the Blog
                        </Link>
                    </div>
                </div>
            </section>
            <p className='text-center text-lg ml-5 mr-10 text-gray-300 mt-5'>Welcome to our blog, a vibrant space where we explore a wide range of topics to inform, inspire, and engage our readers. Our blog covers technology, lifestyle, wellness, personal development, and creativity. <br/>
In the tech section, we break down the latest advancements in AI, software development, and gadgets, making complex concepts easy to understand. Our lifestyle section offers practical tips on health, fitness, travel, and food, helping you live your best life. Wellness articles focus on mental health and self-care, providing holistic approaches to balance in a busy world. <br/>
For those interested in personal growth, we provide resources on productivity, goal-setting, and career development. Our creativity section highlights talented artists, writers, and creators, offering inspiration and celebrating artistic endeavors. <br/>
Our blog is designed for easy navigation with a clean, intuitive layout, complemented by high-quality images, infographics, and videos. We prioritize readability and accessibility, making our content user-friendly and inclusive. <br/>
Thank you for visiting our blog. We hope you find our content enlightening and enjoyable. Happy reading! <br/>


</p>
        </div>
    );
}
