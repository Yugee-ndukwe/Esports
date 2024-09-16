import './navbar.css';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../Assets/IMAGES/logo.svg';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Mynav() {
  const navLinkRef = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 575); // Detect if it's mobile

  useEffect(() => {
    const handleNavScroll = () => {
      if (window.scrollY > 50) {
        navLinkRef.current.classList.add('scrolled');
      } else {
        navLinkRef.current.classList.remove('scrolled');
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 575);
    };

    window.addEventListener('scroll', handleNavScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleNavScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav ref={navLinkRef} className="navbar navbar-expand-lg">
        <div className="ms-auto logo-container">
          <div className="logo-img">
            <img src={LOGO} alt="logo" style={{ background: 'black' }} />
          </div>
          <div className="collapse-nav">
            <span onClick={handleClicked}>
              {clicked ? <IoMdClose style={{ background: '#f32c46', color: '#fff' }} /> : <GiHamburgerMenu style={{ background: '#f32c46', color: '#fff' }} />}
            </span>
          </div>
        </div>
        <div className={`m-auto nav-items ${clicked ? 'show' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/team" className="nav-link">Team</Link>
          <Link to="/partners" className="nav-link">Partners</Link>
          <Link to="/shop" className="nav-link">Shop</Link>

          {/* Toggle dropdown based on device type */}
          <Link to="/" className="nav-link">
            <div
              className="drop-down-link"
              onMouseEnter={!isMobile ? () => setDropdownOpen(true) : null}
              onMouseLeave={!isMobile ? () => setDropdownOpen(false) : null}
              onClick={isMobile ? toggleDropdown : null}
            >
              Pages
              <span>
                {dropdownOpen ? <RiArrowDropUpLine style={{ fontSize: '30px' }} /> : <RiArrowDropDownLine style={{ fontSize: '30px' }} />}
              </span>
              {dropdownOpen && (
                <div className="drop-down-menu">
                  <div className="drop-down-item">
                    <Link to="/" className="drop-down-text">Menu</Link>
                    <div className="drop-items">
                      <p>HOME</p>
                      <p>ABOUT</p>
                      <p>TEAM</p>
                      <p>NEWS</p>
                    </div>
                  </div>
                  <div className="drop-down-item">
                    <Link to="/" className="drop-down-text">
                      <div className="drop-items">
                        <p>SHOP</p>
                        <p>SHOP CMS</p>
                        <p>CONTACT</p>
                        <p>SPONSOR</p>
                      </div>
                    </Link>
                  </div>
                  <div className="drop-down-item">
                    <Link to="/" className="drop-down-text">Utility
                      <div className="drop-items">
                        <p>STYLE GUIDE</p>
                        <p>START HERE</p>
                        <p>404 NOT FOUND</p>
                        <p>PASSWORD PROTECTED</p>
                        <p>LICENSES</p>
                        <p>CHANGE LOG</p>
                        <p className='text-browse'>BROWSE MORE TEMPLATE</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </Link>
        </div>

        {/* Hide this on small devices */}
        <div className={`me-auto nav-items ${clicked ? 'show' : ''}`}>
          <Link className="nav-link cart">CART <span>[0]</span></Link>
          <div className="btn-container">
            <button className="nav-btn">BUY MERCH</button>
          </div>
        </div>
      </nav>
    </>
  );
}
