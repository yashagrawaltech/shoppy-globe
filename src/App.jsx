import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import Home from './pages/Home';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
        errorElement: <NotFound />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
