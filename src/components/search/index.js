import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import debounce from 'lodash/debounce';

import SearchIcon from 'assets/icons/search.svg';
import CloseIcon from 'assets/icons/close.svg';

import { SearchWrapper } from './styles';

class Search extends Component {
  static propTypes = {
    /** value of the input */
    input: PropTypes.string,
    /** placeholder text for input */
    placeholder: PropTypes.string,
    /** callback after input value change (debounced) */
    onChange: PropTypes.func,
    /** callback triggered by pressing return or clicking the search icon */
    onSubmit: PropTypes.func,
    /** input changes blocked */
    disabled: PropTypes.bool,
    /** changes height and font */
    small: PropTypes.bool,
    className: PropTypes.string,
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
    const { placeholder, onSubmit, disabled, className, small } = this.props;
    return (
      <SearchWrapper className={className} small={small}>
        <input
          type="text"
          className="input text"
          placeholder={placeholder}
          onChange={(e) => this.handleChange(e.target.value)}
          value={search}
          onKeyUp={this.handleKeyUp}
          disabled={disabled}
        />
        <Button className="submit-btn" clear onClick={onSubmit}>
          <SearchIcon className="icon-search" />
        </Button>
        {search && (
          <Button
            className="clear-btn"
            clear
            round
            onClick={() => this.handleChange('')}
          >
            <CloseIcon className="icon-close" />
          </Button>
        )}
      </SearchWrapper>
    );
  }
}

export default Search;
