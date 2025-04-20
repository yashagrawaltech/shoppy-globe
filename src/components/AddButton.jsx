import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { add, remove } from '../utils/cart-slice';

const AddButton = ({ data }) => {
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
        <>
            {count ? (
                <div className="w-full flex items-center justify-between rounded-md border border-zinc-500 shadow-md p-4">
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
                    className="add-to-cart w-full hover:bg-gray-200 bg-yellow-500 text-shadow-zinc-950 cursor-pointer flex items-center justify-center gap-2 p-4 text-base rounded-lg transition-all duration-300 ease-in-out"
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
        </>
    );
};

export default AddButton;
