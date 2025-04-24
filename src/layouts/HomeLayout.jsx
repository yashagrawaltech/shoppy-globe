import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div className="flex flex-col min-h-screen relative overflow-clip">
            <header className="w-full sticky top-0 left-0 p-4 z-50">
                <Navbar />
            </header>
            <main className="flex-grow px-4 md:px-8 z-40">
                <Outlet />
            </main>
            <footer className="w-full mt-4 border-t-2 border-t-zinc-200">
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayout;
