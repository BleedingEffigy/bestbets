import Link from "next/link";
import { useState } from "react";

export default function Dashboard(){

    const cardContent = 
    [
        {
            'title': 'Green Bay Packers@Chicago Bears',
            'spread': 'GB -7.5',
            spreadRank: '3',
            'moneyLine':'Green Bay',
            'total':'Over 53.5',
            'moneyLineRank': '2',
            'totalRank': '2',
            isBestBet: true,
        },
        {
            'title': 'Washington Football Team@Philadelphia Eagles',
            'spread': 'PHI -7.0',
            spreadRank: '3',
            'moneyLine':'Philadelphia',
            'total':'Under 44.5',
            'moneyLineRank': '2',
            'totalRank': '1',
            isBestBet: true
        },
        {
            'title': 'Atlanta Falcons@San Francisco 49ers',
            'spread': 'ATL +8.5',
            spreadRank: '1',
            'moneyLine':'Atlanta ',
            'total':'Over 45.5',
            'moneyLineRank': '2',
            'totalRank': '1',
            isBestBet: false
        },
        {
            'title': 'Cincinnati Bengals@Denver Broncos',
            'spread': 'CIN +2.5',
            spreadRank: '2',
            'moneyLine':'Cincinnati ',
            'total':'Over 44.0',
            'moneyLineRank': '1',
            'totalRank': '3',
            isBestBet: false
        },
        {
            'title': 'New Orleans Saints@Tampa Bay Buccaneers',
            'spread': 'NO +11.0',
            spreadRank: '2',
            'moneyLine':'New Orleans',
            'total':'Over 46.5',
            'moneyLineRank': '1',
            'totalRank': '2',
            isBestBet: false
        },
    ]
    const topPicks = [
        {
            type: 'Over/Under',
            pick: 'Over 44.0',
            public: 'GB-93%|7%-CHI',
        },
        {
            type: 'Winner',
            pick: 'Cincinnati',
            public: 'GB-93%|7%-CHI',
        },
        {
            type: 'Over/Under',
            pick: 'Over 53.5',
            public: 'GB-93%|7%-CHI',
        },
        {
            type: 'Winner',
            pick: 'Philadelphia',
            public: 'GB-93%|7%-CHI',
        },
        {
            type: 'Over/Under',
            pick: 'Over 46.5',
            public: 'GB-93%|7%-CHI',
        },
        {
            type: 'Spread',
            pick: 'ATL +8.5',
            public: 'GB-93%|7%-CHI',
        },
        {
            type: 'Over/Under',
            pick: 'Under 44.5',
            public: 'GB-93%|7%-CHI',
        },
        {
            type: 'Spread',
            pick: 'GB -7.5',
            public: 'GB-93%|7%-CHI',
        },
    ]    
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
    
    return(
        <div className="bg-slate-800 min-h-screen">
            <header>
                <div class="navbar mb-2 pb-0 shadow-lg bg-slate-800 text-slate-200">
                    <div class="flex-none">
                        <button class="btn btn-square btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
                            </svg>
                        </button>
                    </div> 
                    <div class="flex-1 px-2 mx-2 mb-0">
                        <div class="tabs">
                            <a class="tab tab-bordered text-slate-100 font-semibold tracking-wide text-lg border-b-slate-200">Models Picks</a> 
                            <a class="tab tab-bordered text-slate-300 font-semibold tracking-wide text-base">Results</a> 
                            <a class="tab tab-bordered text-slate-300 font-semibold tracking-wide text-base">Where to Bet</a>
                            <a class="tab tab-bordered text-slate-300 font-semibold tracking-wide text-base">Beat the Odds</a>
                            <a class="tab tab-bordered text-slate-300 font-semibold tracking-wide text-base">Prop Data</a>
                        </div>
                    </div>
                    {/* chat button */}
                    <div class="">
                        <button class="btn btn-sm btn-outline text-indigo-600/80 text-base font-bold tracking-wider border-2 p-0.5" onClick={() => chatOpen ? closeChat() : openChat()}>
                            <svg role="img" className="fill-indigo-300 w-6 h-6 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title>
                                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                            </svg>
                            Chat
                        </button>
                    </div>
                    {/* account button */}
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" class="btn btn-ghost rounded-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>    
                        </div> 
                        <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link href="/user">
                                    <a className="btn btn-sm bg-transparent border-0 mx-1 hover:glass">Profile</a>
                                </Link>
                            </li> 
                            <li>
                            <a href="/api/auth/logout">
                                <button className="group inline-flex items-center btn text-red-500 btn-outline btn-sm border-0 py-1 px-3 focus:outline-none hover:glass hover:bg-red-600 hover:text-gray-900 rounded text-base mt-4 md:mt-0">
                                    <span className='hidden group-hover:inline'>Log Out</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </button>
                            </a> 
                            </li>
                        </ul>
                    </div>

                </div>
            </header>
            {/* opening banner */}
            {/* <div className="bg-red-100 text-red-600 w-full">
                <h1 class=" text-5xl font-bold">
                    Model Picks
                </h1> 
                <p class="mb-5 py-4">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div> */}
            <main className="bg-slate-800 mx-auto w-11/12">
                    <section className="text-slate-400 bg-slate-800 body-font lg:relative pb-8 px-12 z-50">
                        {/* dropdown */}
                        <div class="dropdown mb-4 -left-6">
                            <div tabindex="0" class="m-1 btn bg-slate-700">League
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                            </div> 
                            <div tabindex="0" class="p-0 shadow menu dropdown-content bg-slate-700 rounded w-96 divide-y divide-solid z-50">
                                <div className="flex flex-row flex-wrap">
                                    <div className="card w-2/3 group">
                                            <div className="card-body">
                                                <h2 className="card-title text-red-300/80 tracking-wider group-hover:scale-125 duration-200">🏀 NBA</h2>
                                            </div>
                                    </div>
                                </div>
                                <div className="bg-slate-800">
                                    <h2 className="text-2xl text-slate-200 tracking-widest ml-4 mt-2">Leagues</h2>
                                    <div className="flex flex-row flex-wrap">
                                        <div className="card w-1/2 group">
                                                <div className="card-body">
                                                    <h2 className="card-title text-red-300/80 tracking-wider group-hover:scale-125 duration-200">🏀 NBA</h2>
                                                </div>
                                        </div>
                                        <div className="card w-1/2 group">
                                            <div className="card-body">
                                                <h2 className="card-title text-red-300/80 tracking-wider group-hover:scale-125 duration-200">🏈 NFL</h2>
                                            </div>
                                        </div>
                                        <div className="card w-1/2 group">
                                            <div className="card-body">
                                                <h2 className="card-title text-red-300/80 tracking-wider group-hover:scale-125 duration-200">⚾ MLB</h2>
                                            </div>
                                        </div>
                                        <div className="card w-1/2 group">
                                            <div className="card-body">
                                                <h2 className="card-title text-red-300/80 tracking-wider group-hover:scale-125 duration-200">🏒 NHL</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-start">
                            {/* Top Picks Card */}
                            <div class="card compact w-1/3 relative px-2 mb-10 shadow-2xl">
                                <div class="card-body bg-slate-700 relative">
                                    {/* banner text */}
                                    <div className="bg-transparent -mx-4 -mt-4 px-4 pt-3 pb-3 z-10 h-1/4">
                                        <h3 className="font-light text-base text-slate-800/80 tracking-widest">Refreshed Daily</h3> 
                                        <h2 class="card-title text-xl font-bold tracking-wider text-black/80">Top Picks</h2>
                                    </div>
                                    {/* banner bg */}
                                    <div className="bg-gradient-to-br from-red-500 via-red-400 to-red-200 absolute -mx-4 -top-3 w-full h-1/3 z-0"></div>
                                    {/* stats chart */}
                                    <div className="flex flex-col font-semibold text-slate-900 p-1 rounded-lg bg-slate-700 shadow-md z-10">
                                        {/* Top Picks */}
                                        { topPicks.map( (pick,idx) => 
                                            <div className="flex flex-row p-2 bg-slate-700 border-b-slate-600 border-b hover:border-b-dash text-slate-300 min-w-full" key={idx}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <div className="text-slate-400 font-medium tracking-tight">{pick.type}</div>
                                                {/* conditional render dependent on spread rank */}
                                                <div className="stat-rank-3">{pick.pick}</div>
                                                <div className="text-slate-400 font-medium tracking-tight text-sm ml-auto"> GB-93%|7%-CHI</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* List of Games and their Picks */}
                            {   
                                cardContent.map( (card,idx) => 
                                    <div class="card compact w-1/3 relative px-2 mb-10 shadow-2xl" key={idx}>
                                        <div class="card-body bg-slate-700 relative">
                                            {/* banner text */}
                                            <div className="bg-transparent -mx-4 -mt-4 px-4 pt-3 pb-3 z-10 h-1/4">
                                                <h3 className="font-light text-slate-800/80 tracking-widest">Kickoff 12/13 at 7:20PM CST</h3> 
                                                <h2 class="card-title text-base font-bold tracking-wider text-black/80">{card.title}</h2>
                                            </div>
                                            {/* banner bg */}
                                            <div className="bg-gradient-to-br from-lime-300 via-lime-300 to-lime-100 absolute -mx-4 -top-3 w-full h-1/3 z-0"></div>
                                            {/* stats chart */}
                                            <div className="flex flex-col font-semibold text-slate-900 p-1 rounded-lg bg-slate-700 shadow-md z-10">
                                                {/* Spread Chart */}
                                                <div className="flex flex-row p-2 bg-slate-700 border-b-slate-600 border-b hover:border-b-dash text-slate-300 min-w-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <div className="text-slate-400 font-medium tracking-tight">Spread</div>
                                                    {/* conditional render dependent on spread rank */}
                                                    {card.spreadRank == 3 && <div className="stat-rank-3">{card.spread}</div>}
                                                    {card.spreadRank == 2 && <div className="stat-rank-2">{card.spread}</div>}
                                                    {card.spreadRank == 1 && <div className="stat-rank-1">{card.spread}</div>}
                                                    <div className="text-slate-400 font-medium tracking-tight text-sm ml-auto"> GB-93%|7%-CHI</div>
                                                </div>
                                                <div className="flex flex-row p-2 bg-slate-700 border-b-slate-600 border-b text-slate-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                    <div className="text-slate-400 font-medium tracking-tight">Winner</div>
                                                        {card.moneyLineRank == 3 && <div className="stat-rank-3">{card.moneyLine}</div>}
                                                        {card.moneyLineRank == 2 && <div className="stat-rank-2">{card.moneyLine}</div>}
                                                        {card.moneyLineRank == 1 && <div className="stat-rank-1">{card.moneyLine}</div>}
                                                        <div className="text-slate-400 font-medium tracking-tight text-sm ml-auto"> GB-93%|7%-CHI</div>
                                                   
                                                </div>
                                                <div className="flex flex-row p-2 bg-slate-700 border-b-slate-600 border-b text-slate-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <div className="text-slate-400 font-medium tracking-tight">Over/Under</div>
                                                        {card.totalRank == 3 && <div className="stat-rank-3">{card.total}</div>}
                                                        {card.totalRank == 2 && <div className="stat-rank-2">{card.total}</div>}
                                                        {card.totalRank == 1 && <div className="stat-rank-1">{card.total}</div>}
                                                        <div className="text-slate-400 font-medium tracking-tight text-sm ml-auto"> GB-93%|7%-CHI</div>
                                                    </div>
                                                <div className="flex flex-row p-2 bg-slate-700 border-b-slate-600 border-b text-slate-300 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <div className="text-slate-400 font-medium tracking-tight">Best Props</div>
                                                    <div className="text-slate-500 rounded-md text-xl tracking-wide leading-none ml-auto">-</div>
                                                </div>
                                                <div className="flex flex-row p-2 bg-slate-700 border-b-slate-600 border-b text-slate-300 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <div className="text-slate-400 font-medium tracking-tight">L10 ATS</div>
                                                    <div className="text-slate-500 rounded-md text-xl tracking-wide leading-none ml-auto">-</div>
                                                </div>
                                            </div>
                                            {/* weather */}
                                            <div id="weather" className="pt-5">
                                                <div className="flex mb-2 text-slate-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                                    </svg>
                                                    <span>Weather</span>
                                                </div>
                                                <div className="flex flex-wrap w-5/6 mx-auto">
                                                    <div className="w-1/2">Clouds <span className="">67F</span></div>
                                                    <div className="w-1/2">Wind <span className="">6mph</span></div>
                                                    <div className="w-1/2">Precipitation <span className="">0%</span></div>
                                                    <div className="w-1/2">Humidity <span className="">265</span></div>
                                                </div>
                                            </div>
                                            <div class="justify-end card-actions">
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </section> 

            </main>

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
                <section className="text-slate-400 bg-transparent body-font relative">
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
                    <button className="inline-block px-4 py-3 text-sm font-semibold text-center text-slate-200 uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">
                        <svg className="h-6 w-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                        Sign in
                    </button>
                    </div> --> */}
                    <iframe src="https://e.widgetbot.io/channels/920025055101063231/920025055101063234" height="100%" width="100%"></iframe>
                </div>
                </section>
            </div>

        </div>
    )
}