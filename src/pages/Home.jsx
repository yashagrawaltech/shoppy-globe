import ErrorComponent from '../components/ErrorComponent';
import LoadingSpinner from '../components/LoadingSpinner';
import ProductList from '../components/ProductList';
import { useFetch } from '../hooks/useFetch';

// Home component to display the main page with products
const Home = () => {
    // Fetch data from the API using the custom useFetch hook
    const { data, error, loading } = useFetch('https://dummyjson.com/products');

    return (
        <div className="">
            {/* Banner section */}
            <div className="banner w-full mt-2 rounded-2xl overflow-hidden">
                <img
                    className="w-full h-full object-cover object-center"
                    src="/banner.png"
                    alt=""
                />
            </div>
            {/* Products section */}
            <div className="products mt-8 pb-4 min-h-[50dvh]">
                {/* Title with horizontal rules */}
                <div className="w-full flex items-center justify-center gap-4 pb-4">
                    <hr className="border-2 border-yellow-500 flex-grow max-w-48" />
                    <h2 className="text-xl max-w-1/2 text-center md:text-3xl font-semibold text-zinc-600">
                        For You
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
                ) : data ? (
                    // If data is available, render the ProductList component
                    data.products ? (
                        <ProductList productData={data.products} />
                    ) : null
                ) : null}
            </div>
        </div>
    );
};

export default Home;
