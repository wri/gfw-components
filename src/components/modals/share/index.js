import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TwitterIcon from 'assets/icons/social/twitter.svg';
import FacebookIcon from 'assets/icons/social/facebook.svg';

// import Switch from 'components/ui/switch';
import Button from 'components/button';
import Loader from 'components/loader';
import Modal from 'components/modals/modal';

import getShortenUrl from 'services/bitly';

import './styles.scss';

class ShareModal extends PureComponent {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func,
    title: PropTypes.string,
    shareUrl: PropTypes.string,
    embedUrl: PropTypes.string,
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
    const { open, title, embedUrl, embedSettings, onRequestClose } = this.props;
    const { selected, loading, copied, shareUrl } = this.state;
    const { width, height } = embedSettings || {};

    const inputValue =
      selected === 'embed'
        ? `<iframe width="${width || 670}" height="${
            height || 490
          }" frameborder="0" src="${embedUrl}"></iframe>`
        : shareUrl;

    return (
      <Modal
        open={open}
        contentLabel={`Share: ${title}`}
        onRequestClose={onRequestClose}
        title={title}
        className="c-share-modal"
      >
        <div className="share-content">
          <div className="actions">
            {/* {embedUrl ? (
              <Switch
                className="share-switch-tab"
                theme="theme-switch-light"
                value={selected}
                options={[
                  { label: 'LINK', value: 'link' },
                  { label: 'EMBED', value: 'embed' }
                ]}
                onChange={
                  selected === 'embed'
                    ? () => setShareSelected('link')
                    : () => setShareSelected('embed')
                }
              />
            ) : null} */}
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
      </Modal>
    );
  }
}

export default ShareModal;
