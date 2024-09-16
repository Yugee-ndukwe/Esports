import { useEffect, useRef } from 'react';
import '../Footer/footer.css';
import LOGO from '../../Assets/IMAGES/logo.svg';
// import LOGO from '../../Assets/images/logo.svg';
import { FaFacebookF } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaTwitch } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
    const footerRef = useRef();

    useEffect(() => {
        const handleFooterScroll = () => {
            const footer = footerRef.current;
            const footerTop = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Check if the footer is in view
            if (footerTop < windowHeight) {
                // Add pop-out class after a delay of 2 seconds
                setTimeout(() => {
                    footer.classList.add('scrolled');
                    footer.querySelector('.footer-content').classList.add('pop-out');
                }, 2000);
            } else {
                // Remove the pop-out class when not in view (optional)
                footer.classList.remove('scrolled');
                footer.querySelector('.footer-content').classList.remove('pop-out');
            }
        }

        window.addEventListener('scroll', handleFooterScroll);
        return () => {
            window.removeEventListener('scroll', handleFooterScroll);
        }
    }, []);

    return (
        <>
            <div ref={footerRef} className="container-fluid footer">
                <div className="row footer-content">
                    <div className="col-10 col-md-10 col-lg-3 footer-logo">
                        <div>
                            <img src={LOGO} alt="" />
                        </div>
                       <div className='logo-text'>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis convallis tortor.</p>
                       </div>
                    </div>
                    <div className="col-10 col-md-6 col-lg-3 footer-double">
                        <div>
                            <a href="/" className='footer-list'>
                                <div className='footer-list-items'>
                                    <ul>
                                        <li><p>Pages</p></li>
                                        <li><p>Home</p></li>
                                        <li>ABOUT</li>
                                        <li>team</li>
                                        <li>team individual</li>
                                        <li>news</li>
                                        <li>news individual</li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="/" className='footer-list'>
                                <div className='footer-list-items'>
                                    <ul>
                                        <li>shop</li>
                                        <li>shop cms</li>
                                        <li>contact</li>
                                        <li>sponsor</li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </div>
                   
                    <div className="col-10 col-md-6 col-lg-3">
                        <div>
                            <a href="/" className='footer-list'>
                                <div className='footer-list-items'>
                                    <ul>
                                        <li><p>Utility pages</p></li>
                                        <li>STYLE GUIDE</li>
                                        <li>start here</li>
                                        <li>404 NOT FOUND</li>
                                        <li>password protected</li>
                                        <li>licences</li>
                                        <li>change log</li>
                                        <li><span className='brow'>Browse template</span></li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-lg-2 social">
                        <a href="/" className='footer-list'>
                            <div>
                                <ul>
                                    <li>
                                        <FaFacebookF style={{ fontSize: '24px', background: '#F32C46', color: '#fff', padding: '5px' }} />
                                        <span className='p-2'>Facebook</span>
                                    </li>
                                    <li>
                                        <BiLogoTwitter style={{ fontSize: '24px', background: '#F32C46', color: '#fff', padding: '5px' }} />
                                        <span className='p-2'>Twitter</span>
                                    </li>
                                    <li>
                                        <FaInstagram style={{ fontSize: '24px', background: '#F32C46', color: '#fff', padding: '5px' }} />
                                        <span className='p-2'>Instagram</span>
                                    </li>
                                    <li>
                                        <CiYoutube style={{ fontSize: '24px', background: '#F32C46', color: '#fff', padding: '5px' }} />
                                        <span className='p-2'>Youtube</span>
                                    </li>
                                    <li>
                                        <FaTwitch style={{ fontSize: '24px', background: '#F32C46', color: '#fff', padding: '5px' }} />
                                        <span className='p-2'>Twitch</span>
                                    </li>
                                    <li>
                                        <FaTiktok style={{ fontSize: '24px', background: '#F32C46', color: '#fff', padding: '5px' }} />
                                        <span className='p-2'>Tiktok</span>
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <hr style={{ color: 'gray' }} />
                    <div className='col-10 col-lg-10 d-flex justify-content-center align-items-center mt-5' style={{ color: '#fff', fontSize: '18px' }}>
                        <p>  copyright &#169; eSports | Designed by   <span style={{ color: '#F32C46' }}> BRIX Templates </span> - Powered by <span style={{ color: '#F32C46' }}> Webflow  </span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
