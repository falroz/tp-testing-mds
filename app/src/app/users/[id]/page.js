
export default async function User({params}) {

    const res = await fetch(`https://reqres.in/api/users/${params.id}`)
    const user = await res.json();

    console.log(user)

	return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{user.data.first_name} {user.data.last_name}</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">{user.data.email}</p>
                </div> 
                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={user.data.avatar} alt="Bonnie Avatar" />
            </div>
        </main>
    )
}
