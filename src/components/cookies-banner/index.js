import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/button';
import Row from 'components/grid/row';
import Column from 'components/grid/column';
import P from 'components/html/p';

import { CookiesWrapper } from './styles';

class CookiesBanner extends PureComponent {
  state = {
    open: false,
  };

  componentDidMount() {
    this.setState({ open: !JSON.parse(localStorage.getItem('agreeCookies')) });
  }

  agreeCookies = () => {
    this.setState({ open: false });
    localStorage.setItem('agreeCookies', true);
    this.props.afterAgree();
  };

  render() {
    const { open } = this.state;

    return open ? (
      <CookiesWrapper>
        <Row>
          <Column width={[0, 1 / 12]} />
          <Column
            width={[1, 2 / 3]}
            className="column small-12 medium-8 medium-offset-1"
          >
            <P className="cookies-text">
              This website uses cookies to provide you with an improved user
              experience. By continuing to browse this site, you consent to the
              use of cookies and similar technologies. Please visit our
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                privacy policy
                {' '}
              </a>
              {' '}
              for further details.
            </P>
          </Column>
          <Column width={[1, 1 / 6]} className="cookies-button">
            <Button
              className="cookies-btn"
              color="grey"
              size="small"
              onClick={this.agreeCookies}
            >
              I agree
            </Button>
          </Column>
        </Row>
      </CookiesWrapper>
    ) : null;
  }
}

CookiesBanner.propTypes = {
  afterAgree: PropTypes.func,
};

export default CookiesBanner;
