
export default function Dashboard(){

    const cardContent = 
    [
        {
            'title': 'Green Bay Packers@Chicago Bears',
            'spread': 'GB -7.5',
            'moneyLine':'Green Bay',
            'total':'Over 53.5',
        },
        {
            'title': 'Washington Football Team@Philadelphia Eagles',
            'spread': 'PHI -7.0',
            'moneyLine':'Philadelphia',
            'total':'Under 44.5',
        },
        {
            'title': 'Atlanta Falcons@San Francisco 49ers',
            'spread': 'ATL +8.5',
            'moneyLine':'Atlanta ',
            'total':'Over 45.5',
        },
        {
            'title': 'Cincinnati Bengals@Denver Broncos',
            'spread': 'CIN +2.5',
            'moneyLine':'Cincinnati ',
            'total':'Over 44.0',
        },
        {
            'title': 'New Orleans Saints@Tampa Bay Buccaneers',
            'spread': 'NO +11.0',
            'moneyLine':'New Orleans',
            'total':'Over 46.5',
        },
    ]
    
    return(
        <div className="bg-gray-800 min-h-screen">
            <header>
                <div class="navbar mb-2 pb-0 shadow-lg bg-gray-800 text-neutral-content">
                    <div class="flex-none">
                        <button class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
                            </svg>
                        </button>
                    </div> 
                    <div class="flex-1 px-2 mx-2 mb-0">
                        <div class="tabs">
                            <a class="tab tab-bordered text-gray-300">Models Picks</a> 
                            <a class="tab tab-bordered text-gray-100 border-b-white text-base">Results</a> 
                            <a class="tab tab-bordered text-gray-300">Where to Bet</a>
                            <a class="tab tab-bordered text-gray-300">Beat the Odds</a>
                            <a class="tab tab-bordered text-gray-300">Prop Data</a>
                        </div>
                    </div> 
                    <div class="flex-none">
                        <button class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">      
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>                    
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            <main className="bg-gray-800 mx-auto w-5/6">
                <div class="overflow-x-auto">
                    <table class="table border-2 w-full bg-gray-900">
                        <thead>
                            <tr>
                                <th>League</th> 
                                <th>Spread</th> 
                                <th>Money Line</th> 
                                <th>Total</th> 
                                <th>Best Props</th>
                                <th>L10 ATS</th>
                            </tr>
                        </thead> 
                        <tbody>
                            <tr>
                                <th className="flex flex-col text-center">
                                    <span>Green Bay Packers</span>    
                                    <span>Chicago Bears</span>    
                                </th> 
                                <td className="">
                                    <span className="">GB -7.5</span>
                                    <span className="">
                                        text
                                    </span>   
                                </td> 
                                <td className="">
                                    <span className="">
                                        Green Bay    
                                    </span>
                                    <span className="">
                                        
                                    </span> 
                                </td> 
                                <td className="">
                                    <span className="">
                                        Over 53.5    
                                    </span>
                                    <span className="">
                                        
                                    </span> 
                                </td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                            <tr>
                                <th className="flex flex-col text-center">
                                    <span>Washington Football Team</span>    
                                    <span>Philadelphia Eagles</span>    
                                </th>  
                                <td>PHI -7.0</td> 
                                <td>PHI</td> 
                                <td>Under 44.5</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                            <tr>
                                <th className="flex flex-col text-center">
                                    <span>Atlanta Falcons</span>    
                                    <span>San Francisco 49ers</span>    
                                </th>
                                <td>ATL +8.5</td> 
                                <td>ATL</td> 
                                <td>Over 45.5</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                            <tr>
                                <th className="flex flex-col text-center">
                                    <span>Cincinnati Bengals</span>    
                                    <span>Denver Broncos</span>    
                                </th>
                                <td>CIN +2.5</td> 
                                <td>CIN</td> 
                                <td>Over 44.0</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                            <tr>
                                <th className="flex flex-col text-center">
                                    <span>New Orleans Saints</span>    
                                    <span>Tampa Bay Buccaneers</span>    
                                </th> 
                                <td>NO +11.0</td> 
                                <td>NO Saints</td> 
                                <td>Over 46.5</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>

                    <section className="text-gray-400 bg-gray-900 body-font lg:relative py-8 px-12 z-50 overflow-scroll">
                        <div className="flex flex-wrap gap-4 justify-around">
                            {   
                                cardContent.map( card => 
                                    <div class="card bg-gray-800 compact w-1/4 ">
                                        <div class="badge mx-2 badge-secondary absolute top-2 right-1 z-50">Best Bet</div>
                                        <div class="card-body space-y-2">
                                            <div className="bg-green-200 -mx-4 -mt-4 px-4 pt-4">
                                                <h3 className="font-light text-green-500">Kickoff 12/13 at 7:20PM CST</h3> 
                                                <h2 class="card-title text-base text-green-800 pt-2">{card.title}</h2>
                                            </div>
                                            <div className="flex flex-row flex-wrap justify-evenly font-semibold text-gray-900 pt-3">
                                                <div className="flex flex-col rounded-lg text-center p-2 mb-2 bg-gray-700 text-gray-300 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <div>Spread</div>
                                                    <div className="bg-green-200 text-gray-700 rounded-md mt-2 p-1">{card.spread}</div>
                                                </div>
                                                <div className="flex flex-col rounded-lg text-center p-2 mb-2 bg-gray-700 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                    <div>Winner</div>
                                                    <div className="bg-yellow-200 text-gray-700 rounded-md mt-2 p-1">{card.moneyLine}</div>
                                                </div>
                                                <div className="flex flex-col rounded-lg text-center p-2 mb-2 bg-gray-700 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <div>Over/Under</div>
                                                    <div className="bg-red-200 text-gray-700 rounded-md mt-2 p-1">{card.total}</div>
                                                </div>
                                                <div className="flex flex-col rounded-lg text-center p-2 mb-2 bg-gray-700 text-gray-300 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <div>Best Props</div>
                                                    <div className="bg-green-200 text-gray-700 rounded-md mt-2 p-1">GB -7.5</div>
                                                </div>
                                                <div className="flex flex-col rounded-lg text-center p-2 mb-2 bg-gray-700 text-gray-300 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <div>L10 ATS</div>
                                                    <div className="bg-green-200 text-gray-700 rounded-md mt-2 p-1">GB -7.5</div>
                                                </div>
                                            </div>
                                            <div id="weather" className="pt-5">
                                                <div className="flex mb-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                                    </svg>
                                                    <span>Weather</span>
                                                </div>
                                                <div className="flex flex-wrap">
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
                </div>
            </main>

        </div>
    )
}