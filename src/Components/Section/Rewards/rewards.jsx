import '../Rewards/rewards.css';
import { useEffect, useRef } from 'react';

export default function Rewards() {
    const rewardContainerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        const items = rewardContainerRef.current.querySelectorAll('.fade-in');
        items.forEach((item) => observer.observe(item));

        return () => {
            items.forEach((item) => observer.unobserve(item));
        };
    }, []);

    return (
        <>
            <div ref={rewardContainerRef} className="container-fluid reward-container">
                <div className="row reward-content">
                    <div className="col-12 col-lg-3 fade-in">
                        <div className='result'><p>our results</p></div>
                    </div>
                    <div className="col-12 col-lg-4 fade-in">
                        <div className='score'>
                            <div className='score-items'>
                                <div>30<span>+</span></div>
                                <div className='below-score'>
                                    <p>tournament</p>
                                </div>
                            </div>
                            <div className='score-items'>
                                <div>20<span>+</span></div>
                                <div className='below-score'>
                                    <p>global awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 fade-in">
                        <div className='score'>
                            <div className='score-items'>
                                <div>14<span>+</span></div>
                                <div className='below-score'>
                                    <p>team members</p>
                                </div>
                            </div>
                            <div className='score-items'>
                                <div>8<span>+</span></div>
                                <div className='below-score'>
                                    <p>years going</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-12 my-5 py-5 fade-in">
                        <div><hr style={{ color: '#ccc' }} /></div>
                    </div>
                </div>
            </div>
        </>
    );
}
