import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { empty } from 'components/forms/validations';

import Button from 'components/button';
import Loader from 'components/loader';
import Input from 'components/forms/components/input';

import { SubmitWrapper } from './styles';

class Submit extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    submitting: PropTypes.bool,
    children: PropTypes.node,
  };

  render() {
    const { submitting, children, className } = this.props;

    return (
      <SubmitWrapper className={className}>
        <Input
          name="pardot_extra_field"
          label="comments"
          validate={[empty]}
          hidden
        />
        <Button className="submit-btn" type="submit" disabled={submitting}>
          {submitting ? <Loader className="submit-loader" /> : children}
        </Button>
      </SubmitWrapper>
    );
  }
}

export default Submit;
