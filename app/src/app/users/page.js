'use client';

import { useEffect, useState } from "react";

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return window.location.href = '/'
        }

        fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(({data}) => setUsers(data))
    }, [])

    const disconnect = () => {
        localStorage.removeItem('token')
        window.location.href = '/'
    }

	return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <a href="#" onClick={disconnect} className="float-right text-blue-500 hover:text-blue-700">Déconnection</a>
                <div className="mt-8 mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Liste des utilisateurs</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Notre super liste d'utilisateur provenant de l'api <a href="https://reqres.in" target="_blank">reqres.in</a></p>
                </div> 
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    {users.map((user) => (
                        <div key={user.id} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href={`/users/${user.id}`}>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={user.avatar} alt="Bonnie Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href={`/users/${user.id}`}>{user.first_name} {user.last_name}</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">{user.email}</span>
                            </div>
                        </div> 
                    ))}  
                </div>  
            </div>
        </main>
    )
}
