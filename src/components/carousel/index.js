import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';
import { Global, css } from '@emotion/core';

import ArrowIcon from 'assets/icons/arrow-down.svg';
import Button from 'components/button';

import { CarouselWrapper } from './styles';
import slickStyles from './slick.scss';

const defaultSettings = {
  dots: false,
  speed: 500,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  customPaging: (i) => <button aria-label={`slide ${i}`} />,
  nextArrow: (
    <Button round ariaLabel="carousel next">
      <ArrowIcon />
    </Button>
  ),
  prevArrow: (
    <Button round ariaLabel="carousel previous">
      <ArrowIcon />
    </Button>
  ),
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
      <CarouselWrapper className={className}>
        <Global
          styles={css`
            ${slickStyles}
          `}
        />
        <SlickSlider
          key={isClient ? 'client' : 'server'}
          {...sliderSettings}
          responsive={isClient ? sliderSettings.responsive : null}
        >
          {children}
        </SlickSlider>
      </CarouselWrapper>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object,
  className: PropTypes.string,
};

export default Carousel;
