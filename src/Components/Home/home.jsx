import { Hero } from "../Hero/hero";
import HOME_BG from '../../Assets/IMAGES/bg-home-hero.jpeg';
import Mynav from "../Navbar/navbar";
import '../Home/home.css';
import HomeSponsor from "../Section/homeSponsor";
import AboutD from "../Section/AboutD/aboutD";
import '../Home/home.css'
import UpMatch from "../Section/UpMatch/upMatch";
import Articles from "../Section/Articles/articles";
import Support from "../Section/Support/support";
import FeaturedProducts from "../Section/FeaturedProducts";
import P1 from '../../Assets/IMAGES/product1.png';
import P2 from '../../Assets/IMAGES/product2.png';
import P3 from '../../Assets/IMAGES/product3.png';
import P4 from '../../Assets/IMAGES/product4.png';
import Footer from "../Footer/footer";
import Instagram from  "../Section/Instagram/instagram";



export default function Home(){
    return(
        <>
            <Mynav/>
            <Hero
                className= 'hero home-hero'
                containerClass='home-container'   // Custom container class for partners page
                rowClass='home-row' 
                heroImg={HOME_BG}
                textColumnClass= 'col-12 col-lg-6 home-text'
                title= 'NEXT-GENERATION ESPORTS TEAM'
                text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quis odio vestibulum nunc, neque integer purus.'
                firstBtnClass= 'buy-btn'
                firstBtn= 'BUY MERCH'
                secondBtnClass= 'meet-btn'
                secondBtn= 'MEET THE TEAM'
            />
            <HomeSponsor/>
            <AboutD/>
            <UpMatch/>
            <Articles/>
            <Support/>
            <FeaturedProducts
            cName= 'row products'
            title= 'featured product'
            className= 'items'
            P1= {P1}
            pTitle1= 'esports team shirt blackline'
            pPrice1= '19.99'
            // className= 'items'
            P2= {P2}
            pTitle2= 'esports team shirt whiteline'
            pPrice2= '19.99'

            P3= {P3}
            pTitle3= 'esports team hoodie blackline'
            pPrice3= '59.99'

            P4= {P4}
            pTitle4= 'esports team hoodie whiteline'
            pPrice4= '59.99'
            
            />
            <Instagram/>
            <Footer/>
        </>
    )
}