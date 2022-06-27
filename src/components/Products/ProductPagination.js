import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function ProductPagination(props) {
  const { page, lastPage, setPage } = props;

  // const getPages = () => {
  //   let pages = [];
  //   for (let i = 1; i <= lastPage; i++) {
  //     // page 是當前所在頁面
  //     pages.push(
  //       <li
  //         key={i}
  //         className={`page-item ms-3 my-2 ${i === page ? 'active' : ''}`}
  //         onClick={() => {
  //           setPage(i);
  //         }}
  //       >
  //         <a className="page-link" href="#/">
  //           {i}
  //         </a>
  //       </li>
  //     );
  //   }
  //   return pages;
  // };

  const getPages = () => {
    // page 是當前所在頁面
    return (
      <>
        {page > 2 ? (
          <li
            className="page-item ms-3 my-2"
            onClick={() => {
              setPage(page - 2);
            }}
          >
            <a className="page-link" href="#/">
              {page - 2}
            </a>
          </li>
        ) : (
          ''
        )}
        {page > 1 ? (
          <li
            className="page-item ms-3 my-2"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            <a className="page-link" href="#/">
              {page - 1}
            </a>
          </li>
        ) : (
          ''
        )}

        <li className="page-item ms-3 my-2 active">
          <a className="page-link" href="#/">
            {page}
          </a>
        </li>

        {page <= lastPage - 1 ? (
          <li
            className="page-item ms-3 my-2"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <a className="page-link" href="#/">
              {page + 1}
            </a>
          </li>
        ) : (
          ''
        )}

        {page <= lastPage - 2 ? (
          <li
            className="page-item ms-3 my-2"
            onClick={() => {
              setPage(page + 2);
            }}
          >
            <a className="page-link" href="#/">
              {page + 2}
            </a>
          </li>
        ) : (
          ''
        )}
      </>
    );
  };

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination product_page justify-content-end me-4 my-5 flex-wrap">
          {page > 1 ? (
            <li
              className="page-item my-2"
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
          ) : (
            ''
          )}
          {getPages()}
          {page === lastPage ? (
            ''
          ) : (
            <li
              className="page-item ms-3 my-2"
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
          )}
        </ul>
      </nav>
    </>
  );
}

export default ProductPagination;
