'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
	const [user, setUser] = useState(null)
	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) setUser(token)
		console.log('token', token)
	}, [])

	return (
		<main className="grid place-items-center h-screen">
			{user ? (
				<Link className="py-2 px-4 bg-blue-500" href={'/users'}>
					Users
				</Link>
			) : (
				<Link className="py-2 px-4 bg-blue-500" href={'/login'}>
					Login / Sing up
				</Link>
			)}
		</main>
	)
}
