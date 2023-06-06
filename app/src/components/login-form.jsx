'use client'

import { useState } from 'react'

export default function LoginForm() {
	const [showLogin, setShowLogin] = useState(true)
	const [error, setError] = useState('')

	const handleSubmit = async ({ type, e }) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const data = Object.fromEntries(formData)
		if (type === 'register') {
			register(data)
		} else {
			login(data)
		}
	}

	const register = async ({ password, email }) => {
		try {
			const res = await fetch('https://reqres.in/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: JSON.stringify({ password, email }),
			})

			const { id, token } = await res.json()
			if (token) {
				localStorage.setItem('token', token)
				window.location.href = '/users/'
			} else {
				throw new Error('Invalid email or password')
			}
		} catch (err) {
			setError(error.message)
		}
	}

	const login = async ({ password, email }) => {
		try {
			const res = await fetch('https://reqres.in/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ password, email }),
				cache: 'no-cache',
			})

			console.log(res)
			const { token } = await res.json()
			if (token) {
				localStorage.setItem('token', token)
				window.location.href = '/users/'
			} else {
				throw new Error('Invalid email or password')
			}
		} catch (error) {
			setError(error.message)
		}
	}

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					{showLogin ? (
						<LoginForHtmlforHtmlmComponent
							showRegister={() => setShowLogin(false)}
							onSubmit={handleSubmit}
						/>
					) : (
						<RegisterForHtmlforHtmlmComponent
							showLogin={() => setShowLogin(true)}
							onSubmit={handleSubmit}
						/>
					)}
					{error && <div className="text-red-500 p-6">{error}</div>}
					<div className="p-6">
						<p className="text-sm font-light text-gray-500 dark:text-gray-400">
							{showLogin ? 'Dont have an account?' : 'Do you have an account?'}
							<button
								onClick={() => setShowLogin(!showLogin)}
								className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
							>
								{showLogin ? 'Sing up' : 'Sing in'}
							</button>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

function LoginForHtmlforHtmlmComponent({ onSubmit }) {
	return (
		<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
			<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
				Sign in to your account
			</h1>
			<form
				className="space-y-4 md:space-y-6"
				action="#"
				onSubmit={(e) => onSubmit({ type: 'login', e })}
			>
				<div>
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Your email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="name@company.com"
						required=""
					/>
				</div>
				<div>
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Password
					</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required=""
					/>
				</div>

				<button
					type="submit"
					className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
				>
					Sign in
				</button>
			</form>
		</div>
	)
}

function RegisterForHtmlforHtmlmComponent({ onSubmit }) {
	return (
		<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
			<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
				Sign up
			</h1>
			<form
				className="space-y-4 md:space-y-6"
				action="#"
				onSubmit={(e) => onSubmit({ type: 'register', e })}
			>
				<div>
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Your email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="name@company.com"
						required=""
					/>
				</div>
				<div>
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Password
					</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required=""
					/>
				</div>

				<button
					type="submit"
					className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
				>
					Sign up
				</button>
			</form>
		</div>
	)
}
