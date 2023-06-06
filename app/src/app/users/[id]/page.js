'use client';

import { useEffect, useState } from "react";

export default function User({params}) {
    const [user, setUser] = useState({})

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.href = '/'
        }

        fetch(`https://reqres.in/api/users/${params.id}`)
            .then(res => res.json())
            .then(({data}) => setUser(data))
    }, [])

	return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <a href="/users" className="text-left text-blue-500 hover:text-blue-700">⬅ Retour</a>
                <div className="mt-4 mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{user.first_name} {user.last_name}</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">{user.email}</p>
                </div> 
                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={user.avatar} alt="Bonnie Avatar" />
            </div>
        </main>
    )
}
