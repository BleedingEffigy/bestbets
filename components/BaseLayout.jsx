import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useState } from 'react';

export default function BaseLayout({ children }) {
    const { user, error, isLoading } = useUser();
    const [chatOpen, setchatOpen] = useState(false)

    const openChat = () => {
        document.getElementById("chatbox").style.width = "50%";
        setchatOpen(!chatOpen)
    // document.getElementById("main").style.marginLeft = "50%";
    }

    const closeChat = () => {
        document.getElementById("chatbox").style.width = "0";
        setchatOpen(!chatOpen)
        // document.getElementById("main").style.marginLeft = "0";
    }

    return (
        <>
            {/* Main Body */}
            <div className="bg-gray-900 relative">
                <header className="sticky border-t-4 border-t-lime-500 top-0 z-30">
                    {/* <!-- Nav --> */}
                    <div className="text-white bg-gray-900/70 font-poppins">
                        <div className="container mx-auto flex flex-wrap py-1 flex-col md:flex-row items-center">
                            <Link href="/">
                                <a className="flex title-font font-medium items-center text-white mb-4 p-1 md:mb-0 transition ease-in-out hover:scale-110 rounded">
                                    <span className="text-2xl text-lime-500 font-semibold">BestBetsAlgo</span>
                                </a>
                            </Link>
                            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            </nav>
                            { 
                            !user &&
                            <>
                                <a href="/api/auth/login">
                                    <button className="inline-flex items-center btn-sm btn-outline btn text-lime-500 hover:bg-lime-500 glass border-0 py-1 px-3 focus:outline-none hover:bg-lime-500 rounded text-base mt-4 md:mt-0">
                                    Log In
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                    </button>
                                </a>
                                <button className="btn btn-sm bg-lime-500 no-animation mx-2 sticky hover:text-transparent hover:cursor-not-allowed">
                                    chat
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                </button>
                            </>
                            }
                            {
                            user && 
                            <>
                                <Link href="/user">
                                <a className="btn btn-sm bg-transparent border-0 mx-1 hover:glass">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </a>
                                </Link>
                                <a href="/api/auth/logout">
                                    <button className="group inline-flex items-center btn text-red-500 btn-outline btn-sm border-0 py-1 px-3 focus:outline-none hover:glass hover:bg-red-600 hover:text-gray-900 rounded text-base mt-4 md:mt-0">
                                        <span className='hidden group-hover:inline'>Log Out</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                    </button>
                                </a>
                                <button className="btn btn-sm bg-lime-500 mx-2 sticky hover:glass hover:bg-lime-600" onClick={() => chatOpen ? closeChat() : openChat()}>
                                chat
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                                </button>
                            </>
                            }
                            

                        </div>
                    </div>

                </header>
                <main id="main" className="overflow-hidden">
                    {children}
                </main>
            </div>

            {/* Chatbox sidebar */}
            <div id="chatbox" className="mb-10 z-50" 
                    style={{'height': '100%',
                    'width': 0,
                    'position': 'fixed',
                    'z-index': 1,
                    'top': 0,
                    'left': 0,
                ' backgroundColor': '#111',
                    'overflow-x': 'hidden',
                ' transition': '0.5s'}}
            >
                <section className="text-gray-400 bg-transparent font-poppins relative">
                <button className="btn glass border-0 absolute top-0 right-0" onClick={() => closeChat()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex justify-center md:h-screen">
                    {/* <!-- <div className="blur-sm relative">
                    <img src="/assets/DiscordChat.png"/>

                    </div>
                    <div className="absolute mt-6">
                    <button className="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">
                        <svg className="h-6 w-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                        Sign in
                    </button>
                    </div> --> */}
                    <iframe src="https://e.widgetbot.io/channels/920025055101063231/920025055101063234" height="100%" width="100%"></iframe>
                </div>
                </section>
            </div>
        </>
    )
}