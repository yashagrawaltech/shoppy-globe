// ErrorState.js
const ErrorComponent = ({ message }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center p-4">
            <svg
                className="h-16 w-16 text-red-500 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z"
                />
            </svg>
            <h2 className="text-xl font-semibold text-red-600">
                Oops! Something went wrong.
            </h2>
            <p className="text-gray-600 mt-2">{message}</p>
        </div>
    );
};

export default ErrorComponent;
