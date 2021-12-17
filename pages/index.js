import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
const [chatWidth, setChatWidth] = useState(0)
  
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  function openNav() {
    document.getElementById("chatbox").style.width = "50%";
    // document.getElementById("main").style.marginLeft = "50%";
  }

  const openChat = () => {
    
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeChat() {
    document.getElementById("chatbox").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
  }

  return (
    <div className="bg-gray-900 relative">
      <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width"/>
        <title>Best Bets Algo</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
    <main id="main" class="overflow-hidden">
      <header class="sticky top-0 z-30">
        {/* <!-- Nav --> */}
        <div class="text-white bg-gray-900/70 body-font">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">BestBetsAlgo</span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
              {/* <!-- <a class="mr-5 hover:text-white">Fourth Link</a> --> */}
            </nav>
            <button class="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-500 rounded text-base mt-4 md:mt-0">Log In
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            
            <label class="btn btn-sm btn-primary mx-2 sticky" onClick={() => openNav()}>open chat</label>

          </div>
        </div>

      </header>

      {/* <!-- Hero --> */}
      <section class="text-gray-400 bg-gray-900 body-font lg:relative">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center lg:w-5/6 lg:min-h-screen">
          <div class=" md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center z-10">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Bet on Sports using Data Science</h1>
            <p class="mb-8 leading-relaxed">NBA | NFL | MLB | NHL</p>
            <div class="flex w-full md:justify-start justify-center items-end">
              <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <label for="hero-field" class="leading-7 text-sm text-gray-400">Email</label>
                <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-blue-900 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
            </div>
          </div>
          <div class="lg:max-w-4xl z-0 lg:w-full md:w-1/2 w-5/6 lg:mt-24 lg:absolute lg:inset-y-0 lg:-right-1/4 xl:-right-12">
            <img class="object-cover object-center rounded" alt="hero" src="https://props.cash/desktop.png"/>
          </div>
        </div>
      </section>

      {/* <!-- Testimonial --> */}
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 mt-5 pb-24 mx-auto">
        <h1 class="text-3xl text-center text-white mb-12">Tweet testimonials</h1>
          <div class="flex flex-wrap -m-4 justify-center">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              {/* <blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Like anything in life, it’s all about the approach. Absolutely no fool’s errand.<br><br>Don’t listen to the experts, actually look at data and don’t play everything!<br><br>Me and all my guys at <a href="https://twitter.com/BestBetsAlgo?ref_src=twsrc%5Etfw">@BestBetsAlgo</a> been eating all year 🤷🏽‍♂️ </p>&mdash; BNA bettor (@KHBets615) <a href="https://twitter.com/KHBets615/status/1469693588904755208?ref_src=twsrc%5Etfw">December 11, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
            </div>
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              {/* <blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Hey! That&#39;s me! Seriously though. This Discord has so much to offer. From the models, to the bots, to the people. I can almost guarantee you&#39;ll make the $20 in the 7 day trial.</p>&mdash; Tyger (@TyTyger7) <a href="https://twitter.com/TyTyger7/status/1469547222622564364?ref_src=twsrc%5Etfw">December 11, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Features --> */}
      <section class="text-gray-400 bg-gray-900 body-font mx-auto">
        <div class="text-center w-3/5 mx-auto">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">A science based approach to betting using data points you would've never even thought about</h1>
            <p class="text-xl leading-relaxed text-gray-400 text-opacity-80">The average bettor researches between 3-8 data points when making decisions; our prediction model researches over 100 data points from each sports, down to the individual player level.</p>
          </div>
        <div class="container pb-5 py-24 mx-auto flex flex-wrap lg:w-4/5">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img alt="feature" class="object-cover object-center" src="https://bestbetsalgo.vercel.app/assets/BestBetsPick1.jpg"/>
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-3xl title-font font-bold mb-3">Our Mission</h2>
                <p class="leading-relaxed text-lg font-semibold">To become the ultimate source of data to help bettors win more money</p>
              </div>
            </div>

            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">Easy to use</h2>
                <p class="leading-relaxed text-base">Our models push out easy to read guides to tell you what is favored to win, based on our machine-learning models.</p>
                <p class="leading-relaxed text-base">Have a free bet, boost, or risk-free bet? Use our custom software to see how you can make the most out of that bet!</p>
              </div>
            </div>

            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">Continuously improving</h2>
                <p class="leading-relaxed text-base">Our machine-learning prediction model uses data that dates back 5+ years in each sport. It also updates weekly from the most recent games played to get a better understanding of how games and players are performing NOW!</p>
              </div>
            </div>

            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">Data on data on data</h2>
                <p class="leading-relaxed text-base">Like team and player props? Be sure to stay tuned to check out our prop bot, coming soon!</p>
              </div>
            </div>
            
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">The science</h2>
                <p class="leading-relaxed text-base">Data science is easily becoming the most important tool in the world. What a better way to use it in one of the most data driven businesses in the world? Our machine-learning models continuously weigh the most important data points and adjust accordingly to what is important and what is not important to help guide you to better bets. We are not cappers. We use science to help guide you to make more informed wagers!</p>
              </div>
            </div>

            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">A family</h2>
                <p class="leading-relaxed text-base">When we say family, we don't mean the people who built the site or models. We mean the community who have been with us since our discord days from the beginning! We have people that bleed props. We have people that get insider info to how players are feeling, how teams lost sleep, and any other random thing you might could think of-- we've seen and heard it all. If you'd like to join our discord chat, we have our chat built right into the website, so you have everything in one place!</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>


      {/* <!-- Pricing --> */}
      <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Subscription</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">2 plans to choose from</p>
          </div>
          <div class="flex flex-wrap -m-4 justify-center">
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">BUSINESS</h2>
                <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                  <span>$19</span>
                  <span class="text-lg ml-1 font-normal text-gray-400">/mo</span>
                </h1>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Tumeric plaid portland
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Hexagon neutra unicorn
                </p>
                <button class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Pick this plan
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">SPECIAL</h2>
                <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                  <span>$199</span>
                  <span class="text-lg ml-1 font-normal text-gray-400">/yr</span>
                </h1>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Tumeric plaid portland
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Hexagon neutra unicorn
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p class="flex items-center text-gray-400 mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Mixtape chillwave tumeric
                </p>
                <button class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Pick this plan
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>

    {/* Chatbox sidebar */}
    <div id="chatbox" class="mb-10 z-50" 
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
      <section class="text-gray-400 bg-transparent body-font relative">
        <button class="btn glass border-0 absolute top-0 right-0" onClick={() => closeChat()}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="flex justify-center md:h-screen">
          {/* <!-- <div class="blur-sm relative">
            <img src="/assets/DiscordChat.png"/>

          </div>
          <div class="absolute mt-6">
            <button class="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">
              <svg class="h-6 w-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
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
