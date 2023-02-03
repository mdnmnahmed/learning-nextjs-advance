import React from 'react'
import useFetchAPI from './hooks/useFetchAPI'

export default function fetchApiData() {

    const { data: users, error, loading, removeData } = useFetchAPI({ url: `https://jsonplaceholder.typicode.com/users` });

    return (
        <div className="container px-2 mx-auto mt-16">
            <div className="mb-20 text-center">
                <h1 className="mb-4 text-xl font-medium text-white title-font sm:text-2xl">Fetch API Data --- Custom-Hooks</h1>
            </div>

            <div align="center">
                <h1 className="mb-4 text-xl font-medium text-orange-400 title-font sm:text-2xl">Default Counter</h1>
            </div>


            <div className="flex flex-wrap justify-center -m-2">
                {users?.map(user => (
                    <div key={user.id} className="w-full p-2 lg:w-1/3 md:w-1/2">
                        <div className="flex items-center h-full p-4 border border-gray-800 rounded-lg">
                            <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/80x80" />
                            <div className="flex-grow">
                                <h2 className="font-medium text-white title-font">{user.name}</h2>
                                <p className="text-gray-600">{user.email}</p>
                            </div>
                            <button className="px-2 py-1 bg-red-700 rounded hover:bg-red-800"
                                onClick={() => removeData(user.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}
