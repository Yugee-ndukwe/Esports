import Footer from "../Footer/footer";
import AboutHero from "../Hero/aboutHero";
import Mynav from "../Navbar/navbar";
import Awards from "../Section/Awards/awards";
import Instagram from "../Section/Instagram/instagram";
import Rewards from "../Section/Rewards/rewards";
import Started from "../Section/started/started";
// import Started from "../Section/Started/started";
import Story from "../Section/Story/story";
import Teams from "../Section/Teams/teams";



export default function About(){
    return(
        <>
            <Mynav/>
            <AboutHero/>
            <Rewards/>
            <Story/>
            <Started/>
            <Awards/>
            <Teams/>
            <Instagram/>
            <Footer/>
        </>
    )
}