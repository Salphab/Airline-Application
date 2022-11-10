import {useRef,useEffect} from 'react';
import {Link} from 'react-router-dom';
function HeaderContainer(){
    const arrowabout = useRef('null');
    const countrysidebar = useRef('null');
    const arrowservice = useRef('null');
    const aboutbar = useRef('null');
    const servicebar = useRef('null');
    useEffect(()=>{
        document.title = 'Home | Random Airline makes travel easy'
    },[])
    return(
        <>
            <section className="lg:flex relative lg:w-100 h-20 bg-gray-800 md:flex sm:flex sm:w-[100%] sm:max-w-[100%]  ">
                <div className="relative flex lg:w-[100%] sm:h-12 lg:max-w-[70%] sm:w-[100%] sm:max-w-[100%] lg:m-auto lg:h-100 md:h-100 sm:h-[65%] sm:m-auto md:w-100% md:max-w-[85%]">
                    <div className="lg:w-[100%] lg:max-w-[20%] sm:w-[100%] sm:max-w-[15%] sm:mr-[2%] lg:mr-[4%] relative lg:left-5 lg:h-[10.5%] lg:top-[2%] bg-white rounded mx-6 md:h-[10.5%] md:top-[2%] md:w-[100%] md:max-w-[20%] md:mx-2">
                    </div>
                    <div className="relative lg:w-[100%] sm:mr-4 lg:max-w-[fit-content] sm:top-[0%] lg:top-3 sm:w-[100%] sm:max-w-[80%] lg:h-14 md:h-[10.3%] sm:h-[100%] lg:left-0 md:top-3 bg-white rounded md:w-[100%] md:max-w-[fit-content] ">
                        <ul className="relative lg:flex sm:top-2 xl:w-[100%] xl:max-w-[90%] lg:top-0 lg:m-auto sm:w-[100%] sm:max-w-[90%] sm:m-auto sm:flex lg:h-14 lg:w-[100%] lg:max-w-[fit-content] md:flex md:w-[100%] md:max-w-[90%] md:m-auto md:h-10">
                            <Link to="google.com" className="lg:m-auto text-gray-500 sm:text-[13px] sm:text-medium"><li className=" relative lg:mx-10 lg:pl-7 md:left-[-25%] xl:left-[-25%] xl:top-[-5%] sm:mt-1 md:mt-[10%] md:mr-2 sm:ml-8 lg:text-center md:my-4 lg:h-7 sm:font-semibold sm:text-[13px] font-semibold ">Home</li></Link>
                            <Link to="google.com" className="lg:m-auto md:mx-5 flex text-gray-500" onMouseOver={(e)=>{
                                e.preventDefault;
                                arrowabout.current.style.transform = 'rotate(180deg)';
                                aboutbar.current.style.display = 'block';
                            }} onMouseLeave={(e)=>{
                                e.preventDefault;
                                arrowabout.current.style.transform = 'rotate(0deg)';
                                aboutbar.current.style.display = 'none';
                            }}><li className="relative lg:mr-2 md:mx-2 md:mt-[13%] lg:mt-[17%] xl:left-[-25%] sm:mt-1 md:my-4 text-center h-7 sm:font-semibold sm:text-[13px] sm:ml-[20%] md:left-[-25%] xl:left-[20%] font-semibold">About</li><i class='bx bx-chevron-down xl:ml-[-25%] md:ml-[-30%] xl:ml-[15%] lg:my-3 xl:my-3 md:mt-[10%] 2xl:my-3 md:my-3 lg:mr-5 md:mr-0 md:my-4 text-lg hover:rotate-180' ref={arrowabout}></i></Link>
                            <Link to="google.com" className="lg:m-auto text-gray-500"><li className="lg:mx-0 sm:ml-5 sm:mt-1 md:ml-[-25%] md:mx-[-17%] lg:my-4 sm:font-sembold md:mt-[16%] sm:text-[13px] lg:pr-8 md:mr-5 lg:w-[150%] lg:max-w-[150%] md:w-[150%] text-center lg:h-7 font-semibold">Contact Us</li></Link>
                            <Link to="google.com" className="lg:m-auto flex md:mx-5   text-gray-500" onMouseOver={(e)=>{
                                e.preventDefault;
                                arrowservice.current.style.transform = 'rotate(180deg)';
                                servicebar.current.style.display = 'block'
                            }} onMouseLeave={(e)=>{
                                e.preventDefault;
                                arrowservice.current.style.transform = 'rotate(0deg)';
                                servicebar.current.style.display = 'none';
                            }}><li className="relative lg:mx-1 md:mt-[13%] lg:ml-10 sm:mt-1 sm:ml-5 sm:font-semibold text-center md:my-4 sm:text-[13px] h-7 md:ml-5 font-semibold">Services</li><i class='bx bx-chevron-down md:mt-[10%] lg:mr-5 lg:my-3 xl:my-3 2xl:my-3 md:my-3 text-lg hover:rotate-180' ref={arrowservice}></i></Link>
                            <Link to="google.com" className="lg:m-auto md:mx-4 text-gray-500"><li className="relative lg:mx-5 sm:ml-5 sm:mt-1 md:pr-7 md:top-1 lg:mt-[12%] sm:font-semibold sm:text-[13px] text-center md:my-4 md:ml-0 lg:p md:mt-[13%]  r-5 h-7 font-semibold">Career</li></Link>
                        </ul>
                    </div>
                    <div className='relative lg:w-[100%] lg:max-w-[10%] sm:w-[100%] sm:max-w-[15%] md:w-[100%] md:max-w-[10%] lg:left-[5%] md:left-[5%]'>
                    <button className="relative flex sm:w-[100%] sm:max-w-[60%] xl:w-[100%] xl:max-w-[65%] md:w-[100%] md:max-w-[75%] lg:w-[100%] lg:max-w-[70%] lg:h-10 md:h-10 sm:h-8 sm:top-[-25%] lg:top-[0%] md:top-[0%] md:left-[-30%] lg:left-[-30%] sm:mt-6 focus:outline-none" onClick={(e)=>{
                        e.preventDefault;
                        if(countrysidebar.current.style.transform === ''){
                            countrysidebar.current.style.transform = 'translate(300%,12%)';
                        }
                        else if(countrysidebar.current.style.transform === 'translate(300%, 12%)'){
                            countrysidebar.current.style.transform = 'translate(400%,12%)';
                        }
                        else 
                        countrysidebar.current.style.transform = 'translate(300%, 12%)';
                    }}>
                        <img className='relative md:w-[100%] md:max-w-[fit-content] 2xl:w-[100%] 2xl:max-w-[45%] 2xl:top-1 lg:w-[100%] lg:max-w-[fit-content] lg:h-7 sm:w-[100%] sm:h-6 sm:max-w-[40%] sm:top-1 md:mr-[2%] md:top-2 md:max-w-[35%] md:h-6 rounded-lg' src={require('../img/flags/united-states-of-america.png')}/>
                        <span className='relative text-white md:text-[14px] 2xl:top-2 md:top-[25%] sm:top-[20%] sm:text-sm sm:ml-1'>US</span>
                    </button>
                    </div>
                    <div className='absolute w-36 lg:top-10 xl:top-10 md:top-10 2xl:w-[100%] 2xl:left-[33%] 2xl:w-[100%] 2xl:max-w-[11%] rounded hidden lg:w-[100%] lg:max-w-[16%] xl:w-[100%] xl:max-w-[13%] sm:h-36 sm:w-[100%] sm:max-w-[17%] sm:top-9 sm:left-[30%] left-35 xl:left-[36%] h-2/6 z-50 bg-white' ref={aboutbar} onMouseOver={(e)=>{
                        e.preventDefault;
                        e.currentTarget.style.display = 'block';
                        arrowabout.current.style.transform ='rotate(180deg)';
                    }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        e.currentTarget.style.display = 'none';
                        arrowabout.current.style.transform ='rotate(0deg)';
                    }}>
                        <ul className='relative  sm:top-[0%] m-auto top-5 w-5/6 h-5/6'>
                            <Link to='google.com'><li className='relative text-sm font-semibold sm:font-medium text-gray-500 hover:text-black sm:mb-2 sm:text-[13px] mb-3 ml-1'>Vision</li></Link>
                            <Link to='google.com'><li className='relative text-sm font-semibold sm:font-medium text-gray-500 hover:text-black sm:mb-2 sm:text-[13px] mb-3 ml-1'>Mission</li></Link>
                            <Link to='google.com'><li className='relative text-sm font-semibold sm:font-medium text-gray-500 hover:text-black sm:mb-2 sm:text-[13px] mb-3 ml-1'>Partners</li></Link>
                            <Link to='google.com'><li className='relative text-sm font-semibold sm:font-medium text-gray-500 hover:text-black sm:mb-2 sm:text-[13px] mb-3 ml-1'>Collaboration</li></Link>
                            <Link to='google.com'><li className='relative text-sm font-semibold sm:font-medium text-gray-500 hover:text-black sm:mb-2 sm:text-[13px] mb-3 ml-1'>Awards</li></Link>
                        </ul>
                    </div>
                    <div className='absolute w-36 lg:top-10 xl:top-10 md:top-[12%] 2xl:left-[55%] 2xl:top-10
                                    rounded xl:w-[100%] xl:max-w-[13%] xl:w-[100%] xl:max-w-[13%]
                                    2xl:w-[100%] 2xl:max-w-[11%] xl:left-[60%] sm:w-[100%] sm:max-w-[17%] 
                                    lg:w-[100%] lg:max-w-[15%] sm:h-32 sm:left-[57%] sm:top-9 right-21 hidden 
                                    lg:h-[25%] md:h-[25%] xl:h-[25%] 2xl:h-[25%] z-50 bg-white' ref={servicebar} onMouseOver={(e)=>{
                        e.preventDefault;
                        e.currentTarget.style.display = 'block';
                        arrowservice.current.style.transform ='rotate(180deg)';
                    }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        e.currentTarget.style.display = 'none';
                        arrowservice.current.style.transform ='rotate(0deg)';
                    }}>
                        <ul className='relative m-auto top-5 sm:top-0 w-5/6 h-5/6'>
                            <Link to='google.com'><li className='relative text-sm font-semibold text-gray-500 hover:text-black sm:text-[13px] sm:font-medium sm:mb-2 mb-3 ml-1'>International flight</li></Link>
                            <Link to='google.com'><li className='relative text-sm font-semibold text-gray-500 hover:text-black sm:text-[13px] sm:font-medium sm:mb-2 mb-3 ml-1'>Cargo Carrier</li></Link>
                            <Link to='google.com'><li className='relative text-sm font-semibold text-gray-500 hover:text-black sm:text-[13px] sm:font-medium sm:mb-2 mb-3 ml-1'>Logistic</li></Link>
                            <Link to='google.com'><li className='relative text-sm font-semibold text-gray-500 hover:text-black sm:text-[13px] sm:font-medium sm:mb-2 mb-3 ml-1'>Group Travels</li></Link>
                        </ul>
                        
                    </div>
                </div>
                <div className="absolute lg:w-[25%] sm:w-[100%] sm:max-w-[25%] sm:h-128 sm:z-50 md:w-[25%] 2xl:w-[25%] xl:w-[25%] lg:h-128 md:h-[42rem] translate-x-[400%]  block transition-all ease-in-out duration-300 delay-100 sm:translate-y-20 lg:translate-y-20 md:translate-y-20  bg-white lg:z-50 md:z-50" ref={countrysidebar}>
                    <div className='relatve w-100 h-1/5'>
                        <p className='relative font-semibold lg:text-md md:mt-[3%] md:mb-[1%] md:text-md sm:ml-2 sm:text-[13px] lg:pt-2 lg:mb-2 lg:ml-5 md:ml-5'>America</p>
                        <div className='relative flex w-72 ml-5 h-24'>
                            <div className='relative lg:w-2/4 md:w-[34%] sm:left-[-4%] lg:h-[20%] mr-2'>
                                <ul>
                                    <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>United states</li></Link>
                                    <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Canada</li></Link>
                                    <Link to='google.com'><li  className='relative mb-1 text-sm sm:text-[12px]'>Mexico</li></Link>
                                    <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Chile</li></Link>
                                </ul>
                            </div>
                            <div className='relative lg:w-2/4 md:w-[34%] lg:h-[20%]'>
                                <ul>
                                <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Venezuela</li></Link>
                                    <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Brasil</li></Link>
                                    <Link to='google.com'><li  className='relative mb-1 text-sm sm:text-[12px]'>Colombia</li></Link>
                                    <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Argentina</li></Link>
                                </ul>
                            </div>
                        </div>
                    <div/>    
                    <div className='relatve w-100 h-24 pt-3'>
                        <p className='relative font-semibold lg:text-md md:mb-[1%] sm:ml-2 sm:text-[13px] md:text-md lg:pt-2 lg:mb-2 lg:ml-5 md:ml-5'>Middle East</p>
                        <div className='relative flex w-72 ml-5 h-14'>
                            <div className='relative lg:w-[50%] sm:left-[-4%] md:w-[100%] md:w-[30%] lg:h-5/6 lg:mr-2 md:mr-5'>
                                <ul>
                                        <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Saudi Arabia</li></Link>
                                        <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Dubai UAE</li></Link>
                                </ul>
                            </div>
                            <div className='relative lg:w-[50%] sm:left-3 md:w-[100%] md:w-[30%] lg:h-5/6 mr-2'>
                                <ul>
                                    <Link to='google.com'><li className='relative  mb-1 text-sm sm:text-[12px]'>Qatar</li></Link>
                                    <Link to='google.com'><li className='relative  mb-1 text-sm sm:text-[12px]'>Dubai</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='relatve w-100 h-40 pt-3'>
                        <p className='relative font-semibold lg:text-md sm:text-[13px] sm:ml-2 md:text-md md:mb-[1%] lg:pt-2 lg:mb-2 lg:ml-5 md:ml-5'>Europe</p>
                        <div className='relative flex w-72 ml-5 h-14'>
                            <div className='relative lg:w-[50%] sm:left-[-4%] md:w-[100%] md:w-[30%] lg:h-5/6 md:h-[fit-content] lg:mr-2 md:mr-5'>
                                <ul>
                                        <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>England UK</li></Link>
                                        <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Germany</li></Link>
                                        <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Italy</li></Link>
                                        <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Turkey</li></Link>
                                </ul>
                            </div>
                            <div className='relative lg:w-[50%] md:w-[100%] sm:left-5 md:w-[30%] lg:h-5/6 md:h-[fit-content] lg:mr-2 md:mr-5'>
                                <ul>
                                    <Link to='google.com'><li className='relative  mb-1 text-sm sm:text-[12px]'>Spain</li></Link>
                                    <Link to='google.com'><li className='relative  mb-1 text-sm sm:text-[12px]'>Frence</li></Link>
                                    <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Portugal</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='relatve w-100 h-24'>
                        <p className='relative font-semibold sm:text-[13px] lg:text-md sm:ml-2 md:text-md lg:pt-2 lg:mb-2 lg:ml-5 md:ml-5'>Africa</p>
                        <div className='relative flex w-72 ml-5 h-14'>
                            <div className='relative lg:w-[50%] sm:left-[-4%] md:w-[100%] md:w-[30%] lg:h-5/6 md:h-[fit-content] lg:mr-2 md:mr-5'>
                                <ul>
                                        <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>South Africa</li></Link>
                                        <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Nigeria</li></Link>
                                        <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Egypt</li></Link>
                                        <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Morocco</li></Link>
                                </ul>
                            </div>
                            <div className='relative lg:w-[50%] md:w-[100%] sm:left-5 md:w-[30%] lg:h-5/6 md:h-[fit-content] lg:mr-2 md:mr-5'>
                                <ul>
                                    <Link to='google.com'><li className='relative  mb-1 text-sm sm:text-[12px]'>Kenya</li></Link>
                                    <Link to='google.com'><li className='relative  mb-1 text-sm sm:text-[12px]'>Rwanda</li></Link>
                                    <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Ethiopia</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='relatve w-100 h-24 pt-9'>
                        <p className='relative font-semibold sm:text-[13px] sm:ml-2 lg:text-md md:text-md lg:pt-2 lg:mb-2 lg:ml-5 md:ml-5'>Asia</p>
                        <div className='relative flex w-72 ml-5 h-14'>
                            <div className='relative lg:w-[50%] sm:left-[-4%] md:w-[100%] md:w-[30%] lg:h-5/6 md:h-[fit-content] lg:mr-2 md:mr-5'>
                                <ul>
                                        <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>China</li></Link>
                                        <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Japan</li></Link>
                                        <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>India</li></Link>
                                        <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Lebanon</li></Link>
                                </ul>
                            </div>
                            <div className='relative lg:w-[50%] md:w-[100%] sm:left-11 md:w-[30%] lg:h-5/6 md:h-[fit-content] lg:mr-2 md:mr-5'>
                                <ul>
                                    <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Japan</li></Link>
                                    <Link to='google.com'><li className='relative  mb-1 text-sm sm:text-[12px]'>Singapore</li></Link>
                                    <Link to='google.com'><li className='relative  mb-1 text-sm sm:text-[12px]'>Malaysia</li></Link>
                                    <Link to='google.com'><li className='relative mb-1 text-sm sm:text-[12px]'>Israel</li></Link>                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
export default HeaderContainer;