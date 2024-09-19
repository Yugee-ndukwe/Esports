import { useEffect, useRef, useState } from 'react';
import '../Products/products.css';

export default function Products() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Check if the section is in the viewport
                if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
                    setIsVisible(true); // Trigger animation
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div 
                ref={sectionRef} 
                className={`container-fluid sub-container ${isVisible ? 'visible' : ''}`}
            >
                <div className="row sub-content">
                    <div className="col-12 col-lg-5">
                        <div className={`sub-text ${isVisible ? 'visible' : ''}`}>
                            <h1>Subscribe to receive new merch releases!</h1>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className={`sub-item ${isVisible ? 'visible' : ''}`}>
                            <input type="text" placeholder='enter your email' />
                            <button className="last-btn">subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
