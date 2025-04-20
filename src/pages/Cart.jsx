import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <img
                className="w-32 h-32"
                src="/empty-cart-svg.svg"
                alt="empty cart svg"
            />

            <h2 className="text-2xl font-semibold text-gray-800">
                Your Cart is Empty
            </h2>
            <p className="mt-2 text-gray-600">
                Add items to your cart to get started!
            </p>
        </div>
    );
};

const Cart = () => {
    const cart = useSelector((state) => state.items);

    if (!cart || cart.length === 0) {
        return <EmptyCart />;
    }

    return (
        <div className="w-full border-2 border-zinc-400 rounded-2xl p-4 gap-2">
            {cart && cart.length ? (
                <>
                    {cart.map((c) => {
                        return <CartItem key={c.item.id} data={c} />;
                    })}
                    <div className="flex items-center gap-4 ml-auto w-fit mt-8 justify-end">
                        <div className="totle px-4 py-2 text-zinc-950 bg-zinc-100 border-zinc-400 border shadow-md w-fit rounded-lg text-xl">
                            Totle: $
                            {cart
                                .reduce((a, r) => {
                                    return a + r.item.price * r.count;
                                }, 0)
                                .toFixed(2)}
                        </div>
                        <Link
                            to={'/checkout'}
                            className="px-4 py-2 flex bg-yellow-500 items-center justify-center  w-fit shadow-md text-xl rounded-md border-zinc-400 border cursor-pointer"
                        >
                            Checkout
                        </Link>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default Cart;
