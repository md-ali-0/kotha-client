import {
    Avatar,
    DarkThemeToggle,
    Dropdown,
    Flowbite,
    Navbar
} from 'flowbite-react';
import { useContext, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import logo from '../assets/logo.svg';
import Loading from '../components/loading';

const Header = () => {
    const {user, isLoading} = useContext(AuthContext)
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    if (isLoading) {
        return <Loading/>
    }
    return (
        <Flowbite>
            <header>
                <Navbar
                    className="bg-white/60 dark:bg-[#161819] shadow-sm dark:shadow-xl backdrop-blur relative"
                    container="true">
                    <Link className="flex items-center" to="/">
                        <img
                            src={logo}
                            className="mr-3 h-6 md:h-9 dark:invert"
                            alt="Kotha Logo"
                        />
                    </Link>
                    <div className="flex md:order-2">
                        <DarkThemeToggle className="mr-2 focus:ring-0" />
                        {user ? (
                            <Dropdown
                                className="z-50"
                                arrowIcon={false}
                                inline
                                label={
                                    <Avatar
                                        alt="User settings"
                                        img={user?.photoURL}
                                        rounded
                                    />
                                }>
                                <Dropdown.Header>
                                    <span className="block text-sm">
                                        {user?.displayName}
                                    </span>
                                    <span className="block truncate text-sm font-medium">
                                        {user?.email}
                                    </span>
                                </Dropdown.Header>
                                <Dropdown.Item>Dashboard</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Earnings</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>Sign out</Dropdown.Item>
                            </Dropdown>
                        ) : (
                            <div className="flex justify-center gap-2">
                            <Link to='/auth/login' className="inline-flex text-white bg-primary border-0 py-1.5 px-3 focus:outline-none hover:bg-blue-500 rounded text-lg">Login</Link>
                            <Link to='/auth/register' className="inline-flex text-gray-700 bg-gray-100 border-0 py-1.5 px-3 focus:outline-none hover:bg-gray-200 rounded text-lg dark:bg-[#1F2937] dark:text-gray-400">Register</Link>
                          </div>
                        )}
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <NavLink
                            to="/"
                            className="block py-2 pr-4 pl-3 md:p-0 bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700">
                            Home
                        </NavLink>
                        <Navbar.Link href="/blogs">All blogs</Navbar.Link>
                        <Navbar.Link href="/featured-blogs">
                            Featured Blogs
                        </Navbar.Link>
                        <Navbar.Link href="/about">About</Navbar.Link>
                        <Navbar.Link href="/contact">Contact</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
                <Toaster />
            </header>
        </Flowbite>
    );
};

export default Header;
