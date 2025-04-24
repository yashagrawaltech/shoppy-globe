import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import { lazy, Suspense } from 'react';

const Checkout = lazy(() => import('./pages/Checkout'));
const Search = lazy(() => import('./pages/Search'));
const Cart = lazy(() => import('./pages/Cart'));
const Product = lazy(() => import('./pages/Product'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/cart',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Cart />
                    </Suspense>
                ),
            },
            {
                path: '/search/:search',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Search />
                    </Suspense>
                ),
            },
            {
                path: '/checkout',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Checkout />
                    </Suspense>
                ),
            },
            {
                path: '/product/:id',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Product />
                    </Suspense>
                ),
            },
        ],
        errorElement: <NotFound />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
