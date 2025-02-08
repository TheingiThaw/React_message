
import Sidebar from '../components/Sidebar.jsx';
import ChatLayout from './ChatLayout.jsx';

const GuestLayout = ({ children }) => {

    console.log('guest');

    return (
        <>
            {/* navbar start */}
            <div className="navbar container mx-auto bg-base-100">
                <div className="flex-1">
                    <a href='index.html' className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a href='index.html' className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a href='index.html'>Settings</a></li>
                            <li><a href='index.html'>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* navbar end */}

            <div className="grid grid-cols-3">
                <Sidebar />
                <div className="col-span-2">
                    <ChatLayout />
                </div>
            </div>

            <div>
                {children}
            </div>
        </>
    )
}

export default GuestLayout