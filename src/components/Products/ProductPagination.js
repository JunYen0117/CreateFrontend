import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function ProductPagination(props) {
  const { page, lastPage, setPage } = props;

  const getPages = () => {
    let pages = [];
    for (let i = 1; i <= lastPage; i++) {
      // page 是當前所在頁面
      pages.push(
        <li
          key={i}
          className={`page-item ms-3 ${i === page ? 'active' : ''}`}
          onClick={() => {
            setPage(i);
          }}
        >
          <a className="page-link" href="#/">
            {i}
          </a>
        </li>
      );
    }
    return pages;
  };

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination product_page justify-content-end me-4 my-5">
          <li
            className="page-item"
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
          >
            <a className="page-link" href="#/" aria-label="Previous">
              <AiOutlineLeft />
            </a>
          </li>
          {getPages()}
          <li
            className="page-item ms-3"
            onClick={() => {
              if (page < lastPage) {
                setPage(page + 1);
              }
            }}
          >
            <a className="page-link" href="#/" aria-label="Next">
              <AiOutlineRight />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default ProductPagination;
