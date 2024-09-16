import '../AboutD/aboutD.css';
import VID from '../../../Assets/IMAGES/img-video.jpeg';
import {useRef, useEffect, useState} from 'react';

export default function AboutD() {

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

    return (
        <div ref={sectionRef} className="container-fluid d-container">
            <div className="row d-content">
                <div className="col-10 col-lg-5">
                    <div className="d-text">
                        <h1>About the Dragon Esports Team</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis convallis tortor, malesuada vitae tortor. Dignissim ac aliquam ut sed eu. Eget nulla elit, ac habitant.</p>
                    </div>
                </div>
                <div className="col-10 col-lg-7">
                    <div className="d-image">
                        <img src={VID} alt="video" />
                    </div>
                </div>
            </div>
        </div>
    );
}
