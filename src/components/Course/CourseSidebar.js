function Sidebar() {
  return (
    <>
      <div className="coure-sidebar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link title1" href="/#">
              課程介紹
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              課程說明
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              購買須知
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              商品購買
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar;
