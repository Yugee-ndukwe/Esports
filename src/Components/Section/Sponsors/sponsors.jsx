import { useEffect, useRef } from 'react';
import '../Sponsors/sponsors.css';
import START from '../../../Assets/IMAGES/startup.svg';
import ENT from '../../../Assets/IMAGES/enterprise.svg';
import COM from '../../../Assets/IMAGES/company.svg';
import ORG from '../../../Assets/IMAGES/organization.svg';
import VENT from '../../../Assets/IMAGES/venture.svg';
import STUD from '../../../Assets/IMAGES/studio.svg';
import BIZ from '../../../Assets/IMAGES/business.svg';
import INT from '../../../Assets/IMAGES/institute.svg';

export default function Sponsors() {
    const sponsorRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        const element = sponsorRef.current;
        if (element) {
            observer.observe(element);
        }
        
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <div ref={sponsorRef} className="container-fluid sponsor-container">
            <div className="row sponsor-content">
                <div className="col-12 col-lg-10">
                    <div className="s-text">
                        <h1>Gold Sponsors</h1>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="s-image">
                        <div className="s-img">
                            <img src={BIZ} alt="sponsors" />
                        </div>
                        <div className="s-img">
                            <img src={COM} alt="sponsors" />
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="s-image">
                        <div className="s-img">
                            <img src={ENT} alt="sponsors" />
                        </div>
                        <div className="s-img">
                            <img src={START} alt="sponsors" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row second-row">
                <div className="col-12 col-lg-10">
                    <div className="s-text">
                        <h1>Silver Sponsors</h1>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="s-image">
                        <div className="s-img">
                            <img src={INT} alt="sponsors" />
                        </div>
                        <div className="s-img">
                            <img src={ORG} alt="sponsors" />
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="s-image">
                        <div className="s-img">
                            <img src={STUD} alt="sponsors" />
                        </div>
                        <div className="s-img">
                            <img src={VENT} alt="sponsors" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
