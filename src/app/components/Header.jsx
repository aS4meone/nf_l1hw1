import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-md dark:bg-gray-800">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link className="text-xl font-bold" href="/">
                    Name of the App
                </Link>
                <nav className="flex space-x-4">
                    <Link className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                          href="/">
                        Home
                    </Link>
                    <Link className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                          href="/blog">
                        Blog
                    </Link>
                </nav>
            </div>
        </header>
    );
}
