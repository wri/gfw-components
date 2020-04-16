import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TwitterIcon from 'assets/icons/social/twitter.svg';
import FacebookIcon from 'assets/icons/social/facebook.svg';

import Switch from 'components/switch';
import Button from 'components/button';
import Loader from 'components/loader';

import getShortenUrl from 'services/bitly';

import './styles.scss';

class Share extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    shareUrl: PropTypes.string,
    embedUrl: PropTypes.string,
    embed: PropTypes.bool,
    embedSettings: PropTypes.object,
  };

  static defaultProps = {
    title: 'Share this view',
    shareUrl: '',
    embedUrl: '',
    embedSettings: { width: 670, height: 490 },
  };

  state = {
    loading: false,
    copied: false,
    selected: 'link',
    shareUrl:
      this.props.shareUrl ||
      (typeof window !== 'undefined' ? window.location.href : ''),
    embedUrl:
      this.props.embedUrl ||
      (this.props.embed && typeof window !== 'undefined'
        ? window.location.href
        : ''),
  };

  componentDidMount() {
    this.handleShortenUrl();
  }

  handleShortenUrl = () => {
    getShortenUrl(this.state.shareUrl).then((response) => {
      if (response.data.status_code === 200) {
        this.setState({ shareUrl: response?.data?.data?.url, loading: false });
      } else {
        this.setState({ loading: false });
      }
    });
  };

  handleCopyToClipboard = (input) => {
    input.select();

    try {
      document.execCommand('copy');
      this.setState({ copied: true });
      setTimeout(() => this.setState({ copied: false }), 2500);
    } catch (err) {
      alert('This browser does not support clipboard access'); // eslint-disable-line
    }
  };

  handleFocus = (event) => {
    event.target.select();
  };

  render() {
    const { title, embedSettings } = this.props;
    const { selected, loading, copied, shareUrl, embedUrl } = this.state;
    const { width, height } = embedSettings || {};

    const inputValue =
      selected === 'embed'
        ? `<iframe width="${width || 670}" height="${
            height || 490
          }" frameborder="0" src="${embedUrl}"></iframe>`
        : shareUrl;

    return (
      <div className="c-share">
        <div className="actions">
          {embedUrl && (
            <Switch
              className="share-switch-tab"
              theme="theme-switch-light"
              value={selected}
              options={[
                { label: 'LINK', value: 'link' },
                { label: 'EMBED', value: 'embed' },
              ]}
              onChange={() =>
                this.setState({
                  selected: selected === 'embed' ? 'link' : 'embed',
                })}
            />
          )}
          <p className="info">
            {selected === 'embed'
              ? 'Click and paste HTML to embed in website'
              : 'Click and paste link in email or IM'}
          </p>
          <div className="input-wrapper">
            <div className="input-container">
              {loading && selected !== 'embed' && (
                <Loader className="input-loader" />
              )}
              <input
                ref={(input) => {
                  this.textInput = input;
                }}
                type="text"
                value={!loading ? inputValue : ''}
                readOnly
                onClick={this.handleFocus}
              />
            </div>
            <Button
              theme="button-medium"
              className="copy-button"
              onClick={() => this.handleCopyToClipboard(this.textInput)}
              disabled={loading}
            >
              {copied ? 'COPIED!' : 'COPY'}
            </Button>
          </div>
        </div>
        <div className="social-container">
          <a
            href={`https://twitter.com/intent/tweet?text=${title}&via=globalforests&url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button theme="button-light round big" className="social-btn">
              <TwitterIcon className="social-icon" />
            </Button>
          </a>
          <a
            href={`https://www.facebook.com/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button theme="button-light round big" className="social-btn">
              <FacebookIcon className="social-icon" />
            </Button>
          </a>
        </div>
      </div>
    );
  }
}

export default Share;
