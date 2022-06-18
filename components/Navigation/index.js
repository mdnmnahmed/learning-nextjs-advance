import Link from 'next/link';
import React from 'react';

const Navigation = ({ navColor }) => {
    return (
        <>
            <header class="text-gray-400 body-font" style={{}}>
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        </svg>
                        <span class="ml-3 text-xl">N-News</span>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={`/`}>
                            <a className="mr-5 hover:text-white">Home</a>
                        </Link>

                        <Link href={`/user`}>
                            <a className="mr-5 hover:text-white">User</a>
                        </Link>

                        <Link href={`/post`}>
                            <a className="mr-5 hover:text-white">Posts</a>
                        </Link>

                        <Link href={`/about`}>
                            <a className="mr-5 hover:text-white">About</a>
                        </Link>
                    </nav>
                    <Link href={`/login`}>
                        <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                            Login
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Navigation;