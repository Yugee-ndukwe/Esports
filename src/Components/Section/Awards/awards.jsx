import '../Awards/award.css';
import AWARD2 from '../../../Assets/IMAGES/award2.svg';
import AWARD1 from '../../../Assets/IMAGES/award1.svg';
import { useEffect, useRef, useState } from 'react';


export default function Awards(){
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
            <div ref={sectionRef} className="container-fluid award-container">
                <div className="row award-content">
                    <div className="col-12 col-lg-10">
                        <div className="award-text">
                            <h1>our awards</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At at gravida <br /> platea congue. Gravida viverra id ac dui blandit in sed phasellus. Amet nisl sagittis feugiat in lacus.</p>
                        </div>


                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="awards">
                            <div className="medal">
                                <img src={AWARD1} alt="" />
                            </div>
                            <p>big tournament 2021</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="awards">
                            <div className="medal">
                                <img src={AWARD2} alt="" />
                            </div>
                            <p>big tournament 2020</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="awards">
                            <div className="medal">
                                <img src={AWARD1} alt="" />
                            </div>
                            <p>big tournament 2019</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="awards">
                            <div className="medal">
                                <img src={AWARD2} alt="" />
                            </div>
                            <p>big tournament 2018</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
