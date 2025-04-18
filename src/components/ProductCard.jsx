import { Link } from 'react-router-dom';
import AddButton from './AddButton';

const ProductCard = ({ data }) => {
    return (
        <div className="w-full border border-zinc-200 shadow-sm bg-gray-100 rounded-2xl flex flex-col gap-4 relative overflow-hidden pb-2">
            <span className="top-2 right-2 absolute bg-gray-400/50 rounded-lg px-4 py-2">
                ⭐ {data.rating}
            </span>
            <div className="img w-full overflow-hidden aspect-square">
                <img
                    className="w-full h-full object-center object-cover"
                    src={data.thumbnail}
                    alt={data.title}
                />
            </div>
            <div className="text flex flex-col items-start justify-start gap-2 px-2">
                <h4 className="line-clamp-2 text-xl font-semibold">
                    {data.title}
                </h4>
                <p className="text-lg">${data.price}</p>
                <p className="line-clamp-2 text-base">{data.description}</p>
            </div>
            <div className="buttons w-full flex flex-col gap-2 mt-auto px-2">
                <AddButton data={data} />
                <Link
                    to={`/product/${data.id}`}
                    className="view bg-gray-200 hover:bg-yellow-500 border-2 hover:border-transparent border-zinc-300 hover:border-2 text-shadow-zinc-950 cursor-pointer flex items-center justify-between px-4 py-2 text-base rounded-lg transition-all duration-300 ease-in-out"
                >
                    view{' '}
                    <span>
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
