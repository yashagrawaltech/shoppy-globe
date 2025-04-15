const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-900">
            <div className="mb-6">
                <div className="circle w-24 h-24 rounded-full text-white text-4xl flex items-center justify-center bg-[#4A90E2]">
                    404
                </div>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
                Oops! Page Not Found
            </h1>
            <p className="text-base sm:text-lg mb-4 opacity-70 text-center">
                The page you are looking for does not exist.
            </p>
            <a
                href="/"
                className="px-4 py-2 bg-blue-500 text-sm sm:text-base text-white rounded hover:bg-blue-600 transition"
            >
                Back to Home
            </a>
        </div>
    );
};

export default NotFound;
