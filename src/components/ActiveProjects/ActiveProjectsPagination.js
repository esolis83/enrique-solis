import React from 'react';
import { PaginationWrapper, PageButton, PageArrow, PageInfo } from './ActiveProjectsLayout.styles';

const ALL_TAG = 'All';

const ActiveProjectsPagination = ({ currentPage, totalPages, pageStart, projectsPerPage, totalCount, activeTag, onPageChange }) => (
  <>
    <PaginationWrapper>
      <PageArrow
        type="button"
        disabled={ currentPage === 1 }
        onClick={ () => onPageChange(currentPage - 1) }
        aria-label="Previous page"
      >
        ← Prev
      </PageArrow>

      { Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <PageButton
          key={ page }
          type="button"
          active={ page === currentPage }
          onClick={ () => onPageChange(page) }
          aria-label={ `Go to page ${page}` }
          aria-current={ page === currentPage ? 'page' : undefined }
        >
          { page }
        </PageButton>
      )) }

      <PageArrow
        type="button"
        disabled={ currentPage === totalPages }
        onClick={ () => onPageChange(currentPage + 1) }
        aria-label="Next page"
      >
        Next →
      </PageArrow>
    </PaginationWrapper>

    <PageInfo>
      Showing { pageStart + 1 }–{ Math.min(pageStart + projectsPerPage, totalCount) } of { totalCount } project{ totalCount !== 1 ? 's' : '' }{ activeTag !== ALL_TAG ? ` tagged "${activeTag}"` : '' }
    </PageInfo>
  </>
);

export default ActiveProjectsPagination;
