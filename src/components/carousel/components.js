import styled from '@emotion/styled';
import theme from 'styles/theme';

export const CarouselWrapper = styled.div`
  margin: 30px 0;
  width: calc(100% - 20px);
  margin-left: 10px;

  ${theme.breakpoints.xlarge} {
    width: calc(100% + 40px);
    margin-left: -20px;
  }

  .slick-list {
    overflow: visible;
  }

  .slick-track {
    display: flex;
  }

  .slick-slide {
    display: flex;
    height: auto;
    padding: 0 5px;
    opacity: 0.5;
    transition: opacity 0.5s ease-in-out;

    ${theme.breakpoints.xlarge} {
      padding: 0 20px;
    }

    div {
      width: 100%;
    }
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

    ${theme.breakpoints.xlarge} {
      right: 0;
    }
  }

  .slick-prev {
    transform: rotate(90deg);
    left: -20px;

    ${theme.breakpoints.xlarge} {
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
        background-color: ${theme.colors.darkGrey};
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