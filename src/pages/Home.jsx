import ErrorComponent from '../components/ErrorComponent';
import LoadingSpinner from '../components/LoadingSpinner';
import ProductList from '../components/ProductList';
import { useFetch } from '../hooks/useFetch';

const Home = () => {
    const { data, error, loading } = useFetch('https://dummyjson.com/products');

    return (
        <div className="">
            <div className="banner w-full mt-2 rounded-2xl overflow-hidden">
                <img
                    className="w-full h-full object-cover object-center"
                    src="/banner.png"
                    alt=""
                />
            </div>
            <div className="products mt-8 pb-4 min-h-[50dvh]">
                <div className="w-full flex items-center justify-center gap-4 pb-4">
                    <hr className="border-2 border-yellow-500 flex-grow max-w-48" />
                    <h2 className="text-3xl font-semibold uppercase text-zinc-600">
                        For You
                    </h2>
                    <hr className="border-2 border-yellow-500 flex-grow max-w-48" />
                </div>
                {loading ? (
                    <LoadingSpinner />
                ) : error ? (
                    <ErrorComponent message={error} />
                ) : data ? (
                    data.products ? (
                        <ProductList productData={data.products} />
                    ) : null
                ) : null}
            </div>
        </div>
    );
};

export default Home;
