
function Newsletter(){
 return(
    <section className="relative mb-5 bg-gray-200 w-100 h-96 ">
        <div className="relative w-4/5 xl:w-[100%] sm:w-[100%] sm:max-w-[98%] xl:max-w-[80%] rounded-2xl m-auto md:w-[100%] md:max-w-[97%] h-96 bg-[url('./img/pexels-oziel-gómez-840719.jpg')] bg-cover bg-bottom bg-no-repeat mb-0">
            <div className="relative xl:w-[100%] xl:max-w-[60%] sm:w-[100%] sm:max-w-[60%] w-4/6 h-96 float-right">
                <p className="relative mt-10 text-white sm:text-[1.2rem] text-2xl">Stay connected with our unlimited offers</p>
                <p className="relative mt-5 sm:text-[.9rem] text-white">Subscribe and be the first to receive our exclusive offers.</p>
                <form method="post" action="">
                    <input className="relative w-4/6 rounded-md xl:w-[100%] sm:h-9 xl:max-w-[60%] mt-14 sm:mt-5 placeholder:pl-1 placeholder:text-md  placeholder:text-light focus:outline-none mb-8 h-12" type='email' placeholder="Email Address..." name='newletter'/><br/>
                    <div className="relative flex w-5/6 h-2/6">
                        <input className="relative r-5 h-6 w-6 bg-black" type="checkbox" name="privacyagreement"/>
                        <p className="relative w-6/6 -500 ml-2 sm:text-[.9rem] text-white top-0">I would like to get offers and news from qatar airways. I have read and understoof the <a className="relative underline"href="google.com">privacy notice</a></p>
                    </div>
                    <input className="relative bg-black text-white sm:w-[100%] sm:max-w-[15%] sm:h-8 sm:text-[13px] rounded bg-opacity-50 w-28 h-10 font-semibold mt-5" type="submit" value="Subscribe"/>
                </form>
            </div>
        </div>
    </section>
 )   
}
export default Newsletter;