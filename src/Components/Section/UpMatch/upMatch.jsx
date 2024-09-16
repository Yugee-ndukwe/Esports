import '../UpMatch/upMatch.css';
import DRAGON from '../../../Assets/IMAGES/team-esports.svg';
import SPORT from '../../../Assets/IMAGES/team-esports2.svg';
import SPORT1 from '../../../Assets/IMAGES/team-esports3.svg';
import SPORT2 from '../../../Assets/IMAGES/team-esports4.svg';
import { FaTwitch } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from 'react';



export default function UpMatch(){
    const sectionRef = useRef();
    const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Trigger scroll effect only once
            if (!hasScrolledOnce && rect.top <= windowHeight && rect.bottom >= 0) {
                sectionRef.current.classList.add('scrolled-overlay');
            }

            // When half of the section is visible and it hasn't been triggered before
            if (!hasScrolledOnce && rect.top <= windowHeight / 2) {
                sectionRef.current.classList.add('scrolled-content');
                setHasScrolledOnce(true); // Set the flag to true to prevent it from running again
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolledOnce]); 
    return(
        <>
            <div className="container-fluid match" ref={sectionRef}>
                <div className="row match-container">
                    <div className="col-10 col-lg-10">
                        <div className="match-text">
                            <h1>upcoming match</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis convallis <br /> tortor, malesuada vitae tortor. Dignissim ac aliquam ut sed eu.</p>
                        </div>

                    </div>
                    <div className="col-12 col-lg-12 my-3 match-items">
                            <div className="first-match">
                                <div className="match-content">
                                    <div className='d-flex justify-content-between match-items'>
                                         <div className='tournament'>
                               <p>Terra</p>
                                <a href="https/www.twitch.com" className='title'>INTERNATIONAL TOURNAMENT, 2022</a>
                               <div className='watch'>
                            <div className='watch-item'>
                                <span><IoTimeOutline style={{fontSize: '30px', padding:'5px'}}/></span>
                                <span>December 10, 2022, 12 : 00 PM</span>
                            </div>
                            <div className='watch-item'>
                                <span>< FaTwitch style={{fontSize: '30px', padding:'5px'}}/></span>
                                <a href="https/www.twitch.com"> Watch Stream</a>
                            </div>
                        </div>

                               </div>
                                   
                            <div className='d-flex justify-content-center align-items-center sport-logo'>
                                <div className='dragon'> <img src={DRAGON} alt="sport" /></div>
                               <div style={{color: '#fff' , padding: '20px', fontSize: '30px'}}>VS</div>
                                <div className='dragon'> <img src={SPORT} alt="" /></div>
                            </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-lg-12 my-3 match-items">
                            <div className="second-match">
                                <div className="match-content">
                                    <div className='d-flex justify-content-between match-items'>
                                         <div className='tournament'>
                               <p>Terra</p>
                                <a href="https/www.twitch.com" className='title'>INTERNATIONAL TOURNAMENT, 2022</a>
                               <div className='watch'>
                            <div className='watch-item'>
                                <span><IoTimeOutline style={{fontSize: '30px', padding:'5px'}}/></span>
                                <span>December 10, 2022, 12 : 00 PM</span>
                            </div>
                            <div className='watch-item'>
                                <span>< FaTwitch style={{fontSize: '30px', padding:'5px'}}/></span>
                                <a href="https/www.twitch.com"> Watch Stream</a>
                            </div>
                        </div>

                               </div>
                                   
                            <div className='d-flex justify-content-center align-items-center sport-logo'>
                                <div className='dragon'> <img src={DRAGON} alt="sport" /></div>
                               <div style={{color: '#fff' , padding: '20px', fontSize: '30px'}}>VS</div>
                                <div className='dragon'> <img src={SPORT1} alt="sport" /></div>
                            </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-lg-12 my-3 match-items">
                            <div className="third-match">
                                <div className="match-content">
                                    <div className='d-flex justify-content-between match-items'>
                                         <div className='tournament'>
                                             <p>Fire Attack</p>
                                        <a href="https/www.twitch.com" className='title'>INTERNATIONAL TOURNAMENT, 2022</a>
                                    <div className='watch'>
                                    <div className='watch-item'>
                                        <span><IoTimeOutline style={{fontSize: '30px', padding:'5px'}}/></span>
                                        <span>December 10, 2022, 12 : 00 PM</span>
                                    </div>
                                    <div className='watch-item'>
                                        <span>< FaTwitch style={{fontSize: '30px', padding:'5px'}}/></span>
                                        <a href="https/www.twitch.com"> Watch Stream</a>
                                    </div>
                             </div>

                             </div>
                                   
                            <div className='d-flex justify-content-center align-items-center sport-logo'>
                                <div className='dragon'> <img src={DRAGON} alt="sport" /></div>
                               <div style={{color: '#fff' , padding: '20px', fontSize: '30px'}}>VS</div>
                                <div className='dragon'> <img src={SPORT2} alt="sport" /></div>
                            </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-10 col-lg-10 d-flex flex-column flex-wrap       justify-content-center align-items-center my-4 follow   ">
                        <p className='' >Follow us on Twitch to get notifications <br /> about our upcoming matches</p>
                        <div className='btn-container'>
                            <button className='follow-btn'>Follow us</button>
                        </div>
               </div>

                </div>
            </div>
        </>
    )
}



