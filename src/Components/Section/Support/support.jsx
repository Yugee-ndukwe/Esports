import { useRef, useEffect } from 'react';
import '../Support/support.css';


export default function Support(){
    const supportRef = useRef();

    useEffect(() => {
        const handleNavScroll = () => {
          if (window.scrollY > 50) {
            supportRef.current.classList.add('scrolled');
          } else {
            supportRef.current.classList.remove('scrolled');
          }
        };
    
       
    
        window.addEventListener('scroll', handleNavScroll);
    
        return () => {
          window.removeEventListener('scroll', handleNavScroll);
        };
      }, []);
    
    return(
        <>
            <div ref={supportRef} className="container-fluid support" >
                <div className="row support-content" >
                    <div className="col-12 col-lg-5 support-items">
                        <div className='support-text'>
                        <h1>Get our merch & support our Team</h1>
                        </div>
                      
                    </div>
                    <div className="col-12 col-lg-5">
                        <div>
                          <button className="support-btn">get merch </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}