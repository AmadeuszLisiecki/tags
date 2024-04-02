import { Pagination } from '@mui/material';

type PaginationWrapperProps = {
  /**
   * Number of pages.
   */
  count: number,

  /**
   * Selected page.
   */
  page: number,

  /**
   * Page change handler.
   */
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void,
};

/**
 * Wrapper to MUI Pagination.
 */
export const PaginationWrapper = ({
  count,
  page,
  onChange,
}: PaginationWrapperProps) => (
  <Pagination
    count={count}
    page={page}
    onChange={onChange}
  />
)