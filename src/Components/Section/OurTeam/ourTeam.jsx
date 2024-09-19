// import '../OurTeam/ourTeam.css'
import DAN from '../../../Assets/IMAGES/dan.png';
import JOHN from '../../../Assets/IMAGES/john.png';
import KEVIN from '../../../Assets/IMAGES/kevin.png';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaTwitch } from "react-icons/fa";
import {useRef, useEffect, useState} from 'react';

export default function OurTeam() {

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
    }, [hasScrolledOnce]); // Dependency on hasScrolledOnce to trigger only once

    return(
        <>
             <div ref={sectionRef}  className="container-fluid teams-container">
                <div className="row teams-content">
                    <div className="col-12 col-lg-10">
                        <div className="teams-text">
                            <div className="text">
                                <h3>dragon team</h3>
                               
                            </div>
                            <div className="team-btn">
                                <button className="t-btn">join our team</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="teams-image">
                            <div className="members">
                                <img src={JOHN} alt="team" />
                                <div className="member-name">john carter</div>
                                <div className="icons">
                                <FaFacebookF className='member-icon'/>
                                <FaInstagram className='member-icon'/>
                                <CiYoutube className='member-icon'/>
                                <FaTwitch className='member-icon'/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="teams-image">
                            <div className="members">
                                <img src={KEVIN} alt="team" />
                                <div className="member-name">Kevin Cannon</div>
                                <div className="icons">
                                <FaFacebookF className='member-icon'/>
                                <FaInstagram className='member-icon'/>
                                <CiYoutube className='member-icon'/>
                                <FaTwitch className='member-icon'/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="teams-image">
                            <div className="members">
                                <img src={DAN} alt="team" />
                                <div className="member-name">Dan Clark</div>
                                <div className="icons">
                                <FaFacebookF className='member-icon'/>
                                <FaInstagram className='member-icon'/>
                                <CiYoutube className='member-icon'/>
                                <FaTwitch className='member-icon'/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="teams-image">
                            <div className="members">
                                <img src={KEVIN} alt="team" />
                                <div className="member-name">matt sanders</div>
                                <div className="icons">
                                <FaFacebookF className='member-icon'/>
                                <FaInstagram className='member-icon'/>
                                <CiYoutube className='member-icon'/>
                                <FaTwitch className='member-icon'/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="teams-image">
                            <div className="members">
                                <img src={DAN} alt="team" />
                                <div className="member-name">aaron white</div>
                                <div className="icons">
                                <FaFacebookF className='member-icon'/>
                                <FaInstagram className='member-icon'/>
                                <CiYoutube className='member-icon'/>
                                <FaTwitch className='member-icon'/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="teams-image">
                            <div className="members">
                                <img src={JOHN} alt="team" />
                                <div className="member-name">charles miller</div>
                                <div className="icons">
                                <FaFacebookF className='member-icon'/>
                                <FaInstagram className='member-icon'/>
                                <CiYoutube className='member-icon'/>
                                <FaTwitch className='member-icon'/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}