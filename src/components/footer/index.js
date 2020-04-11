import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Media, MediaContextProvider } from 'utils/responsive';

import Carousel from 'components/carousel';
import Button from 'components/button';

import WriIcon from 'assets/logos/wri.svg';
import ArrowIcon from 'assets/icons/arrow-down.svg';

import config from './config';
import partners from './partners.json';

import './styles.scss';

const images = require.context('assets/logos/partners', true);

class Footer extends PureComponent {
  static propTypes = {
    openContactUsModal: PropTypes.func,
  };

  renderCarousel = (slidesToShow) => (
    <Carousel
      className="partners-slide"
      settings={{
        slidesToShow,
        slidesToScroll: slidesToShow,
        infinite: true,
        nextArrow: (
          <Button theme="button-clear round" ariaLabel="next partners logos">
            <ArrowIcon />
          </Button>
        ),
        prevArrow: (
          <Button theme="button-clear round" ariaLabel="prev partners logos">
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
    const { openContactUsModal } = this.props;
    const { links, socialLinks } = config;

    return (
      <MediaContextProvider>
        <div className="c-footer">
          <div className="row footer-links">
            <div className="column small-12 medium-6">
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
            </div>
            <div className="column small-12 medium-6">
              <ul className="footer-links-social">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <Button theme="button-light round big">
                        <link.icon />
                      </Button>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="column small-12">
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
            </div>
          </div>
          <div className="row footer-partners">
            <div className="column small-12 medium-3">
              <div className="footer-wri">
                <p>A partnership convened by</p>
                <a
                  href="https://www.wri.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="world resource institute"
                >
                  <WriIcon className="wri-logo" />
                </a>
              </div>
            </div>
            <div className="column small-12 medium-9">
              <div className="footer-partners-slide">
                <div className="footer-logos">
                  <p>Partners</p>
                  <Media greaterThanOrEqual="md">
                    {this.renderCarousel(4)}
                  </Media>
                  <Media lessThan="md">{this.renderCarousel(1)}</Media>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column small-12">
              <div className="footer-terms">
                <a
                  className="terms"
                  href="https://www.globalforestwatch.org/terms"
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
            </div>
          </div>
        </div>
      </MediaContextProvider>
    );
  }
}
export default Footer;
