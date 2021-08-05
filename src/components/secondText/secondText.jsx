import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import SecondTextImg from '../Image/SecondtextImg';
import PortfolioContext from '../../context/context';

const OurStory = () => {
  const { second } = useContext(PortfolioContext);
  const { img2, text1, text2, text3 } = second;

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
    <section id="second">
      <Container>
        <Title title="Our story" />
        <Row className="second-wrapper">
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="second-wrapper__info">
                <p className="second-wrapper__info-text">
                  {text1 ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="second-wrapper__info-text">
                  {text2 ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="second-wrapper__info-text">
                  {text3 || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="second-wrapper__image">
                <SecondTextImg alt="second image" filename={img2} />
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurStory;
