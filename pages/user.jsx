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
            <section class="text-gray-400 bg-gray-900 body-font min-h-screen">
                <div class="w-full max-w-md w-full mx-auto bg-gray-900 border-4 border-gray-800 shadow-md rounded-md px-6 py-4 my-6">
                        <div class="sm:flex sm:justify-between">
                            <div class="flex items-center">
                                <img class="h-12 w-12 rounded-full" src={user.picture} alt=""/>
                                <div class="ml-2">
                                    <h3 class="text-lg text-gray-100 font-medium">{user.name}</h3>
                                    <span class="text-gray-600">{user.email}</span>
                                </div>
                            </div>
                            <div class="mt-2 sm:mt-0">
                                <button class="flex items-center text-white bg-blue-600 rounded px-2 py-1 hover:bg-blue-500 focus:outline-none focus:shadow-outline">
                                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span class="ml-1 text-sm">Follow</span> 
                                </button>
                            </div>
                        </div>
                        <div class="flex justify-between items-center mt-4">
                            <div>
                                <h4 class="text-gray-600 text-sm">Rating</h4>
                                <span class="mt-2 text-xl font-medium text-gray-300">127274</span>
                            </div>
                            <div>
                                <h4 class="text-gray-600 text-sm">Submissions</h4>
                                <span class="mt-2 text-xl font-medium text-gray-300">12171</span>
                            </div>
                            <div>
                                <h4 class="text-gray-600 text-sm">Reviews</h4>
                                <span class="mt-2 text-xl font-medium text-gray-300">35</span>
                            </div>
                        </div>
                        <div class="mt-3">
                            <h4 class="text-gray-600 text-sm">User Score</h4>
                            <span class="mt-2 text-xl font-medium text-gray-300">21%</span>
                        </div>
                        <a class="block mt-4 text-blue-400 hover:underline" href="#">3 Collections</a>
                </div>
            </section>
        </div>
    )
}