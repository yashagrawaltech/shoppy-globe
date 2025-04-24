import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import ErrorComponent from '../components/ErrorComponent';
import LoadingSpinner from '../components/LoadingSpinner';

// Component to display when no search results are found
const NoResults = () => {
    return (
        <div className="no-results flex flex-col items-center justify-center min-h-[50dvh]">
            <svg
                className="animate-bounce"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="100px"
                height="100px"
            >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="6" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12" y2="18" />
            </svg>
            <h3 className="text-xl text-zinc-600 mt-4">
                No results found for your search.
            </h3>
        </div>
    );
};

// Main Search component to handle product search functionality
const Search = () => {
    // Get the search query from the URL parameters
    const { search } = useParams();

    // Fetch product data based on the search query using the custom useFetch hook
    const { data, error, loading } = useFetch(
        `https://dummyjson.com/products/search?q=${search}`
    );

    return (
        <div className="products mt-4 pb-4 min-h-[50dvh]">
            {/* Header displaying the search results title */}
            <div className="w-full flex items-center justify-center gap-4 pb-4">
                <hr className="border-2 border-yellow-500 flex-grow max-w-48" />
                <h2 className="text-xl max-w-1/2 text-center md:text-3xl font-semibold text-zinc-600">
                    Search results for "{search}"
                </h2>
                <hr className="border-2 border-yellow-500 flex-grow max-w-48" />
            </div>
            {/* Conditional rendering based on loading, error, or data state */}
            {loading ? (
                // Show loading spinner while data is being fetched
                <LoadingSpinner />
            ) : error ? (
                // Show error component if there is an error
                <ErrorComponent message={error} />
            ) : data && data.products && data.products.length > 0 ? (
                // Render the ProductList component if products are found
                <ProductList productData={data.products} />
            ) : (
                // Show NoResults component if no products found
                <NoResults />
            )}
        </div>
    );
};

export default Search;
