import Footer from "../Footer/footer";
import { Hero } from "../Hero/hero";
import Mynav from "../Navbar/navbar";
import Instagram from "../Section/Instagram/instagram";
import BG from '../../Assets/IMAGES/team-hero.jpeg';
import FeaturedProducts from "../Section/FeaturedProducts";
import P1 from '../../Assets/IMAGES/product1.png';
import P2 from '../../Assets/IMAGES/product2.png';
import P3 from '../../Assets/IMAGES/product3.png';
import P4 from '../../Assets/IMAGES/product4.png';
import P5 from '../../Assets/IMAGES/product5.png';
import P6 from '../../Assets/IMAGES/product6.png';
import P7 from '../../Assets/IMAGES/product7.png';
import P8 from '../../Assets/IMAGES/product8.png';
import Products from "../Section/Products/products";








export default function Shop(){
    return(
        <>
            <Mynav/>
            <Hero
                className='hero t-hero'
                containerClass='team-container'   // Custom container class for partners page
                rowClass='team-row'               // Custom row class for partners page
                heroImg={BG}
                textColumnClass='col-12 col-lg-6 team-text'
                title='shop'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quis odio vestibulum nunc, neque integer purus.'
            />
            <FeaturedProducts
                cName= 'row product-shop'
                 title= 'latest merch'
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
                 P5={P5} pTitle5='Esports backpack Blackline' pPrice5='99.99'
                 P6={P6} pTitle6='Esports backpack Whiteline' pPrice6='99.99'
                 P7={P7} pTitle7='Esports team cap Blackline' pPrice7='9.99'
                 P8={P8} pTitle8='Esports team cap Whiteline' pPrice8='9.99'
                 showButton={false}
                 showProduct={true}
                 
            />
            <Products/>
            <Instagram/>
            <Footer/>
        </>
    )
}