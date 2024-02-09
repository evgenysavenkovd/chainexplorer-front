import { useMemo } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import { NavButton } from './NavButton';
import styles from './Pagination.module.scss';

export interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentOffset: number;
  onChange: (offset: number) => void;
}

export const Pagination = ({
  currentOffset,
  itemsPerPage,
  totalItems,
  onChange,
}: PaginationProps) => {
  const pagesCount = Math.ceil(totalItems / itemsPerPage);
  const currentPage = Math.floor(currentOffset / itemsPerPage);

  const onPaginationChange: ReactPaginateProps['onPageChange'] = ({
    selected,
  }) => {
    onChange(selected * itemsPerPage);
  };

  const infoString = useMemo(() => {
    if (!totalItems) return 'No items';
    const last =
      currentOffset + itemsPerPage > totalItems
        ? totalItems
        : currentOffset + itemsPerPage;
    return `Showing ${currentOffset + 1} to ${last} of ${totalItems}`;
  }, [currentOffset, itemsPerPage, totalItems]);

  return (
    <div className={styles['pagination-container']}>
      <div className={styles['info']}>{infoString}</div>
      <ReactPaginate
        pageCount={pagesCount}
        pageRangeDisplayed={2}
        forcePage={currentPage}
        nextLabel={<NavButton direction="next" />}
        previousLabel={<NavButton direction="prev" />}
        className={styles['pagination']}
        activeLinkClassName={styles['active']}
        disabledClassName={styles['disabled']}
        pageLinkClassName={styles['page']}
        breakClassName={styles['break']}
        onPageChange={onPaginationChange}
      />
    </div>
  );
};
