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
            <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container py-8 mx-auto flex flex-col min-h-screen">
                <div class="mx-auto">
                    <div class="rounded-lg h-64 overflow-hidden">
                        <img alt='banner' class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
                    </div>
                    <div class="flex flex-col sm:flex-row px-5 mt-10 lg:w-4/6 mx-auto">
                        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                            <img src={user.picture}/>
                        </div>
                        <div class="flex flex-col items-center text-center justify-center">
                            <h2 class="font-medium title-font mt-4 text-white text-lg">{user.name}</h2>
                            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                            <p class="text-base text-gray-400">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                        </div>
                        </div>
                        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
                        <a class="text-indigo-400 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}