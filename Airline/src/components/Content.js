
function Content(props){
    return(
        <section className="relative w-100 block h-100 bg-gray-200">
            <p className="relative text-3xl top-5 mb-7 sm:text-[1.5rem] text-center">Start Planning your next trip with us</p>
            <p className="relative text-center mb-10 sm:w-[100%] sm:max-w-[80%] sm:text-[14px] sm:mb-[5%] sm:m-auto">Thinking of travelling somewhere soon? Here are some options to help you get started.</p>
            <div className="relative m-auto lg:w-4/5 sm:w-[100%] sm:max-w-[98%] md:w-[100%] md:max-w-[95%] flex h-5/6 md:max-w-[97%]">
                <a href="google.com" className="relative mr-4 w-3/6 sm:mr-2 h-5/6 block bg-white rounded-2xl">
                    <div className="relative w-100 h-5/6 bg-cover rounded-t-2xl bg-[url('./img/pexels-pixabay-38271.jpg')]">
                        <p className="relative text-white text-lg ml-3 font-light top-64">Explore all our Destinations</p>
                    </div>
                    <p className="relative mt-5 ml-3 font-light">Find available flights</p>
                </a>
                <a href="google.com" className="relative w-1/4 mr-4 h-5/6 sm:mr-2 bg-white rounded-2xl">
                    <div className="relative w-100 h-5/6 bg-cover rounded-t-2xl bg-[url('./img/pexels-pixabay-237272.jpg')]">
                        <p className="relative text-white text-lg ml-2 font-light top-64">Make your holiday adventureous</p>
                    </div>
                    <p className="relative 2xl:mt-5 xl:mt-5 lg:mt-5 md:mt-5 ml-2 sm:mt-3 font-light">Book a Package here</p>
                </a>
                <div href="google.com" className="relative w-2/6 block h-5/6">
                    <a href="google.com" className="relative w-6/6 rounded-2xl mb-7 block h-44 bg-white">
                        <div className="relative w-100 h-3/4 bg-cover rounded-t-2xl bg-[url('./img/pexels-austin-zhang-2441844.jpg')]">
                            <p className="relative text-white text-lg ml-2 font-light top-24">Travel Requirement</p>
                        </div>
                    <p className="relative mt-2 ml-2 font-light">Find out for more</p>
                    </a>
                    <a href="google.com" className="relative w-6/6 rounded-2xl block h-44 bg-white">
                        <div className="relative w-100 h-3/4 bg-cover rounded-t-2xl bg-[url('./img/istockphoto-1335626952-612x612.jpg')]">
                            <p className="relative text-white text-lg ml-2 font-light top-24">Elevate your experience</p>
                        </div>
                        <p className="relative mt-2 ml-2 font-light">Purchase Add-ons</p>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Content;