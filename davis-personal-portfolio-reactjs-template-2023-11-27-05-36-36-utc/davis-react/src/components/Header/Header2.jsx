import { Link } from 'react-router-dom';
import './Header.scss';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';

const Header2 = () => {
  const [mobileToggle, setMobileToggle] = useState(false);

  const handleToggleMenu = () => {
    setMobileToggle(!mobileToggle);
  }

  return (
    <header className="st-site-header st-sticky-header st-style2">
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              <div className="st-header-author"><img src="images/section/hero-img.jpg" alt="author image" /></div>
            </div>
            <div className="st-main-header-right">
              <div className="st-nav">
                <ul className="st-nav-list st-onepage-nav" style={{ display: `${mobileToggle ? 'block' : 'none'}` }}>
                  <li><ScrollLink to="home" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Home</ScrollLink></li>
                  <li><ScrollLink to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>About</ScrollLink></li>
                  <li><ScrollLink to="resume" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Resume</ScrollLink></li>
                  <li><ScrollLink to="portfolio" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Portfolio</ScrollLink></li>
                  <li><ScrollLink to="blog" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Blog</ScrollLink></li>
                  <li><ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Contact</ScrollLink></li>
                </ul>
                <div className={`st-munu-toggle ${mobileToggle ? "st-toggle-active" : ""} `} onClick={handleToggleMenu}>
                  <span></span>
                </div>
                <div className="st-height-b20 st-height-lg-b20"></div>
                <ScrollLink className="st-btn st-style2 st-color1 st-size-medium" to="contact">Hire Me</ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header2;