//  <div className="container-fluid macht-container">
//                 <div className="row match-content">
//                     <div className="col-10 col-lg-10">
//                     <div className='text-center match-text'>
//                     <h1>{matchTitle}</h1>
//                     <p>{matchText}</p>
//                     </div>


//                     </div>

//                     <div className="col-10 col-lg-12">
//                     <div className="match-images">
                        
//                         <div className="background-container my-4">
//                     <div className='first-image-content'>
                        
//                         <div className='d-flex justify-content-between image-text'>
//                             <div>
//                                <div className='tournament'>
//                                <p>Terra</p>
//                                 <a href="https/www.twitch.com" className='title'>INTERNATIONAL TOURNAMENT, 2022</a>
//                                <div className='watch'>
//                             <div className='watch-item'>
//                                 <span><TfiTimer style={{fontSize: '30px', padding:'5px'}}/></span>
//                                 <span>December 10, 2022, 12 : 00 PM</span>
//                             </div>
//                             <div className='watch-item'>
//                                 <span><IoChatboxEllipsesOutline style={{fontSize: '30px', padding:'5px'}}/></span>
//                                 <a href="https/www.twitch.com"> Watch Stream</a>
//                             </div>
//                         </div>

//                                </div>
//                             </div>
//                             <div className='d-flex justify-content-center align-items-center sport-logo'>
//                                 <div className='dragon'> <img src={DRAGON} alt="sport" /></div>
//                                <div>VS</div>
//                                 <div className='dragon'> <img src={SPORT} alt="" /></div>
//                             </div>
//                         </div>
                        
//                     </div>
//                     </div>
//                     <div className="background-container my-4">
//                     <div className='first-image-content'>
                        
//                         <div className='d-flex justify-content-between image-text'>
//                             <div>
//                                <div className='tournament'>
//                                <p>Solaris</p>
//                                 <a href="https/www.twitch.com" className='title'>INTERNATIONAL TOURNAMENT, 2022</a>
//                                <div className='watch'>
//                             <div className='watch-item'>
//                                 <span><TfiTimer style={{fontSize: '30px', padding:'5px'}}/></span>
//                                 <span>December 10, 2022, 12 : 00 PM</span>
//                             </div>
//                             <div className='watch-item'>
//                                 <span><IoChatboxEllipsesOutline style={{fontSize: '30px', padding:'5px'}}/></span>
//                                 <a href="https/www.twitch.com"> Watch Stream</a>
//                             </div>
//                         </div>

//                                </div>
//                             </div>
//                             <div className='d-flex justify-content-center align-items-center sport-logo'>
//                                 <div className='dragon'> <img src={DRAGON} alt="sport" /></div>
//                                <div>VS</div>
//                                 <div className='dragon'> <img src={SPORT1} alt="" /></div>
//                             </div>
//                         </div>
                        
//                     </div>
//                     </div>
//                         <div className="background-container my-4">
//                     <div className='first-image-content'>
                        
//                         <div className='d-flex justify-content-between image-text'>
//                             <div>
//                                <div className='tournament'>
//                                <p>Fire Attack</p>
//                                 <a href="https/www.twitch.com" className='title'>INTERNATIONAL TOURNAMENT, 2022</a>
//                                <div className='watch'>
//                             <div className='watch-item'>
//                                 <span><TfiTimer style={{fontSize: '30px', padding:'5px'}}/></span>
//                                 <span>December 10, 2022, 12 : 00 PM</span>
//                             </div>
//                             <div className='watch-item'>
//                                 <span><IoChatboxEllipsesOutline style={{fontSize: '30px', padding:'5px'}}/></span>
//                                 <a href="https/www.twitch.com"> Watch Stream</a>
//                             </div>
//                         </div>

//                                </div>
//                             </div>
//                             <div className='d-flex justify-content-center align-items-center sport-logo'>
//                                 <div className='dragon'> <img src={DRAGON} alt="sport" /></div>
//                                <div style={{fontSize: '30px', fontWeight: '700'}}>VS</div>
//                                 <div className='dragon'> <img src={SPORT2} alt="" /></div>
//                             </div>
//                         </div>
                        
//                     </div>
//                     </div>
//                     </div>

//                     </div>
//                   <div className="col-10 col-lg-10 d-flex flex-column flex-wrap       justify-content-center align-items-center follow   ">
//                         <p className='' >Follow us on Twitch to get notifications about our upcoming matches</p>
//                         <div className='btn-container'>
//                             <a className='follow-btn' href="https/www.twitch.com">Follow us</a>
//                         </div>
//                </div>

//                 </div>

//             </div> 
        
        