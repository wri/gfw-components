import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';

import ArrowIcon from 'assets/icons/arrow-down.svg';
import Button from 'components/button';

import { CarouselWrapper } from './styles';

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
  static propTypes = {
    /** children */
    children: PropTypes.node.isRequired,
    /** an object of react-slick props: https://react-slick.neostack.com/docs/api */
    settings: PropTypes.object,
    /** override styles in you app */
    className: PropTypes.string,
  };

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

export default Carousel;
