import styled from '@emotion/styled';
import theme from 'styles/theme';

export const SwitchWrapper = styled.div`
  .react-toggle {
    touch-action: pan-x;

    display: block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;

    width: 100%;
  }

  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .react-toggle--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    transition: opacity 0.25s;
  }

  .react-toggle-track {
    padding: 0;
    border-radius: 30px;
    background-color: #4D4D4D;
    transition: all 0.2s ease;
    width: 100%;
    height: 34px;
    background-color: transparent !important;
    border: solid 1px ${theme.colors.border};

    > div {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      font-size: 13px;
      color: ${theme.colors.slate};
    }

    .react-toggle-track-check {
      left: 0;
    }

    .react-toggle-track-x {
      right: 0;
    }
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #000000;
  }

  .react-toggle--checked .react-toggle-track {
    background-color: #19AB27;
  }

  .react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #128D15;
  }

  .react-toggle-track-check {
    position: absolute;
    width: 14px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    left: 8px;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle-track-x {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    right: 10px;
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-x {
    opacity: 0;
  }

  .react-toggle-thumb {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    box-sizing: border-box;
    transition: all 0.25s ease;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: transparent;
    border-radius: 30px;
    border: solid 1px ${theme.colors.green};
    box-shadow: none !important;
  }

  .react-toggle--checked .react-toggle-thumb {
    left: 27px;
    border-color: #19AB27;

    .react-toggle-thumb {
      left: 50%;
    }
  }

  .react-toggle--focus .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 3px 2px #0099E0;
    -moz-box-shadow: 0px 0px 3px 2px #0099E0;
    box-shadow: 0px 0px 2px 3px #0099E0;
  }

  .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 5px 5px #0099E0;
    -moz-box-shadow: 0px 0px 5px 5px #0099E0;
    box-shadow: 0px 0px 5px 5px #0099E0;
  }

  .label {
    margin-bottom: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 400;
    font-size: 13px;
  }
`;
