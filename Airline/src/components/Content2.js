
function Content2(){
    return(
        <section className="relative w-100 block h-128 bg-gray-200">
            <p className="relative text-3xl top-5 mb-7 sm:text-[1.5rem] text-center">Let's explore places together</p>
            <p className="relative text-center sm:text-[14px] mb-10">Discover the atest offers and news and start planning your next trip with us</p>
            <div className="relative w-100 sm:w-[100%] sm:max-w-[98%] sm:m-auto flex h-5/6">
                <div className="relative mb-10 flex lg:w-4/5 md:w-[100%] md:max-w-[97%] m-auto">
                <div className="relative mr-4 w-3/6 h-6/6 block bg-white rounded-2xl">
                    <div className="relative w-100 h-5/6 2xl:h-4/5 bg-cover bg-no-repeat rounded-t-2xl bg-[url('./img/pexels-manprit-kalsi-1537086.jpg')]">
                        <p className="relative text-white text-lg ml-3 font-light top-96">Explore all our Destinations</p>
                    </div>
                    <p className="relative mt-5 ml-3 font-light">Find available flights</p>
                </div>
                <div className="relative w-3/6 rounded-2xl block h-5/6">
                    <div>
                        <div className="relative w-100 mb-5 flex rounded-2xl bg-white h-40">
                            <img className="relative lg:w-[100%] md:max-w-[45%] sm:w-[100%] sm:max-w-[50%] md:w-[100%] rounded-l-2xl h-4/4" src={require('../img/pexels-pixabay-460672.jpg')}/>
                            <div className='relative w-5/6 h-4/4'>
                                <p className='relative font-semibold sm:text-[14px] mt-2 mb-2 ml-3 '>Fly to over 230 cities around the world</p>
                                <p className='relative text-gray-500 text-sm ml-3'>Great fares and seamless connection with our partners</p>
                                <a className='relative ml-3 sm:text-[14px] top-3 text-red-700' href='google.com'>Book now</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative w-100 mb-5 flex rounded-2xl bg-white h-40">
                            <img className="relative w-52  md:w-[100%] md:max-w-[45%] sm:w-[100%] sm:max-w-[50%] rounded-l-2xl h-4/4" src={require('../img/pexels-magda-ehlers-2861656.jpg')}/>
                            <div className='relative w-4/6 h-4/4'>
                                <p className='relative font-semibold sm:text-[14px] mt-2 mb-2 ml-3 '>Shop and dine before you fly</p>
                                <p className='relative text-gray-500 text-sm ml-3'>Discover worldwide exclusives, luxury shopping and dinning</p>
                                <a className='relative ml-3 top-3 sm:text-[14px] text-red-700' href='google.com'>Discover</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative w-100 flex rounded-2xl bg-white h-40">
                            <img className="relative w-52 md:w-[100%] md:w-[45%] sm:w-[100%] sm:max-w-[50%] rounded-l-2xl h-4/4" src={require('../img/pexels-asad-photo-maldives-1024967.jpg')}/>
                            <div className='relative w-4/6 h-4/4'>
                                <p className='relative font-semibold sm:text-[14px] mt-2 mb-2 ml-3 '>Explore the world with Cash</p>
                                <p className='relative text-gray-500 text-sm ml-3'>Simply log in to your Privilege Club account, search for a flight </p>
                                <a className='relative ml-3 top-3 sm:text-[14px] text-red-700' href='google.com'>Discover more</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        </section>
    )
}
export default Content2;