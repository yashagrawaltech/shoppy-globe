import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import ErrorComponent from '../components/ErrorComponent';
import LoadingSpinner from '../components/LoadingSpinner';

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

const Search = () => {
    const { search } = useParams();
    const { data, error, loading } = useFetch(
        `https://dummyjson.com/products/search?q=${search}`
    );

    return (
        <div className="products mt-4 pb-4 min-h-[50dvh]">
            <div className="w-full flex items-center justify-center gap-4 pb-4">
                <hr className="border-2 border-yellow-500 flex-grow max-w-48" />
                <h2 className="text-3xl font-semibold text-zinc-600">
                    Search results for "{search}"
                </h2>
                <hr className="border-2 border-yellow-500 flex-grow max-w-48" />
            </div>
            {loading ? (
                <LoadingSpinner />
            ) : error ? (
                <ErrorComponent message={error} />
            ) : data && data.products && data.products.length > 0 ? (
                <ProductList productData={data.products} />
            ) : (
                <NoResults /> // Show NoResults component if no products found
            )}
        </div>
    );
};

export default Search;
