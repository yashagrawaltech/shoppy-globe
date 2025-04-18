import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorComponent from '../components/ErrorComponent';
import AddButton from '../components/AddButton';

const Product = () => {
    const { id } = useParams();

    const { data, error, loading } = useFetch(
        `https://dummyjson.com/products/${id}`
    );

    return (
        <>
            {loading ? (
                <LoadingSpinner />
            ) : error ? (
                <ErrorComponent message={error} />
            ) : data && data.title ? (
                <div className="flex flex-col w-full gap-4">
                    <div className="w-full border-2 border-gray-200 rounded-2xl flex items-start justify-start">
                        <div className="left w-full max-w-120 md:border-r-2 border-r-gray-200 overflow-hidden">
                            <img
                                loading="lazy"
                                className="w-full h-full object-cover object-center"
                                src={data.thumbnail}
                                alt=""
                            />
                        </div>
                        <div className="right p-4 flex flex-col items-start justify-start gap-4">
                            <div className="w-full flex items-center gap-4">
                                <span className="px-4 py-2 bg-zinc-950 text-yellow-400 rounded-lg">
                                    {data.category}
                                </span>

                                <span className="bg-gray-400/50 rounded-lg px-4 py-2">
                                    ⭐ {data.rating}
                                </span>
                            </div>
                            <h1 className="text-5xl font-semibold">
                                {data.title}
                            </h1>
                            <p>{data.description}</p>
                            <p className="text-2xl font-semibold">
                                ${data.price}
                            </p>
                            <p className="text-sm -mt-4">
                                {data.shippingInformation}
                            </p>
                            <AddButton data={data} />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 w-full">
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
                                    <td className="border-2 align-top border-gray-500 p-2">
                                        {data.returnPolicy}
                                    </td>
                                    <td className="border-2 align-top border-gray-500 p-2">
                                        {data.weight}kg
                                    </td>
                                    <td className="border-2 align-top border-gray-500 p-2">
                                        {data.warrantyInformation}
                                    </td>
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
                                    <td className="border-2 align-top border-gray-500 p-2">
                                        {data.sku}
                                    </td>
                                    <td className="border-2 align-top border-gray-500 p-2">
                                        {Object.keys(data.dimensions).map(
                                            (k) => (
                                                <p>
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
                <ErrorComponent message={data && data.message} />
            )}
        </>
    );
};

export default Product;
