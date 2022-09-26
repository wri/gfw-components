import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/button';
import Row from 'components/grid/row';
import Column from 'components/grid/column';
import P from 'components/html/p';

import { CookiesWrapper } from './styles';

const CookiesBanner = ({ onAccept }) => (
  <CookiesWrapper>
    <Row className="cookies-row">
      <Column className="cookies-text">
        <P>
          This website uses cookies to provide you with an improved user
          experience. By continuing to browse this site, you consent to the use
          of cookies and similar technologies. Please visit our
          {' '}
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>
          {' '}
          for further details.
        </P>
      </Column>
      <Column className="cookies-button">
        <Button lightGreyAlternate onClick={onAccept}>
          I agree
        </Button>
      </Column>
    </Row>
  </CookiesWrapper>
);

CookiesBanner.propTypes = {
  onAccept: PropTypes.func,
};

export default CookiesBanner;
