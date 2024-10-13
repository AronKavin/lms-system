"use client"
import React, { useEffect } from 'react';
import Searchbar from '../_components/Searchbar';
import { UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

function Header() {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div className='ml-64 p-6 border-b flex items-center justify-between'>
            <Searchbar />

            {/* Align buttons to the right */}
            <div className='flex items-center space-x-4'>
                <button
                    className="bg-purple-800 text-white font-bold py-2 px-5 rounded hover:bg-red-700"
                    onClick={() => router.push('/')}
                >
                    Home
                </button>
                {!user ? (
                    <button
                        className="bg-purple-800 text-white font-bold py-2 px-5 rounded hover:bg-red-700"
                        onClick={() => router.push('/sign-in')}
                    >
                        Login
                    </button>
                ) : (
                    <UserButton />
                )}
            </div>
        </div>
    );
}

export default Header;
