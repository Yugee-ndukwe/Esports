import '../Hero/aboutHero.css';
import BG from '../../Assets/IMAGES/about-hero.jpeg';


export default function AboutHero(){
    return(
        <>
            <div className="container-fluid about-container">
                <div className="row about-content">
                    <div className="col-12 col-lg-6">
                        <div className="about-text">
                            <h1>about dragon esports team</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quis odio vestibulum nunc, neque integer purus.</p>

                            <div className="about-btn">
                                <button>meet the team</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="about-image">
                            <img src={BG} alt="hero-image" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}