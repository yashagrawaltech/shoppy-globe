import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorComponent from '../components/ErrorComponent';
import AddButton from '../components/AddButton';

// Product component to display details of a specific product
const Product = () => {
    // Get the product ID from the URL parameters
    const { id } = useParams();

    // Fetch product data using the custom useFetch hook
    const { data, error, loading } = useFetch(
        `https://dummyjson.com/products/${id}`
    );

    return (
        <>
            {/* Conditional rendering based on loading, error, or data state */}
            {loading ? (
                // Show loading spinner while data is being fetched
                <LoadingSpinner />
            ) : error ? (
                // Show error component if there is an error
                <ErrorComponent message={error} />
            ) : data && data.title ? (
                // Render product details if data is available
                <div className="flex flex-col w-full gap-4">
                    <div className="w-full border-2 border-gray-200 rounded-2xl grid sm:grid-cols-12">
                        {/* Product image section */}
                        <div className="left w-full h-fit overflow-hidden sm:col-span-4">
                            <img
                                loading="lazy"
                                className="w-full h-full object-cover object-center"
                                src={data.thumbnail}
                                alt=""
                            />
                        </div>
                        {/* Product details section */}
                        <div className="right p-4 sm:col-span-8 flex flex-col items-start justify-start h-full gap-4 sm:border-l-2 sm:border-l-gray-200">
                            <div className="w-full flex items-center gap-4">
                                {/* Display product category */}
                                <span className="px-4 py-2 bg-zinc-950 text-yellow-400 rounded-lg">
                                    {data.category}
                                </span>
                                {/* Display product rating */}
                                <span className="bg-gray-400/50 rounded-lg px-4 py-2">
                                    ⭐ {data.rating}
                                </span>
                            </div>
                            {/* Product title */}
                            <h1 className="text-5xl font-semibold">
                                {data.title}
                            </h1>
                            {/* Product description */}
                            <p>{data.description}</p>
                            {/* Product price */}
                            <p className="text-2xl font-semibold">
                                ${data.price}
                            </p>
                            {/* Shipping information */}
                            <p className="text-sm -mt-4">
                                {data.shippingInformation}
                            </p>
                            {/* Button to add product to cart */}
                            <AddButton data={data} />
                        </div>
                    </div>
                    {/* Additional product information in a table */}
                    <div className="flex flex-col items-start justify-start gap-4 w-full overflow-auto">
                        <table className="w-full border-2 border-gray-500 text-left">
                            <thead>
                                <tr>
                                    <th className="align-top border-2 border-gray-500 p-2">
                                        Return Policy
                                    </th>
                                    <th className="align-top border-2 border-gray-500 p-2">
                                        Weight
                                    </th>
                                    <th className="align-top border-2 border-gray-500 p-2">
                                        Warranty
                                    </th>
                                    <th className="align-top border-2 border-gray-500 p-2">
                                        Tags
                                    </th>
                                    <th className="align-top border-2 border-gray-500 p-2">
                                        SKU
                                    </th>
                                    <th className="align-top border-2 border-gray-500 p-2">
                                        Dimensions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* Display product return policy */}
                                    <td className="border-2 align-top border-gray-500 p-2">
                                        {data.returnPolicy}
                                    </td>
                                    {/* Display product weight */}
                                    <td className="border-2 align-top border-gray-500 p-2">
                                        {data.weight}kg
                                    </td>
                                    {/* Display warranty information */}
                                    <td className="border-2 align-top border-gray-500 p-2">
                                        {data.warrantyInformation}
                                    </td>
                                    {/* Display product tags */}
                                    <td className="border-2 align-top border-gray-500 p-2">
                                        {data.tags.map((t, idx) => {
                                            return (
                                                <span
                                                    key={`product-${data.id}-tag-${idx}`}
                                                >
                                                    {t}
                                                    {idx ===
                                                    data.tags.length - 1
                                                        ? ''
                                                        : ', '}
                                                </span>
                                            );
                                        })}
                                    </td>
                                    {/* Display product SKU */}
                                    <td className="border-2 align-top border-gray-500 p-2">
                                        {data.sku}
                                    </td>
                                    {/* Display product dimensions */}
                                    <td className="border-2 align-top border-gray-500 p-2">
                                        {Object.keys(data.dimensions).map(
                                            (k) => (
                                                <p key={k}>
                                                    <span className="font-semibold">
                                                        {k}:
                                                    </span>{' '}
                                                    {data.dimensions[k]}
                                                </p>
                                            )
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                // Show error component if data is not available
                <ErrorComponent message={data && data.message} />
            )}
        </>
    );
};

export default Product;
