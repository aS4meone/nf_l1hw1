// BlogCard.js
import Link from "next/link";

export default function BlogCard({post}) {
    return (
        <Link href={`/blog/${post.id}`}>
            <p className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
                <div className="space-y-2 p-4 sm:p-6">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        <div className="h-6 w-6 border rounded-full overflow-hidden flex-shrink-0">
                            <img src="/download.svg" className="w-full h-full object-cover"/>
                        </div>
                        <span>{post.author}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{post.title}</h3>
                </div>
            </p>
        </Link>
    );
}
