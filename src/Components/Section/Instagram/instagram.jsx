// import '../Instagram/Instagram.css';
import '../Instagram/instagram.css';
import { useEffect, useRef, useState } from 'react';
import INSTA1 from '../../../Assets/IMAGES/ig-1.jpg';
import INSTA2 from '../../../Assets/IMAGES/ig-2.jpg';
import INSTA3 from '../../../Assets/IMAGES/ig3.jpg';
import INSTA4 from '../../../Assets/IMAGES/ig-4.jpg';
import IG from '../../../Assets/IMAGES/ig-template.svg';





export default function Instagram(){
    
    const sectionRef = useRef();
    const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            console.log('Section Rect:', rect); 
            console.log('Window Height:', windowHeight);


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
    }, [hasScrolledOnce])

    return(
        <>
            <div ref={sectionRef} className="container-fluid instagram">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-10">
                        <div className='insta-text hidden'>
                            <h3>Follow us on <span>instagram</span></h3>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="insta-link">
                            <div>
                                <img src={INSTA1} alt="insagram" />
                            </div>
                            <div className="instagram-filter-hover" >
                                <img src={IG} loading="lazy" alt="Instagram - eSports Webflow Template" className="image-instagram-icon" />
                            </div>
                      </div>

                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="insta-link">
                            <div>
                                <img src={INSTA2} alt="insagram" />
                            </div>
                            <div className="instagram-filter-hover" >
                                <img src={IG} loading="lazy" alt="Instagram - eSports Webflow Template" className="image-instagram-icon" />
                            </div>
                      </div>

                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="insta-link">
                            <div>
                                <img src={INSTA3} alt="insagram" />
                            </div>
                            <div className="instagram-filter-hover" >
                                <img src={IG} loading="lazy" alt="Instagram - eSports Webflow Template" className="image-instagram-icon" />
                            </div>
                      </div>

                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="insta-link">
                            <div>
                                <img src={INSTA4} alt="insagram" />
                            </div>
                            <div className="instagram-filter-hover" >
                                <img src={IG} loading="lazy" alt="Instagram - eSports Webflow Template" className="image-instagram-icon" />
                            </div>
                      </div>

                    </div>
                </div>
            </div>
        </>
    )
}












// export default function Instagram(){

//     const textRef = useRef();
//     const imageRef = useRef();

//     useEffect(() => {
//         let textAnimated = false;
//         let imageAnimated = false;

//         const handleScroll = () => {
//             const textPosition = textRef.current.getBoundingClientRect().top;
//             const imagePosition = imageRef.current.getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;

//             if (!textAnimated && textPosition < windowHeight) {
//                 textRef.current.classList.add('text-appear');
//                 textAnimated = true;
//             }

//             if (textAnimated && !imageAnimated && imagePosition < windowHeight) {
//                 setTimeout(() => {
//                     imageRef.current.classList.remove('hidden');
//                     imageRef.current.classList.add('image-appear');
//                     imageAnimated = true;
//                 }, 2000);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
//     return(
//         <>
//         <div  ref={imageRef} className="container-fluid instagram">
//             <div className="row insta-content">
//                 <div className="col-10 col-md-8 col-lg-10">
//                     <div ref={textRef} className='insta-text hidden'>
//                         <h3>Follow us on <span>instagram</span></h3>
//                     </div>
//                 </div>
//                 <div className="col-6 col-lg-10">
//                 <div className='insta-image-wrapper'>
//                         <div className='insta-link'>
//                             <div>
//                             <img src={INSTA1} alt="instagram" />
//                             </div>
//                             <div className="instagram-filter-hover" >
//                             <img src={INSTALOGO} loading="lazy" alt="Instagram - eSports Webflow Template" className="image-instagram-icon" />
//                             </div>
                           
//                         </div>
//                         <div className='insta-link'>
//                             <div>
//                             <img src={INSTA2} alt="instagram" />
//                             </div>
//                             <div className="instagram-filter-hover" >
//                             <img src={INSTALOGO} loading="lazy" alt="Instagram - eSports Webflow Template" className="image-instagram-icon" />
//                             </div>
                           
//                         </div>
//                         <div className='insta-link'>
//                             <div>
//                             <img src={INSTA3} alt="instagram" />
//                             </div>
//                             <div className="instagram-filter-hover" >
//                             <img src={INSTALOGO} loading="lazy" alt="Instagram - eSports Webflow Template" className="image-instagram-icon" />
//                             </div>
                           
//                         </div>
//                         <div className='insta-link'>
//                             <div>
//                             <img src={INSTA4} alt="instagram" />
//                             </div>
//                             <div className="instagram-filter-hover" >
//                             <img src={INSTALOGO} loading="lazy" alt="Instagram - eSports Webflow Template" className="image-instagram-icon" />
//                             </div>
                           
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }