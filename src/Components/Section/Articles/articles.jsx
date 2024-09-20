import '../Articles/articles.css';
import BLOG from '../../../Assets/IMAGES/blog-post.jpeg';
import BLOG1 from '../../../Assets/IMAGES/blog-post2.jpeg';
import BLOG2 from '../../../Assets/IMAGES/blog-post1.jpeg';
import BLOG3 from '../../../Assets/IMAGES/blog-post3.jpeg';
import BLOG4 from '../../../Assets/IMAGES/blog-post4.jpeg';
import { useRef, useEffect, useState } from 'react';

export default function Articles() {
    const sectionRef = useRef();
    const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (!hasScrolledOnce && rect.top <= windowHeight && rect.bottom >= 0) {
                sectionRef.current.classList.add('fade-in');
                setHasScrolledOnce(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolledOnce]);

    return (
        <div ref={sectionRef} className="container-fluid articles">
            <div className="row article-first-row">
                <div className="col-12 col-lg-12 article-first-content">
                    <div className="row content-row">
                        <div className='title-news'>
                            <h1>Articles & News</h1>
                            <button>Browse News</button>
                        </div>
                        <div className="col-12 col-lg-7 content-container">
                            <div className="content-first-image">
                                <img src={BLOG} alt="" />
                                <div className='below-first-image'>
                                    <a href="https://www.twitch.com">
                                        <button className='btn-merch'>Merch</button>
                                    </a>
                                    <p>September 1, 2022</p>
                                </div>
                                <div className='last-text'>
                                    <p>Our new brand headphones are now for <br /> sale</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 article-news">
                            <div className="news-content">
                                <div className='news-image'>
                                    <img src={BLOG1} alt="" />
                                    <p>The best keyboard for high-end gaming.</p>
                                </div>
                                <div className='news-image'>
                                    <img src={BLOG2} alt="" />
                                    <p>3 Amazing pc brands for your next gaming pc.</p>
                                </div>
                            </div>
                            <div className="news-content">
                                <div className='news-image'>
                                    <img src={BLOG3} alt="" />
                                    <p>New dragon esport merch announced.</p>
                                </div>
                                <div className='news-image'>
                                    <img src={BLOG4} alt="" />
                                    <p>2021 xbox gold tournament date announced.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
