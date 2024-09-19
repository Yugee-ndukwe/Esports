import Footer from "../Footer/footer";
import { Hero } from "../Hero/hero";
import Mynav from "../Navbar/navbar";
import Instagram from "../Section/Instagram/instagram";
import BG from '../../Assets/IMAGES/team-hero.jpeg';
import './partners.css'; // Separate CSS for the partners page
import Sponsors from "../Section/Sponsors/sponsors";

export default function Partners() {
    return (
        <>
            <Mynav />
            <Hero
                className='hero p-hero'
                containerClass='custom-container'   // Custom container class for partners page
                rowClass='custom-row'               // Custom row class for partners page
                heroImg={BG}
                textColumnClass='col-12 col-lg-6 p-text'
                title='Sponsors'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quis odio vestibulum nunc, neque integer purus.'
            />
            <Sponsors/>
            <Instagram />
            <Footer />
        </>
    );
}
