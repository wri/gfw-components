import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import debounce from 'lodash/debounce';
import cx from 'classnames';

import SearchIcon from 'assets/icons/search.svg';
import CloseIcon from 'assets/icons/close.svg';

import './styles.scss';
import './themes/small.scss';

class Search extends Component {
  static propTypes = {
    input: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    theme: PropTypes.string,
  };

  static defaultProps = { input: '' };

  state = { search: this.props.input };

  handleChange = (value) => {
    this.setState({ search: value });
    this.debouncedChange();
  };

  handleKeyUp = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    if (onSubmit && e.keyCode === 13) {
      onSubmit(e);
    }
  };

  debouncedChange = debounce(() => {
    const { onChange } = this.props;
    if (onChange) {
      this.props.onChange(this.state.search);
    }
  }, 150);

  render() {
    const { search } = this.state;
    const { placeholder, onSubmit, disabled, className, theme } = this.props;
    return (
      <div className={cx('c-search', theme, className)}>
        <input
          type="text"
          className="input text"
          placeholder={placeholder}
          onChange={(e) => this.handleChange(e.target.value)}
          value={search}
          onKeyUp={this.handleKeyUp}
          disabled={disabled}
        />
        <Button className="submit-btn" theme="button-clear" onClick={onSubmit}>
          <SearchIcon className="icon-search" />
        </Button>
        {search && (
          <Button
            className="clear-btn"
            theme="button-clear round"
            onClick={() => this.handleChange('')}
          >
            <CloseIcon className="icon-close" />
          </Button>
        )}
      </div>
    );
  }
}

export default Search;
