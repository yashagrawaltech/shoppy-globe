import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Updated import
import ErrorComponent from '../components/ErrorComponent';
import { clear } from '../utils/cart-slice';

const Checkout = () => {
    const cart = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    // Function to handle form submission
    const handleCheckout = (event) => {
        event.preventDefault();
        // Here you would typically handle the checkout process, e.g., sending data to an API
        alert('Checkout successful! Thank you for your purchase.');
        dispatch(clear());
        navigate('/'); // Redirect to home after checkout
    };

    // Calculate total price
    const totalPrice = cart
        .reduce((total, item) => total + item.item.price * item.count, 0)
        .toFixed(2);

    if (!cart || cart.length === 0) {
        return (
            <ErrorComponent message="Your cart is empty. Please add items to your cart before checking out." />
        );
    }

    return (
        <div className="checkout-container p-4">
            <h1 className="text-3xl font-semibold mb-4">Checkout</h1>
            <div className="cart-summary mb-6">
                <h2 className="text-2xl font-semibold">Order Summary</h2>
                <ul className="list-disc pl-5">
                    {cart.map((item) => (
                        <li key={item.item.id} className="flex justify-between">
                            <span>
                                {item.item.title} (x{item.count})
                            </span>
                            <span>
                                ${(item.item.price * item.count).toFixed(2)}
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="total-price font-bold mt-2">
                    Total: ${totalPrice}
                </div>
            </div>
            <form onSubmit={handleCheckout} className="shipping-info">
                <h2 className="text-2xl font-semibold mb-2">
                    Shipping Information
                </h2>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="name">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="address">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="city">
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="zip">
                        Zip Code
                    </label>
                    <input
                        type="text"
                        id="zip"
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="country">
                        Country
                    </label>
                    <input
                        type="text"
                        id="country"
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-yellow-500 text-zinc-950 px-4 py-2 rounded-md"
                >
                    Complete Purchase
                </button>
            </form>
        </div>
    );
};

export default Checkout;
