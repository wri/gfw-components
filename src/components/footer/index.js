import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Media, MediaContextProvider } from 'components/responsive';

import Carousel from 'components/carousel';
import Button from 'components/button';
import Row from 'components/grid/row';
import Column from 'components/grid/column';
import P from 'components/html/p';

import gfw10Years from 'assets/logos/gfw10years.png';
import ArrowIcon from 'assets/icons/arrow-down.svg';

import config from './config';
import partners from './partners.json';

import { FooterWrapper } from './styles';

const images = require.context('assets/logos/partners', true);

class Footer extends PureComponent {
  static propTypes = {
    /** handle openning the contact us modal */
    openContactUsModal: PropTypes.func,
    className: PropTypes.string,
    handleCookiePreferencesClick: PropTypes.func,
    showCookiePreferencesLink: PropTypes.bool,
  };

  renderCarousel = (slidesToShow) => (
    <Carousel
      className="partners-slide"
      settings={{
        slidesToShow,
        slidesToScroll: slidesToShow,
        infinite: true,
        nextArrow: (
          <Button clear round ariaLabel="next partners logos">
            <ArrowIcon />
          </Button>
        ),
        prevArrow: (
          <Button clear round ariaLabel="prev partners logos">
            <ArrowIcon />
          </Button>
        ),
        lazyLoad: true,
      }}
    >
      {partners.map((p, i) => (
        <div className="carousel-slide" key={`${p.name}${i}`}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={p.url}
            aria-label={p.name}
          >
            <img
              className="logo-grey"
              src={images(`./${p.name}.png`)}
              alt={p.name}
            />
            <img
              className="logo-color"
              src={images(`./${p.name}hover.png`)}
              alt={p.name}
            />
          </a>
        </div>
      ))}
    </Carousel>
  );

  render() {
    const {
      openContactUsModal,
      className,
      handleCookiePreferencesClick = () => [],
      showCookiePreferencesLink = false,
    } = this.props;
    const { links, socialLinks } = config;

    return (
      <MediaContextProvider>
        <FooterWrapper className={className}>
          <Row className="footer-links">
            <Column width={[1, 1 / 2]}>
              <ul className="footer-links-texts">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Column>
            <Column width={[1, 1 / 2]}>
              <ul className="footer-links-social">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <Button light big round>
                        <link.icon />
                      </Button>
                    </a>
                  </li>
                ))}
              </ul>
            </Column>
            <Column>
              <div className="footer-contact-us">
                <button className="contact-btn" onClick={openContactUsModal}>
                  CONTACT US
                </button>
                <a
                  href="https://www.globalforestwatch.org/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="subscribe-btn">
                    Subscribe to the GFW newsletter
                  </Button>
                </a>
              </div>
            </Column>
          </Row>
          <Row className="footer-partners">
            <Column width={[1, 1, 4 / 16]}>
              <div className="footer-partnership">
                <hr />
                <div className="footer-partnership-logos">
                  <a
                    href="https://www.globalforestwatch.org/about"
                    target="_self"
                    rel="noopener noreferrer"
                    aria-label="Global Forest Watch"
                  >
                    <img
                      className="gfw-logo"
                      src={gfw10Years}
                      alt="GFW 10 years of Impact"
                    />
                  </a>
                </div>
              </div>
            </Column>
            <Column width={[1, 1, 12 / 16]}>
              <div className="footer-partners-slide">
                <div className="footer-logos">
                  <P>Partners</P>
                  <Media greaterThanOrEqual="medium">
                    {this.renderCarousel(4)}
                  </Media>
                  <Media lessThan="medium">{this.renderCarousel(1)}</Media>
                </div>
              </div>
            </Column>
          </Row>
          <Row>
            <Column>
              <div className="footer-terms">
                {showCookiePreferencesLink && (
                  <>
                    <button
                      className="terms osano-cookie-preference-link"
                      onClick={handleCookiePreferencesClick}
                    >
                      Cookie Preferences
                    </button>
                    {' · '}
                  </>
                )}
                <a
                  className="terms"
                  href="https://www.wri.org/about/wri-data-platforms-tos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
                {' · '}
                <a
                  className="terms"
                  href="https://www.globalforestwatch.org/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                {' · '}
                <a
                  className="terms"
                  href="http://stats.pingdom.com/ghabapk9rihc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Global Forest Watch System Status
                </a>
              </div>
            </Column>
          </Row>
        </FooterWrapper>
      </MediaContextProvider>
    );
  }
}
export default Footer;
