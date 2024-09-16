import '../FeaturedProducts/index.css';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

export default function FeaturedProducts({ title, className, P1, P2, P3, P4, pTitle1, pPrice1, pTitle2, pPrice2, pTitle3, pPrice3, pTitle4, pPrice4, showTitle = true , showButton= true}) {


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
    return (
        <>
            <div ref={sectionRef} className="container-fluid product-container">
                <div className="row products">
                    <div className="col-12 col-lg-10">
                       <div className='product-text'> {showTitle && <h1>{title}</h1>}</div>
                    </div>
                    <div className='col-12 col-lg-3'>
                        <div className={className}>
                            <img src={P1} alt="" />
                            <div className="name-price">
                            <p>{pTitle1}</p>
                            <p className='price'> ${pPrice1} usd</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3'>
                        <div className={className}>
                            <img src={P2} alt="" />
                           <div className="name-price">
                           <p>{pTitle2}</p>
                           <p className='price'> ${pPrice2} usd</p>
                           </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3'>
                        <div className={className}>
                            <img src={P3} alt="" />
                            <div className="name-price">
                            <p>{pTitle3}</p>
                            <p className='price'> ${pPrice3} usd</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3'>
                        <div className={className}>
                            <img src={P4} alt="" />
                            <div className="name-price">
                            <p>{pTitle4}</p>
                            <p className='price'> ${pPrice4} usd</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-10">
                        <div className='product-store'>
                           {showButton &&  <button className='product-btn'><Link to= '/shop' className='browse-store'> browse store</Link></button>}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

