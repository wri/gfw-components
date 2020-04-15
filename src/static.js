import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import isEmpty from 'lodash/isEmpty';
import { createBrowserHistory } from 'history';

import Header from './components/header';
import Footer from './components/footer';
import ContactUsModal from './components/modals/contact-us';

const history = createBrowserHistory();

const setModalOpen = (open) => {
  const query = qs.parse(window.location.search);

  if (open) {
    history.push(`${window.location.pathname}?${qs.stringify({ ...query, show_contact: true })}`);
  } else {
    delete query.show_contact
    history.push(`${window.location.pathname}${isEmpty(query) ? '' : `?${qs.stringify(query)}`}`);
  }
}

const ContactUsModalComp = ({ history }) => {
  const [open, setOpen] = useState(window.location.search.includes('show_contact'));

  useEffect(() => {
    return history.listen((location) => {
      setOpen(location.search.includes('show_contact=true'));
    })
  }, [history])

  return (
    <ContactUsModal
      open={open}
      onRequestClose={() => {
        setModalOpen(false);
      }}
    />
  )
}

ContactUsModalComp.propTypes = {
  history: PropTypes.object
}

const showHeader = () => {
  if (typeof document !== 'undefined') {
    const el = document.getElementById('headerGfw');
    if (!el) {
      throw new Error("element #headerGfw doesn't exist");
    }

    ReactDOM.render(
      <Header
        openContactUsModal={() => {
          setModalOpen(true);
        }}
      />
    , el)
  }
};

const showFooter = () => {
  if (typeof document !== 'undefined') {
    const el = document.getElementById('footerGfw');
    if (!el) {
      throw new Error("element #footerGfw doesn't exist");
    }
    ReactDOM.render(
      <Footer
        openContactUsModal={() => {
          setModalOpen(true);
        }}
      />
    , el);
  }
};

const showContactUsModal = () => {
  if (typeof document !== 'undefined') {
    const el = document.getElementById('contactGfw');
    if (!el) {
      throw new Error("element #contactGfw doesn't exist");
    }
    ReactDOM.render(
      <ContactUsModalComp history={history} />
    , el);
  }
};

const renderAssets = () => {
  showHeader();
  showFooter();
  showContactUsModal();
}

if (
  typeof document !== 'undefined' &&
  !!document.readyState &&
    (document.readyState === 'complete' ||
      document.readyState === 'interactive')
) {
  renderAssets();
} else if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', renderAssets);
}
