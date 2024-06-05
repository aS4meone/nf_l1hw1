export default function BlogPostDetail({post}) {
    return (
        <div className="p-4 sm:p-6">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                <div className="h-6 w-6 border rounded-full overflow-hidden flex-shrink-0">
                    <img src="/download.svg" className="w-full h-full object-cover" alt={post.author}/>
                </div>
                <span>{post.author}</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{post.date}</p>
            <p className="text-lg text-gray-900 dark:text-gray-50 mb-4">{post.description}</p>
        </div>
    );
}
