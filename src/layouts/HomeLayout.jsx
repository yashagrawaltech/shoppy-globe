import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className=""></header>
            <main className="flex-grow">
                <Outlet />
            </main>
            <footer className=""></footer>
        </div>
    );
};

export default HomeLayout;
