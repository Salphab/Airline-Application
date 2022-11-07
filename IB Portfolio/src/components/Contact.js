import './Contact.css';

function Contact(){
    return(
        <>
            <section className='contactcontainer'>
            <div id='contactheader'>
                <h1>Contact Me</h1>
                <p>You can reach out to me here, I will be at your service</p>
            </div>
                <div id='contact'>
                    <div id='contactmain'>
                        <div id='contactform'>
                            <form method='POST' action=''>
                                <input type='text' name='clientName' id='clientname' placeholder='Client Name'/>
                                <input type='text'name='subject' id='subject' placeholder='Subject'/>
                                <input type='email' name='email' id='email' placeholder='Email Address'/>
                                <textarea name='message' id='text' placeholder='Message'/>
                                <input type='submit' id='submit' value='Submit Response'/>
                            </form>
                        </div>
                        <div id='contactmedia'>
                            <div className='media'>
                                <i class='bx bxs-home'></i>
                                <span>No 21 Somoye Osundairo Ave, Lagos NG </span>
                            </div>
                            <div className='media'>
                               <a href='https://wa.me/+2348032645980'>
                                <i class='bx bxl-whatsapp' ></i>
                                </a>
                                <a href='https://t.me/salphab' id='medialink-2'>
                                    <span> Click to chat me up on Whatsapp</span>
                                </a>
                            </div>
                            <div className='media'>
                                <a href='https://t.me/salphab'>
                                    <i class='bx bxl-telegram'></i>
                                </a>
                                <a href='https://t.me/salphab' id='medialink-2'>
                                    <span> Reach me within a click on telegram</span>
                                </a>
                                
                            </div>
                        </div>                        
                    </div>
                    <div id='contactaesthetics'>

                    </div>
                </div>
                <div className='copy-footer'>
                    <p>Website Created by Badmus Ibrahim</p>
                </div>
            </section>
        </>
    )
}
export default Contact;
