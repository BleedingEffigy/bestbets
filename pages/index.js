import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Tweet } from 'react-twitter-widgets'
import dynamic from 'next/dynamic'
import BaseLayout from '../components/BaseLayout'
const FeaturesSection = dynamic(() => import('../components/FeaturesSection'))
export default function Home() {

  return (
      <BaseLayout>
        <Head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width"/>
          <title>Best Bets Algo</title>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          {/* import poppins */}
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
        </Head>

        {/* <!-- Hero --> */}
        <section className="text-gray-400 bg-gray-900 font-poppins lg:relative">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center lg:w-5/6 lg:min-h-[85vh]">
            <div className=" md:w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center z-10">
              <img className='w-12 h-12 mb-8' src='https://pbs.twimg.com/profile_images/1328476463083958273/LK-XBkNw_400x400.jpg'/>
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-semibold text-white tracking-wider font-poppins">Bet on Sports using Data Science</h1>
              <p className="mb-8 text-xl leading-relaxed tracking-tighter">NBA | NFL | MLB | NHL</p>
              <div className="flex w-full md:justify-start justify-center items-end">
                <button className="inline-flex text-white/75 btn bg-lime-500 border-0 py-2 px-6 focus:outline-none hover:bg-lime-600 hover:glass rounded-lg text-lg">Sign Up</button>
              </div>
            </div>
            <div className="lg:max-w-4xl z-0 lg:w-full w-5/6 lg:mt-24 md:absolute md:inset-y-0 md:-right-1/4 xl:-right-12">
              <img className="object-cover object-center rounded" alt="hero" src="/BestBetsAlgo.png"/>
            </div>
          </div>
        </section>

        {/* <!-- Testimonial --> */}
        <section className="text-gray-400 bg-gray-800 font-poppins">
          <div className="container px-5 pt-5 pb-24 mx-auto">
          <h1 className="text-4xl text-center text-white mb-12 tracking-wide font-semibold">Twitter testimonials</h1>
            <div className="flex flex-wrap -m-4 justify-center">
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <Tweet tweetId='1469693588904755208'/>
                {/* <blockquote className="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Like anything in life, it’s all about the approach. Absolutely no fool’s errand.<br><br>Don’t listen to the experts, actually look at data and don’t play everything!<br><br>Me and all my guys at <a href="https://twitter.com/BestBetsAlgo?ref_src=twsrc%5Etfw">@BestBetsAlgo</a> been eating all year 🤷🏽‍♂️ </p>&mdash; BNA bettor (@KHBets615) <a href="https://twitter.com/KHBets615/status/1469693588904755208?ref_src=twsrc%5Etfw">December 11, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
              </div>
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <Tweet tweetId='1469547222622564364'/>
                {/* <blockquote className="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Hey! That&#39;s me! Seriously though. This Discord has so much to offer. From the models, to the bots, to the people. I can almost guarantee you&#39;ll make the $20 in the 7 day trial.</p>&mdash; Tyger (@TyTyger7) <a href="https://twitter.com/TyTyger7/status/1469547222622564364?ref_src=twsrc%5Etfw">December 11, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
              </div>
            </div>
          </div>
        </section>

        <FeaturesSection/>

        {/* <!-- Pricing --> */}
        <section className="text-gray-400 bg-gray-800 font-poppins overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-5xl text-3xl font-bold title-font tracking-tight mb-2 text-white">Subscription</h1>
              <p className="lg:w-2/3 mx-auto text-xl leading-relaxed text-base">2 plans to choose from</p>
            </div>
            <div className="flex flex-wrap -m-4 justify-center items-end">
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden border-t-4 border-t-yellow-200">
                  <h2 className="text-sm tracking-widest text-gray-500 title-font mb-1 font-medium">BUSINESS</h2>
                  <h1 className="text-7xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                    <span>$19</span>
                    <span className="text-lg ml-1 font-normal text-gray-400">/mo</span>
                  </h1>
                  <p className="flex items-center text-gray-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Vexillologist pitchfork
                  </p>
                  <p className="flex items-center text-gray-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Tumeric plaid portland
                  </p>
                  <p className="flex items-center text-gray-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Hexagon neutra unicorn
                  </p>
                  <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Pick this plan
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden border-t-4 border-t-red-500">
                  <h2 className="text-sm tracking-widest text-gray-500 title-font mb-1 font-medium">SPECIAL</h2>
                  <h1 className="text-7xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                    <span>$199</span>
                    <span className="text-lg ml-1 font-normal text-gray-400">/yr</span>
                  </h1>
                  <p className="flex items-center text-gray-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Vexillologist pitchfork
                  </p>
                  <p className="flex items-center text-gray-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Tumeric plaid portland
                  </p>
                  <p className="flex items-center text-gray-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Hexagon neutra unicorn
                  </p>
                  <p className="flex items-center text-gray-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Vexillologist pitchfork
                  </p>
                  <p className="flex items-center text-gray-400 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Mixtape chillwave tumeric
                  </p>
                  <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Pick this plan
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BaseLayout>

  )
}
