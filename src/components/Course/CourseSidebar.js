function Sidebar() {
  return (
    <>
      <div className="coure-sidebar">
        <ul className="nav flex-column d-flex justify-content-center">
          <li className="nav-item">
            <a className="nav-link d-flex justify-content-end" href="#j">
              課程介紹
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex justify-content-end" href="#s">
              課程說明
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex justify-content-end" href="#go">
              購買須知
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex justify-content-end" href="#buy">
              商品購買
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
