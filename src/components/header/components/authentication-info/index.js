import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { AuthenticationInfoWrapper } from './styles';

class AuthenticationInfo extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <AuthenticationInfoWrapper>
        {children}
      </AuthenticationInfoWrapper>
    )
  }

}

export default AuthenticationInfo;
