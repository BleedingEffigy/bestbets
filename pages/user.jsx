import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0';

export default function User(){
    const { user, error, isLoading } = useUser();

    return(
        <div>
            <Head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width"/>
                <title>Best Bets Algo</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </Head>

            {/* User Profile */}
            <section className="text-gray-400 bg-gray-900 body-font min-h-screen">
                <div className="w-full max-w-md w-full mx-auto bg-gray-900 border-4 border-gray-800 shadow-md rounded-md px-6 py-4 my-6">
                        <div className="sm:flex sm:justify-between">
                            <div className="flex items-center">
                                <img className="h-12 w-12 rounded-full" src={user.picture} alt=""/>
                                <div className="ml-2">
                                    <h3 className="text-lg text-gray-100 font-medium">{user.name}</h3>
                                    <span className="text-gray-600">{user.email}</span>
                                </div>
                            </div>
                            <div className="mt-2 sm:mt-0">
                                <button className="flex items-center text-white bg-blue-600 rounded px-2 py-1 hover:bg-blue-500 focus:outline-none focus:shadow-outline">
                                    <svg className="h-5 w-5" fill="none" stroke-linecap="round" strokeLineJoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span className="ml-1 text-sm">Follow</span> 
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <div>
                                <h4 className="text-gray-600 text-sm">Rating</h4>
                                <span className="mt-2 text-xl font-medium text-gray-300">127274</span>
                            </div>
                            <div>
                                <h4 className="text-gray-600 text-sm">Submissions</h4>
                                <span className="mt-2 text-xl font-medium text-gray-300">12171</span>
                            </div>
                            <div>
                                <h4 className="text-gray-600 text-sm">Reviews</h4>
                                <span className="mt-2 text-xl font-medium text-gray-300">35</span>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h4 className="text-gray-600 text-sm">User Score</h4>
                            <span className="mt-2 text-xl font-medium text-gray-300">21%</span>
                        </div>
                        <a className="block mt-4 text-blue-400 hover:underline" href="#">3 Collections</a>
                </div>
            </section>
        </div>
    )
}