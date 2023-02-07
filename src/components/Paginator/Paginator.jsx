import { StyledPaginate } from './paginator.styled';
import PropTypes from 'prop-types';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Paginator({ totalPages, setSearchParams, params, currentPage }) {

  const handlePageClick = event => {
    // set page= to the page number in the url

    // passing other parameters from string to url
    setSearchParams({ ...params, page: event.selected + 1 });
  };

  return (
    <>
      <StyledPaginate
        breakLabel="..."
        previousLabel={<IoIosArrowBack />}
        nextLabel={<IoIosArrowForward />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        forcePage={currentPage}
      />
    </>
  );
}

Paginator.propTypes = {
  totalPages: PropTypes.number.isRequired,
  setSearchParams: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Paginator;
