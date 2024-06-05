import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
            <div className="flex-grow flex flex-col items-start p-4">
                <h2 className="text-2xl font-bold mb-4">Menu</h2>
                <Link href="/" legacyBehavior>
                    <a className="mb-2 p-2 hover:bg-gray-700 rounded">Home</a>
                </Link>
                <Link href="https://github.com" legacyBehavior>
                    <a className="mb-2 p-2 hover:bg-gray-700 rounded">GitHub</a>
                </Link>
                <Link href="/sign" legacyBehavior>
                    <a className="mb-2 p-2 hover:bg-gray-700 rounded">Sign In</a>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;

