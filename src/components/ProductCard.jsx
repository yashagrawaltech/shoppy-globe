import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { add, remove } from '../utils/cart-slice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const ProductCard = ({ data }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.items);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const isAlreadyinCart = cart.find((c) => c.item.id === data.id);
        if (isAlreadyinCart) {
            // console.log(isAlreadyinCart.count)
            setCount(isAlreadyinCart.count);
        } else {
            setCount(0);
        }
    }, [cart, data.id]);

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
                {count ? (
                    <div className="w-full flex items-center justify-between">
                        <div
                            onClick={() => dispatch(add(data))}
                            className="p-2 bg-yellow-500 rounded-lg items-center justify-center flex"
                        >
                            <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                            </svg>
                        </div>
                        <p>{count}</p>
                        <div
                            onClick={() => dispatch(remove(data.id))}
                            className="p-2 bg-yellow-500 rounded-lg items-center justify-center flex"
                        >
                            <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M5 11V13H19V11H5Z"></path>
                            </svg>
                        </div>
                    </div>
                ) : (
                    <div
                        onClick={() => dispatch(add(data))}
                        className="add-to-cart hover:bg-gray-200 bg-yellow-500 text-shadow-zinc-950 cursor-pointer flex items-center justify-center gap-2 p-4 text-base rounded-lg transition-all duration-300 ease-in-out"
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </svg>{' '}
                        Add to cart
                    </div>
                )}
                <Link
                    to={`product/${data.id}`}
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
