import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-gray-600' >
            <div className="navbar pl-10 shadow-sm">
                <div className="flex-1">
                <h1 className='text-4xl my-3 text-blue-600' >Moto<span className=' text-yellow-400' >Doc</span></h1>
                </div>
                <div className='flex-2/9' >
                    <ul className='flex gap-5 font-bold' >
                        <li className='bg-gray-700 text-center px-6 py-2 rounded' >Home</li>
                        <li className='bg-gray-700 text-center px-6 py-2 rounded'>Auctions</li>
                        <li className='bg-gray-700 text-center px-6 py-2 rounded'>Categories</li>
                        <li className='bg-gray-700 text-center px-6 py-2 rounded'>How to works</li>
                    </ul>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end pr-2 ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end pr-10">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;