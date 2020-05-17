import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TwitterIcon from 'assets/icons/social/twitter.svg';
import FacebookIcon from 'assets/icons/social/facebook.svg';

import Switch from 'components/switch';
import Button from 'components/button';
import Loader from 'components/loader';

import getShortenUrl from 'services/bitly';

import { ShareWrapper } from './styles';

const isServer = typeof window === 'undefined';

class Share extends PureComponent {
  static propTypes = {
    /** title string */
    title: PropTypes.string,
    /** url in input when link is selected */
    shareUrl: PropTypes.string,
    /** url in input when embed is selected */
    embedUrl: PropTypes.string,
    /** enables embed tab menu */
    embed: PropTypes.bool,
    /** overide the iframe width and height */
    embedSettings: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    /** API token for bitly account */
    token: PropTypes.string,
  };

  static defaultProps = {
    title: 'Share this view',
    shareUrl: '',
    embedUrl: '',
    embedSettings: { width: 670, height: 490 },
    token: process.env.BITLY_TOKEN,
  };

  state = {
    loading: false,
    copied: false,
    selected: 'link',
    shareUrl: this.props.shareUrl || (!isServer ? window.location.href : ''),
    embedUrl:
      this.props.embedUrl ||
      (this.props.embed && !isServer ? window.location.href : ''),
  };

  componentDidMount() {
    this.handleShortenUrl();
  }

  handleShortenUrl = () => {
    if (this.props.token) {
      getShortenUrl(this.state.shareUrl, this.props.token)
        .then((response) => {
          if (response.data.status_code === 200) {
            this.setState({
              shareUrl: response?.data?.data?.url,
              loading: false,
            });
          } else {
            this.setState({ loading: false });
          }
        })
        .catch(() => this.setState({ loading: false }));
    }
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
      <ShareWrapper>
        <div className="actions">
          {embedUrl && (
            <Switch
              className="share-switch-tab"
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
              medium
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
            <Button light round big className="social-btn">
              <TwitterIcon className="social-icon" />
            </Button>
          </a>
          <a
            href={`https://www.facebook.com/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button light round big className="social-btn">
              <FacebookIcon className="social-icon" />
            </Button>
          </a>
        </div>
      </ShareWrapper>
    );
  }
}

export default Share;
