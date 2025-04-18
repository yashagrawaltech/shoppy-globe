import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [cartItemCount, setCartItemCount] = useState('');

    const cart = useSelector((state) => state.items);

    useEffect(() => {
        // console.log(cart)
        if (cart.length) {
            setCartItemCount(cart.length.toString());
        }
    }, [cart]);

    return (
        <div className="w-full h-16 bg-blend-color-burn backdrop-blur-sm bg-zinc-400/80 rounded-2xl flex items-center justify-baseline p-4">
            <Link to={'/'}>
                <img className="h-8 fill-zinc-950" src="/logo.png" alt="logo" />
            </Link>
            <nav className="flex items-center justify-end gap-4 ml-auto">
                <form
                    className="p-2 pl-4 flex items-center gap-4 bg-gray-100 rounded-full"
                    action=""
                >
                    <input
                        className="w-56 outline-none"
                        placeholder="search products"
                    />
                    <button
                        type="submit"
                        className="bg-gray-950 cursor-pointer group hover:bg-yellow-400 transition-all duration-300 ease-in-out flex items-center justify-center p-2 rounded-full"
                    >
                        <svg
                            className="w-4 h-4 fill-white group-hover:fill-zinc-950"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168Z"></path>
                        </svg>
                    </button>
                </form>
                <Link
                    to={'/cart'}
                    className="bg-gray-950 cursor-pointer group hover:bg-yellow-400 transition-all duration-300 ease-in-out flex items-center justify-center p-2 rounded-full relative"
                >
                    {cartItemCount ? (
                        <span className="w-6 h-6 text-sm bg-yellow-500 rounded-full -bottom-1 right-0 absolute text-center border-2 border-gray-100 overflow-hidden">
                            {cartItemCount}
                        </span>
                    ) : null}
                    <svg
                        className="w-6 h-6 fill-white group-hover:fill-zinc-950"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6H9ZM7 6H4C3.44772 6 3 6.44772 3 7V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V7C21 6.44772 20.5523 6 20 6H17C17 3.23858 14.7614 1 12 1C9.23858 1 7 3.23858 7 6ZM9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10H17C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10H9Z"></path>
                    </svg>
                </Link>
                {/* <Link className="bg-gray-500 group hover:bg-gray-600 transition-all duration-300 ease-in-out flex items-center justify-center p-2 rounded-full ml-4">
                    <svg
                        className="w-6 h-6 fill-white group-hover:fill-zinc-100"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path>
                    </svg>
                </Link> */}
            </nav>
        </div>
    );
};

export default Navbar;
