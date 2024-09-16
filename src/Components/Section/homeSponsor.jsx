import '../Section/homeSponsor.css';
import BIZ from '../../Assets/IMAGES/business.svg';
import COM from '../../Assets/IMAGES/company.svg';
import ENT from '../../Assets/IMAGES/enterprise.svg';
import START from '../../Assets/IMAGES/startup.svg';
import { useRef , useEffect } from 'react';






export default function HomeSponsor(){
    const navRef = useRef()

    useEffect(() => {
        const handleNavScroll = () => {
          if (window.scrollY > 50) {
            navRef.current.classList.add('scrolled');
          } else {
            navRef.current.classList.remove('scrolled');
          }
        };
    
       
    
        window.addEventListener('scroll', handleNavScroll);
    
        return () => {
          window.removeEventListener('scroll', handleNavScroll);
        };
      }, []);
    return(
        <>
            <div ref={navRef} className="container-fluid home-sponsor">
                <div className="row h-sponsor-content">
                    <hr style={{color: '#ccc'}}/>
                    <div className="col-10 col-lg-3">
                       <div className="sponsor-text">
                       <h2>Sponsored by</h2>
                       </div>

                    </div>
                    <div className="col-10 col-lg-4">
                        <div className='d-flex justify-content-between sponsor-img'>
                            <div>
                                <img src={BIZ} alt="sponsor" />
                            </div>
                            <div>
                                <img src={COM} alt="sponsor" />
                            </div>

                        </div>
                    </div>
                    <div className="col-10 col-lg-4">
                        <div className=' d-flex justify-content-between sponsor-img'>
                            <div>
                                <img src={ENT} alt="sponsor" />
                            </div>
                            <div>
                                <img src={START} alt="sponsor" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}