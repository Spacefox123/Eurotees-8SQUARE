import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const Map = () => {
  const { map } = useContext(PortfolioContext);
  const { mapUrl } = map;

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
    <section id="map">
      <Container>
        <div className="map-wrapper">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <Title title="Where can you find us?" />
          </Fade>
          <div className="map-wrapper__image">
            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={600} distance="30px">
              <iframe
                title="locations"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
                src={mapUrl}
              />
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Map;
