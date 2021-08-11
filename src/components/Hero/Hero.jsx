import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, btn1, btn2, btn3, btn4, btn5 } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <p className="hero-cta navbar">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {btn1 || 'Know more'}
              </Link>
            </span>

            <span className="cta-btn cta-btn--hero">
              <Link to="projects" smooth duration={1000}>
                {btn2 || 'Know more'}
              </Link>
            </span>

            <span className="cta-btn cta-btn--hero">
              <Link to="second" smooth duration={1000}>
                {btn3 || 'Know more'}
              </Link>
            </span>

            <span className="cta-btn cta-btn--hero">
              <Link to="map" smooth duration={1000}>
                {btn4 || 'Know more'}
              </Link>
            </span>

            <span className="cta-btn cta-btn--hero">
              <Link to="contact" smooth duration={1000}>
                {btn5 || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={100} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
