import {useRef} from "react";
import Aesthesticboard from "./Aestheticboard";

function Body(){
    const oneway = useRef('null');
    const date = new Date();
    const month = date;
    const day = date.getDay;
    const year = date.getFullYear;
    const time = date.getTime;

    return(
        <>
            <section className="relative lg:w-100 lg:max-w-[100%] md:w-[100%] md:max-w-[100%] lg:h-128 md:h-128 sm:h-128 lg:bg-no-repeat bg-cover bg-[url('./img/pexels-pixabay-163792.jpg')] lg:flex">
                <div className="relative lg:w-[100%] lg:max-w-[100%] 2xl:w-[100%] 2xl:max-w-[80%] 2xl:left-[10%] xl:left-[10%] xl:w-[100%] xl:max-w-[80%] md:w-[100%] md:max-w-[100%] md:left-0 sm:left-0 md:h-[100%] lg:left-0 lg:h-5/5 lg:flex md:flex sm:w-[100%] sm:left-[5%] sm:top-[10%] sm:max-w-[100%] sm:h-[65%] sm:flex">
                    <div className="relative lg:w-[100%] lg:max-w-[25%] md:w-[100%] md:max-w-[30%] sm:w-[100%] sm:max-w-[37%] sm:ml-6 2xl:left-[15%] xl:w-[100%] xl:max-w-[23%] md:w-[32%] lg:h-3/4 md:h-[70%] lg:top-12 md:top-[13%] rounded block lg:left-20 md:left-[5%] bg-gray-800 bg-opacity-60">
                        <div className="relative sm:w-[100%] sm:max-w-[100%] lg:w-100 xl:w-[100%] xl:max-w-[100%] md:w-[100%] h-14 bg-black rounded-t-md flex">
                            <i class='bx bxs-plane-take-off xl:text-[18px] sm:text-[18px] sm:top-[30%] sm:left-[5%] xl:top-4 relative lg:top-3 md:top-[25%] lg:left-5 md:left-[5%] lg:text-2xl md:text-[150%] text-white'></i>
                            <span className="relative text-white sm:top-[24%] sm:left-[10%] xl:top-5 font-bold xl:text-[14px] lg:top-4 md:top-[22%]">Book a Flight</span>
                        </div>
                        <form method="post" action="" className="relative lg:w-100 lg:max-w-[95%] sm:w-[100%] sm:max-w-[96%] sm:m-auto md:w-[100%] md:max-w-[100%] lg:pr-[0%] lg:pl-[0%] lg:mx-2 md:pl-[3%] md:pr-[3%] lg:top-6 sm:top-2 md:top-[4%] m-auto lg:h-5/6 md:h-[85%] block bg-opacity-40">
                            <div className="relative flex bg-gray-500 lg:h-9 sm:h-7 md:h-[8%] lg:mb-5 md:mb-[5%] sm:mb-3">
                                <p className="relative text-white lg:top-2 md:top-[20%] sm:top-1 lg:font-semibold md:font-semibold xl:font-semibold 2xl:font-semibold sm:font-medium  2xl:text-[13px] xl:text-[13px] lg:text-[13px] md:text-[13px] sm:text-[13px] lg:left-2 md:left-[3%] sm:left-[1%] lg:h-0 lg:mr-4 sm:mr-[3%] md:mr-[4%]">Payment </p>
                                <select className="relative lg:w-4/5 md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] sm:w-[80%] 2xl:text-[13px] xl:text-[13px] lg:text-[13px] md:text-[13px] sm:text-[13px] font-light focus:outline-none">
                                    <option value='Dollar' defaultChecked>Dollar (&#x24;)</option>
                                    <option value='Euro'>Euro (&#8364;)</option>
                                    <option value='Pounds'>Pounds (&#163;)</option>
                                    <option value='Srand'>SA Rand (&#82;)</option>
                                    <option value='Pounds'>Naira ( &#8358;)</option>
                                </select>
                            </div>
                            <div className="relative lg:h-8 md:h-[8%] sm:h-7 sm:mb-3 flex bg-gray-300 lg:mb-5 md:mb-[6%]">
                                <label className="relative lg:mr-2 md:mr-[3%] sm:mr-1 sm:top-1 sm:ml-1 lg:top-[20%] xl:top-[20%] 2xl:top-[20%] md:top-[18%] lg:left-1 md:left-[2%] lg:h-7 md:h-[8%] text-black 2xl:text-[13px] xl:text-[13px] lg:text-[13px] md:text-[13px] sm:text-[13px]">From</label>
                                <select className="relative lg:w-3/6 md:w-[40%] sm:w-[100%] sm:max-w-[40%] sm:text-[13px] 2xl:text-[13px] font-light bg-gray-500 text-white lg:mr-3 md:mr-[3%]">
                                    <option>London (UK)</option>
                                    <option>Johnsburg (SA)</option>
                                    <option>New York (US)</option>
                                    <option>Qatar (QA)</option>
                                    <option>Dubai UAE</option>
                                    <option>Seattle (US)</option>
                                </select>
                                <label className="relative lg:mr-2 md:mr-[3%] lg:top-2 md:top-[18%] sm:mr-1 sm:top-1 sm:ml-1 lg:left-0 lg:h-7 text-black 2xl:text-[13px] xl:text-[13px] lg:text-[13px] md:text-[13px] sm:text-[13px]">To</label>
                                <select className="relative lg:w-3/6 md:w-[37%] sm:w-[100%] sm:max-w-[40%] sm:text-[13px] font-light text-[13px] bg-gray-500 text-white">
                                    <option>Johnsburg (SA)</option>
                                    <option>London (UK)</option>
                                    <option>New York (US)</option>
                                    <option>Qatar (QA)</option>
                                    <option>Dubai UAE</option>
                                    <option>Seattle (US)</option>
                                </select>
                            </div>
                            <div className="relative lg:h-8 sm:h-7 md:h-[8%] flex bg-gray-300 xl:mb-5 2xl:mb-5 lg:mb-5 md:mb-[5%] sm:mb-3 ">
                                <button type='button' className="relative lg:w-[100%] sm:w-[100%] sm:max-w-[30%] lg:max-w-[30%] lg:left-[1%] lg:top-[0%] sm:left-[4%] md:text-[13px] xl:text-[13px] lg:text-[13px] sm:text-[13px] sm:top-1 md:left-[2%] flex lg:m-auto md:m-auto lg:w-[100%] md:w-[100%] lg:max-w-[fit-content] md:max-w-[35%] md:top-0 text-[13px] lg:ml-5 md:ml-[5%]" onClick={(e)=>{
                                    e.preventDefault;
                                    oneway.current.style.display = 'none';
                                }}>One Way <img className="relative lg:w-[100%] lg:max-w-[20%] xl:w-[100%] xl:max-w-[20%] 2xl:w-[100%] 2xl:max-w-[20%] sm:w-[100%] sm:max-w-[17%] sm:h-[40%] sm:top-[23%] sm:ml-[2%] md:h-3 md:w-[100%] md:max-w-[18%] lg:ml-1 md:ml-[2%] lg:top-1 md:top-1 md:ml-1 lg:h-[40%]" src={require('../img/icons/5854296.png')}/></button>
                                <button type='button' className="relative flex sm:w-[100%] sm:max-w-[25%] sm:left-6 md:text-[12px] sm:text-[13px] sm:top-[10%] lg:left-[-18%] md:left-[-18%] xl:text-[12px] lg:w-[100%] lg:max-w-[fit-content] xl:w-[100%] xl:max-w-[fit-content] 2xl:w-[100%] 2xl:max-w-[fit-content] md:top-[0%] md:m-auto text-[13px] lg:ml-4 md:ml-[8%]" onClick={(e)=>{
                                    e.preventDefault;
                                    oneway.current.style.display = 'flex';
                                }}>Return <img className="relative lg:w-[100%] lg:max-w-[25%] sm:w-[100%] sm:max-w-[20%] sm:h-[40%] sm:top-[22%] xl:w-[100%] xl:max-w-[25%] 2xl:w-[100%]  2xl:max-w-[25%] md:w-[8%] lg:ml-1 md:ml-[2%] sm:ml-[2%] lg:top-1 md:top-2 lg:h-3 md:h-[3%]" src={require('../img/icons/211621_c_right_arrow_icon.png')}/></button>
                            </div>
                            <div className="relative sm:h-7 sm:mb-3 lg:h-8 md:h-[8%] flex bg-gray-300 lg:mb-5 md:mb-[6%] ">
                                <input className="focus:outline-none text-[13px] lg:w-[100%] lg:max-w-[40%] md:w-[100%] md:max-w-[40%] mx-5 text-white bg-gray-500 font-light" type='date' onChange={(e)=>{
                                    e.preventDefault;
                                    console.log(e.currentTarget.value.includes('-'))
                                }}/>
                                 <input className="focus:outline-none text-[13px] lg:w-[100%] lg:max-w-[40%] md:w-[100%] md:max-w-[40%] text-white bg-gray-500 font-light"  type='date' ref={oneway} onChange={(e)=>{
                                    e.preventDefault;
                                }}/>
                            </div>
                            <div className="relative lg:h-6 md:h-[8%] flex bg-none mb-5 md:mb-[5%] sm:mb-3 ">
                                <div className="relative flex lg:w-[100%] sm:w-[100%] sm:max-w-[50%] lg:max-w-[50%] md:w-[100%] md:max-w-[50%]">
                                    <select className="relative lg:w-[100%] lg:max-w-[85%] md:w-[100%] md:max-w-[85%] sm:w-[100%] sm:max-w-[80%] text-[13px] font-light bg-gray-500 text-white">
                                        <option>1 Adult</option>
                                        <option>2 Adult</option>
                                        <option>3 Adult</option>
                                        <option>4 Adult</option>
                                        <option>5 Adult</option>
                                        <option>6 Adult</option>
                                        <option>7 Adult</option>
                                        <option>8 Adult</option>
                                        <option>9 Adult</option>
                                    </select>
                                    <i class='bx bx-male text-xl text-white relative'></i>
                                </div>
                                <div className="relative flex lg:w-[100%] sm:w-[100%] sm:max-w-[50%] lg:max-w-[50%] md:w-[100%] md:max-w-[50%]">
                                    <select className="relative lg:w-[100%] lg:max-w-[85%] md:w-[100%] md:max-w-[85%] sm:w-[100%] sm:max-w-[80%] font-light text-[13px] bg-gray-500 text-white">
                                        <option>0 child</option>
                                        <option>1 Child</option>
                                        <option>2 Child</option>
                                        <option>3 Child</option>
                                        <option>4 Child</option>
                                        <option>5 Child</option>
                                        <option>6 Child</option>
                                        <option>7 Child</option>
                                        <option>8 Child</option>
                                        <option>9 Child</option>
                                    </select>
                                    <i class='bx bx-male text-xl text-white relative'></i>
                                </div>
                            </div>
                            <div className="relative lg:h-6 flex sm:mb-5 lg:mb-5 md:mb-[5%] md:h-[8%]">
                                <div className="relative flex lg:w-[100%] sm:w-[100%] sm:max-w-[100%] lg:max-w-[50%] md:w-[100%] md:max-w-[50%]">
                                    <select className="relative lg:w-[100%] lg:max-w-[85%] md:w-[100%] md:max-w-[85%] sm:w-[100%] sm:max-w-[40%] text-[13px] font-light bg-gray-500 text-white">
                                        <option>0 infant</option>
                                        <option>1 Infant</option>
                                        <option>2 Infant</option>
                                        <option>3 Infant</option>
                                        <option>4 Infant</option>
                                        <option>5 Infant</option>
                                        <option>6 Infant</option>
                                        <option>7 Infant</option>
                                        <option>8 Infant</option>
                                        <option>9 Infant</option>
                                    </select>
                                    <i class='bx bx-male text-xl relative text-white'></i>
                                </div>
                            </div>
                            <div className="relative lg:h-8 flex bg-gray-300 lg:mb-5 md:mb-[2%] sm:mb-7 sm:h-7 md:h-[8%] ">
                               <input className="relative lg:w-4/5 md:w-[100%] md:max-w-[80%] sm:w-[100%] sm:max-w-[80%] md:text-[13px] placeholder:text-[13px] focus:outline-none" type='text' placeholder="E-voucher"></input>
                            </div>
                            <input className="relative md:h-8 md:text-[12px] md:top-3 sm:w-[100%] sm:max-w-[30%] sm:h-7 sm:left-[35%] sm:font-semibold sm:text-[12px] xl:text-[14px] lg:text-[14px] xl:left-[30%] lg:left-[34%] md:left-[37%] md:w-[27%] lg:w-24 font-semibold rounded bg-white" type="submit" value="Continue"/>
                        </form>
                    </div>
                    <Aesthesticboard/>
                </div>
                <div className="absolute lg:w-1/4 bg:h-128 translate-x-hidden bg-white z-50">

                </div>
            </section>
        </>
    )
}
export default Body;