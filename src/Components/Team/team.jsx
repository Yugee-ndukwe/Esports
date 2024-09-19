import Footer from "../Footer/footer";
import { Hero } from "../Hero/hero";
import Mynav from "../Navbar/navbar";
import Instagram from "../Section/Instagram/instagram";
import '../Team/team.css';
import BG from '../../Assets/IMAGES/team-hero.jpeg';
import OurTeam from "../Section/OurTeam/ourTeam";





export default function Team(){
    return(
        <>
            <Mynav/>
            <Hero 
                className='hero t-hero'
                containerClass='team-container'   // Custom container class for partners page
                rowClass='team-row'               // Custom row class for partners page
                heroImg={BG}
                textColumnClass='col-12 col-lg-6 team-text'
                title='team'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quis odio vestibulum nunc, neque integer purus.'
            />
            <OurTeam/>
            <Instagram/>
            <Footer/>
        </>
    )
}