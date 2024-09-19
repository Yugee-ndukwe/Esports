import '../Story/story.css';
import IMG1 from '../../../Assets/IMAGES/story1.jpeg';
import IMG2 from '../../../Assets/IMAGES/story2.jpeg';
import { useEffect, useRef, useState } from 'react';


export default function Story(){
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
            <div ref={sectionRef} className="container-fluid story-container">
                <div className="row story-content">
                    <div className="col-12 col-lg-6">
                        <div className="story-img1">
                            <img src={IMG1} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="story-text">
                            <h1>The Story behind dragon team</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis convallis tortor, malesuada vitae tortor. Dignissim ac aliquam ut sed eu. Eget nulla elit, ac habitant.</p>

                            <div className="story-btn">
                                <button className="btn1">meet the team</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="story-img2">
                            <img src={IMG2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}