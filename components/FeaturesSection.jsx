
export default function FeaturesSection() {

    return(
        <>
            {/* <!-- Features --> */}
            <section className="text-gray-400 bg-gray-900 font-poppins mx-auto pt-8">
            <div className="text-center w-3/5 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-bold tracking-wide title-font text-white mb-4">A science based approach to betting</h1>
                <p className="text-xl leading-snug tracking-wide font-medium text-gray-400 text-opacity-80">The average bettor researches between 3-8 data points when making decisions; our prediction model researches over 100 data points from each sports, down to the individual player level.</p>
            </div>
            <div className="container pb-5 py-24 mx-auto flex flex-wrap lg:w-4/5">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <img alt="feature" className="object-cover object-center" src="TopPicks.png"/>
                </div>
                <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                    <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="flex-grow">
                        <h2 className="text-white text-3xl title-font font-bold tracking-wide mb-3">Our Mission</h2>
                        <p className="leading-relaxed text-lg font-semibold tracking-wide">To become the ultimate source of data to help bettors win more money</p>
                        </div>
                    </div>

                    <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="flex-grow">
                        <h2 className="text-white text-lg title-font font-semibold tracking-wide tracking-widest uppercase mb-3">Easy to use</h2>
                        <p className="leading-relaxed tracking-tight text-base">Our models push out easy to read guides to tell you what is favored to win, based on our machine-learning models.</p>
                        <p className="leading-relaxed tracking-tight text-base">Have a free bet, boost, or risk-free bet? Use our custom software to see how you can make the most out of that bet!</p>
                        </div>
                    </div>

                    <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="flex-grow">
                        <h2 className="text-white text-lg title-font font-semibold tracking-wide tracking-widest uppercase mb-3">Continuously improving</h2>
                        <p className="leading-relaxed tracking-tight text-base">Our machine-learning prediction model uses data that dates back 5+ years in each sport. It also updates weekly from the most recent games played to get a better understanding of how games and players are performing NOW!</p>
                        </div>
                    </div>

                    <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="flex-grow">
                        <h2 className="text-white text-lg title-font font-semibold tracking-wide tracking-widest uppercase mb-3">Data on data on data</h2>
                        <p className="leading-relaxed tracking-tight text-base">Like team and player props? Be sure to stay tuned to check out our prop bot, coming soon!</p>
                        </div>
                    </div>
                
                </div>
            </div>

            <div className="container pb-5 py-24 mx-auto flex flex-wrap lg:w-4/5">
                <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pr-12 lg:text-left text-center">
                    <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="flex-grow">
                        <h2 className="text-white text-lg title-font font-semibold tracking-wide tracking-widest uppercase mb-3">The science</h2>
                        <p className="leading-relaxed tracking-tight text-base">Data science is easily becoming the most important tool in the world. What a better way to use it in one of the most data driven businesses in the world? Our machine-learning models continuously weigh the most important data points and adjust accordingly to what is important and what is not important to help guide you to better bets. We are not cappers. We use science to help guide you to make more informed wagers!</p>
                        </div>
                    </div>

                    <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="flex-grow">
                        <h2 className="text-white text-lg title-font font-semibold tracking-wide tracking-widest uppercase mb-3">A family</h2>
                        <p className="leading-relaxed tracking-tight text-base">When we say family, we don't mean the people who built the site or models. We mean the community who have been with us since our discord days from the beginning! We have people that bleed props. We have people that get insider info to how players are feeling, how teams lost sleep, and any other random thing you might could think of-- we've seen and heard it all. If you'd like to join our discord chat, we have our chat built right into the website, so you have everything in one place!</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <img alt="feature" className="object-cover object-center" src="ExamplePick.png"/>
                </div>
            </div>
            </section>
        </>
    )
}