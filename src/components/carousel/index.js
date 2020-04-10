import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';

import Button from 'components/button';

import ArrowIcon from 'assets/icons/arrow-down.svg';

import './styles.scss';

const defaultSettings = {
  dots: false,
  speed: 500,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  customPaging: i => <button aria-label={`slide ${i}`} />,
  nextArrow: (
    <Button theme="round" ariaLabel="carousel next">
      <ArrowIcon />
    </Button>
  ),
  prevArrow: (
    <Button theme="round" ariaLabel="carousel previous">
      <ArrowIcon />
    </Button>
  )
};

class Carousel extends PureComponent {
  state = { isClient: false };

  componentDidMount() {
    this.setState({ isClient: true });
  }

  render() {
    const { className, children, settings } = this.props;
    const { isClient } = this.state;
    const sliderSettings = { ...defaultSettings, ...settings };

    return (
      <div className={`c-carousel ${className || ''}`}>
        <SlickSlider
          key={isClient ? 'client' : 'server'}
          {...sliderSettings}
          responsive={isClient ? sliderSettings.responsive : null}
        >
          {children}
        </SlickSlider>
      </div>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object,
  className: PropTypes.string
};

export default Carousel;
