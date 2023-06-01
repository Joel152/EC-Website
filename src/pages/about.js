import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`The Ethics Committee`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            What we do?
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            In-Game Lore 
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Roleplayer Lore 
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
             The Ethics Committee is a crucial component of the Foundation's 
             operations. Its primary responsibility is to ensure that all actions 
             taken by the Foundation are ethical and in line with its mission of 
             protecting humanity from anomalous objects and entities.
            </p>
            <br />
            <br />
            <p>
              Another critical aspect of their work involves determining appropriate 
              punishments for employees who violate ethical guidelines. This can range
              from reprimands to termination, depending on the severity of the offense..
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/about1.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>In-Game Lore</h3>
            <div ref={valuesRef}>
              <p>
                The Ethics Committee will host regular inspections all around the site. 
                This includes some of the Anomaly Containment Chambers, all of the Sectors 
                and Class-D Containment Cells along with Omega-1 assisting them for safety.
              </p>
              <ol>
                
              </ol>
              <img alt={'RoleplayerLorePic'} src={'static/About Role.png'}></img>
            </div>
            <h3>Roleplayer Lore </h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                The Ethics Committee is an administrative department founded and 
                led by the Ethics Committee Chairman. It has been decades since
                it has been founded and is in perfect condition to this day.
                The Ethics Committee abide by the Code of Ethics which in-case 
                they break the Code of Ethics get terminated or demoted accordingly 
                to what the broke.

              </p>
              <p>
                {' '}
              </p>
              <p>
               
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'static/About Role.png'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
