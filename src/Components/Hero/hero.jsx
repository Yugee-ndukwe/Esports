import '../Hero/hero.css';

export function Hero({
    className,
    heroImg,
    title,
    text,
    firstBtn,
    secondBtn,
    firstBtnClass,
    secondBtnClass,
    textColumnClass,
    containerClass, // Dynamically passed container class
    rowClass        // Dynamically passed row class
}) {
    return (
        <div className={className} style={{
            backgroundImage: `url(${heroImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh'
        }}>
            <div className={containerClass}>
                <div className={rowClass}>
                    <div className={textColumnClass}>
                        <h1>{title}</h1>
                        <p>{text}</p>
                        {(firstBtn || secondBtn) && (
                            <div className='hero-btn'>
                                {firstBtn && <button className={firstBtnClass}>{firstBtn}</button>}
                                {secondBtn && <button className={secondBtnClass}>{secondBtn}</button>}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
