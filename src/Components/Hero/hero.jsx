import '../Hero/hero.css';
import Mynav from '../Navbar/navbar';
import HomeSponsor from '../Section/homeSponsor';

export function Hero({
    className,
    heroImg,
    title,
    text,
    firstBtn,
    secondBtn,
    firstBtnClass,
    secondBtnClass,
    textColumnClass 
}) {
    return (
        <>
        {/* <Mynav/> */}
        <div className={className} style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%' }}>
            <div className="row hero-content">
                <div className={textColumnClass + " hero-text"}>
                    <h1>{title}</h1>
                    <p>{text}</p>
                    {firstBtn || secondBtn ? ( // Check if buttons should be rendered
                        <div className='hero-btn'>
                            {firstBtn && <button className={firstBtnClass}>{firstBtn}</button>}
                            {secondBtn && <button className={secondBtnClass}>{secondBtn}</button>}
                        </div>
                    ) : null}
                </div>
                
            </div>
            
        </div>
        </>
    );
}
