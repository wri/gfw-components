import styled from '@emotion/styled';
import theme from 'styles/theme';

export const CarouselWrapper = styled.div`
  margin: 30px 0;
  width: calc(100% - 20px);
  margin-left: 10px;

  ${theme.mediaQueries.xlarge} {
    width: calc(100% + 40px);
    margin-left: -20px;
  }

  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    overflow: visible;

    &:focus {
      outline: none;
    }

    &.dragging {
      cursor: pointer;
      cursor: hand;
    }
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    left: 0;
    top: 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;

    &::before,
    &::after {
      content: '';
      display: table;
    }

    &::after {
      clear: both;
    }

    .slick-loading & {
      visibility: hidden;
    }
  }

  .slick-slide {
    float: left;
    min-height: 1px;
    display: flex;
    height: auto;
    padding: 0 5px;
    opacity: 0.5;
    transition: opacity 0.5s ease-in-out;

    ${theme.mediaQueries.xlarge} {
      padding: 0 20px;
    }

    div {
      width: 100%;
    }

    [dir='rtl'] & {
      float: right;
    }

    img {
      display: block;
    }

    &.slick-loading img {
      display: none;
    }

    &.dragging img {
      pointer-events: none;
    }

    .slick-initialized & {
      display: block;
    }

    .slick-loading & {
      visibility: hidden;
    }

    .slick-vertical & {
      display: block;
      height: auto;
      border: 1px solid transparent;
    }
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-active {
    opacity: 1;
  }

  .slick-arrow {
    opacity: 1;
    transition: all 150ms ease-in-out;
    display: none;
    display: inline-block;
    position: absolute;
    top: calc(50% - 20px);
    z-index: 10;

    &.slick-disabled {
      opacity: 0;
      cursor: default;
    }
  }

  .slick-next {
    transform: rotate(-90deg);
    right: -20px;

    ${theme.mediaQueries.xlarge} {
      right: 0;
    }
  }

  .slick-prev {
    transform: rotate(90deg);
    left: -20px;

    ${theme.mediaQueries.xlarge} {
      left: 0;
    }
  }

  .slick-dots {
    text-align: center;
    margin: 25px;
    display: flex !important;
    justify-content: center;
    align-items: center;

    li {
      margin: 0 10px;
      display: flex;

      button {
        width: 10px;
        height: 10px;
        cursor: pointer;
        background-color: #d6d6d9;
        border-radius: 50%;
      }

      &.slick-active button {
        background-color: ${theme.colors.green};
        width: 15px;
        height: 15px;
        max-height: 15px;
      }
    }
  }
`;
