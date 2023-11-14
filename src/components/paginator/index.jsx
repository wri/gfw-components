import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PaginatorWrapper } from './styles';

const MAX_PAGES_DISPLAYED = 4;

/**
 * @param {Number} start
 * @param {Number} stop
 * @param {Number} step
 * @returns {Array<Number>}
 */
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const Paginator = ({ totalPages, currentPage, handleSelectPage }) => {
  const half = Math.floor(MAX_PAGES_DISPLAYED / 2);
  const bottomLimit = currentPage - half >= 1 ? currentPage - half : 1;
  const topLimit =
    currentPage + half <= totalPages ? currentPage + half : totalPages;

  const pages = range(bottomLimit, topLimit, 1);
  const showLeftDots = !pages.includes(1);
  const showRightDots = !pages.includes(totalPages);

  return (
    <PaginatorWrapper data-component-type="paginator">
      <button
        className={classNames({
          disabled: currentPage === 1,
        })}
        disabled={currentPage === 1}
        onClick={() => handleSelectPage(currentPage - 1)}
      >
        PREVIOUS
      </button>
      {showLeftDots && <div className="dots-left">…</div>}
      {pages.map((page) => (
        <button
          key={page}
          className={classNames('option', {
            selected: currentPage === page,
          })}
          disabled={currentPage === page}
          onClick={() => handleSelectPage(page)}
        >
          {page}
        </button>
      ))}
      {showRightDots && <div className="dots-right">…</div>}
      <button
        className={classNames({
          disabled: currentPage === totalPages,
        })}
        disabled={currentPage === totalPages}
        onClick={() => handleSelectPage(currentPage + 1)}
      >
        NEXT
      </button>
    </PaginatorWrapper>
  );
};

Paginator.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  /** function that sends the selected page */
  handleSelectPage: PropTypes.func,
};

export default Paginator;
