import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Search from './pages/Search';

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
                element: <Cart />,
            },
            {
                path: '/search/:search',
                element: <Search />,
            },
            {
                path: '/checkout',
                element: <Checkout />,
            },
            {
                path: '/product/:id',
                element: <Product />,
            },
        ],
        errorElement: <NotFound />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
