import { useEffect, useRef } from 'react';
import bagThem from '../assets/bacgThem.jpg';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

function Hero() {

    const videoRef = useRef < HTMLVideoElement > (null);

    useEffect(() => {
        const playVideo = async () => {
            try {
                if (videoRef.current) {
                    await videoRef.current.play();
                }
            } catch (err) {
                console.log("Autoplay blocked by Chrome:", err);
            }
        };
        playVideo();
    }, []);

    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                <a href="#" className="inline-flex justify-between items-center max-w-xl py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                    <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">New</span> <Marquee className="text-sm font-medium tracking-wider" direction="left" speed={50} pauseOnHover={true} gradient={false}>
                        <ul className='flex gap-x-2 font-bold'>
                            <li className='mr-2'><Link to="#">Nextnix - IT solution launched new offer. She What's new.? ,</Link></li>
                            <li className='mr-2'><Link to="#">New Video Uploded very soon, </Link></li>
                            {/* <li className='mr-2'><Link to="#">Notification, </Link></li> */}
                        </ul>
                    </Marquee>
                    <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                </a>

                <h1 className="mb-4 text-4xl font-extrabold md:text-6xl lg:text-[5.2rem] font-unna text-transparent bg-clip-text bg-gradient-to-r to-blue-900 from-emerald-600"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-blue-900 font-unna font-medium">Simple Digital Solutions, <br /> </span> Big Impact for Your Growth.</h1>
                <p className="mb-8 text-lg font-medium text-gray-500 md:text-[1.3rem] lg:text-xl sm:px-16 lg:px-48 dark:text-[#12456c] font-unna tracking-wider">Learn coding, build real skills and grow your digital presence with practical lessons and easy-to-follow guides.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center items-center sm:space-y-0 md:space-x-4">
                    <Link
                        to="#"
                        className="text-white bg-[#163585] hover:bg-[#163585] tracking-wider font-bold leading-snug focus:ring-4 focus:outline-none focus:ring-[#5EE587]/50 rounded-md px-3 py-1.5 text-center inline-flex items-center font-unna  text-base sm:text-lg transition-all duration-300 hover:scale-105"
                    >
                        Let's connect me
                        <svg
                            className="rtl:rotate-180 w-4 h-4 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </Link>
                    <Link
                        to="#"
                        className="text-[#12456c] hover:bg-[#163585] tracking-wider font-bold leading-snug hover:text-white focus:ring-4 focus:outline-none focus:ring-[#5EE587]/50 rounded-md px-3 py-1.5 text-center inline-flex items-center font-unna  text-base sm:text-lg transition-all duration-300 hover:scale-105"
                    >
                        Explore Our Services
                        <svg
                            className="rtl:rotate-180 w-4 h-4 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </Link>
                </div>
            </div>

            <img
                alt='bagThem'
                src={bagThem}
                className="w-5/6 h-full max-w-1/6 mx-auto rounded-lg md:mb-[4rem] lg:mb-[4rem]"
            >
            </img>
            {/* <div className="bg-gradient-to-t from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0 rounded-b-3xl"></div> */}
        </section>
    )
};

export default Hero;