
import '../Articles/articles.css';
import BLOG from '../../../Assets/IMAGES/blog-post.jpeg';
import BLOG1 from '../../../Assets/IMAGES/blog-post2.jpeg';
import BLOG2 from '../../../Assets/IMAGES/blog-post1.jpeg';
import BLOG3 from '../../../Assets/IMAGES/blog-post3.jpeg';
import BLOG4 from '../../../Assets/IMAGES/blog-post4.jpeg';
import { useRef, useEffect } from 'react';




export default function Articles() {
    const articleRef = useRef();
    const titleRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        const handleArticleScroll = () => {
            const articlePosition = articleRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Trigger visibility of the title and overlay
            if (articlePosition < windowHeight * 0.8) {
                titleRef.current.classList.add('fade-in');
                articleRef.current.classList.add('fade-in');
            } else {
                titleRef.current.classList.remove('fade-in');
                articleRef.current.classList.remove('fade-in');
            }

            // Trigger visibility of the content after a slight delay
            if (articlePosition < windowHeight * 0.6) {
                containerRef.current.classList.add('fade-in');
            } else {
                containerRef.current.classList.remove('fade-in');
            }
        };

        window.addEventListener('scroll', handleArticleScroll);
        handleArticleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleArticleScroll);
    }, []);

    return (
        <>
            <div ref={articleRef} className="container-fluid articles">
                <div className="row article-first-row">
                    <div className="col-12 col-lg-12 article-first-content">
                        <div className="row content-row">
                            <div ref={titleRef} className='title-news'>
                                <h1>Articles & News</h1>
                                <button>Browse News</button>
                            </div>
                            <div ref={containerRef} className="col-12 col-lg-7 content-container">
                                <div>
                                    <div className="content-first-image">
                                        <img src={BLOG} alt="" />
                                        <div className='below-first-image'>
                                            <a href="https/www.twitch.com">
                                                <button className='btn-merch'>Merch</button>
                                            </a>
                                            <p>September 1, 2022</p>
                                        </div>
                                        <div className='last-text'>
                                            <p>Our new brand headphones are now for <br /> sale</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="article-news">
                                    <div className='news-content'>
                                        <div className='news-image'>
                                            <img src={BLOG1} alt="" />
                                            <p>The best keyboard for high-end gaming.</p>
                                        </div>
                                        <div className='news-image'>
                                            <img src={BLOG2} alt="" />
                                            <p>3 Amazing pc brand for your next gaming pc.</p>
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
            </div>
        </>
    );
}
