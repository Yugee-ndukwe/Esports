import './started.css';
import START1 from '../../../Assets/IMAGES/start1.jpeg';
import START2 from '../../../Assets/IMAGES/sstart2.jpg';
import {useRef, useEffect, useState} from 'react';



export default function Started(){

   
    
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
            <div ref={sectionRef} className="container-fluid start-container">
                <div className="row start-content">
                    <div className="col-12 col-lg-5">
                        <div className="start-text">
                            <h1>how dragon esport started</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At at gravida platea congue. Gravida viverra id ac dui blandit in sed phasellus. Amet nisl sagittis feugiat in lacus. Lectus tellus erat lectus netus a luctus amet sollicitudin montes. Tristique amet viverra platea semper. Volutpat quam interdum commodo diam, id interdum fusce vestibulum. Quam orci, vel penatibus sed. Pharetra aenean porttitor commodo, nulla tortor amet faucibus. Vulputate.</p>
                        </div>

                    </div>

                    <div className="col-12 col-lg-7">
                        <div className="start-image">
                            <div className="d-img1">
                                <img src={START1} alt="esport" />
                            </div>
                            <div className="d-img2">
                                <img src={START2} alt="esport" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}