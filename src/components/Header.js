import { ReactComponent as LogoSvg } from '../img/header/logo.svg';
import LogoDesktop from '../img/header/logo.svg';
import { ReactComponent as Search } from '../img/header/search.svg';
import { ReactComponent as Shopcart1 } from '../img/header/shopcart1.svg';
import { ReactComponent as NoLogin } from '../img/header/nologin.svg';
import { ReactComponent as Hamburger } from '../img/header/Hamburger.svg';
import { ReactComponent as MobileSearch } from '../img/header/MobileSearch.svg';
import { ReactComponent as More } from '../img/header/More.svg';

import { Link, NavLink, useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

const LogoMobile = styled(LogoSvg)`
  width: 90px;
`;

function Header(props) {
  const history = useHistory();

  if (props.start) {
    return <></>;
  }

  return (
    <>
      <header className="container-fluid">
        <div className="d-none d-md-flex justify-content-between">
          <div className="d-flex ms-5">
            <figure className="desktop_figure mx-5 mt-4">
              <span
                className="header_a"
                onClick={() => {
                  history.push('/');
                }}
              >
                <img src={LogoDesktop} alt="" />
              </span>
            </figure>
            <li className="search_item d-none d-md-block mt-5">
              <input className="search_bar" type="text" />
              <a href="#/" className="search_icon">
                <Search />
              </a>
            </li>
          </div>
          <ul className="header_top menu1 d-none d-md-flex pt-4 ">
            <li className="shopcart_item mt-3 me-3">
              <Link to="/cart">
                <Shopcart1 />
              </Link>
            </li>
            <li className="profile_item mt-3 me-5">
              <NoLogin />
            </li>
          </ul>
        </div>
        <ul className="menu2 d-none d-md-flex justify-content-around pt-4">
          <li>
            <Link to="#/">主題企劃</Link>
          </li>
          <li>
            <Link to="#/">活動資訊</Link>
          </li>
          <li>
            <NavLink to="/product" exact>
              購物商城
            </NavLink>
          </li>
          <li>
            <Link to="#/">文章專欄</Link>
          </li>
          <li>
            <Link to="#/">關於我們</Link>
          </li>
        </ul>

        {/* 以下為手機版 */}
        <figure className="mobile_figure d-md-none mx-auto">
          <a href="#/" className="header_a">
            <LogoMobile />
          </a>
        </figure>
        <ul className="mobile_menu d-flex justify-content-between d-md-none">
          <figure>
            <a
              data-bs-toggle="offcanvas"
              href="#offcanvas_left"
              role="button"
              aria-controls="offcanvasExample"
              className="header_a"
            >
              <Hamburger />
            </a>
          </figure>
          <ul className="d-flex">
            <figure className="me-3">
              <a href="#/" className="header_a">
                <MobileSearch />
              </a>
            </figure>
            <figure>
              <a
                data-bs-toggle="offcanvas"
                href="#offcanvas_right"
                role="button"
                aria-controls="offcanvasExample"
                className="header_a"
              >
                <More />
              </a>
            </figure>
          </ul>
        </ul>

        {/* offcanvas效果 */}
        <div
          className="offcanvas_left offcanvas offcanvas-start d-md-none"
          tabIndex="-1"
          id="offcanvas_left"
          aria-labelledby="offcanvasExampleLabel"
        >
          <ul className="offcanvas_left_menu offcanvas-body d-flex flex-column justify-content-around">
            {/* li包的button是關閉canvas的按鈕 */}
            <li className="d-none">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </li>
            <li>
              <a href="#/" className="header_a">
                主題企劃
              </a>
            </li>
            <li>
              <a href="#/" className="header_a">
                活動資訊
              </a>
            </li>
            <li>
              <a href="#/" className="header_a">
                購物商城
              </a>
            </li>
            <li>
              <a href="#/" className="header_a">
                文章專欄
              </a>
            </li>
            <li className="last_li">
              <a href="#/" className="header_a">
                關於我們
              </a>
            </li>
          </ul>
        </div>
        <div
          className="offcanvas_left offcanvas offcanvas-end d-md-none"
          tabIndex="-1"
          id="offcanvas_right"
          aria-labelledby="offcanvasExampleLabel"
        >
          <ul className="offcanvas_left_menu offcanvas-body d-flex flex-column justify-content-around">
            {/* li包的button是關閉canvas的按鈕 */}
            <li className="d-none">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </li>
            <li>
              <a href="#/" className="header_a">
                購物車
              </a>
            </li>
            <li>
              <a href="#/" className="header_a">
                我的活動
              </a>
            </li>
            <li>
              <a href="#/" className="header_a">
                我的收藏
              </a>
            </li>
            <li>
              <a href="#/" className="header_a">
                帳戶設定
              </a>
            </li>
            <li>
              <a href="#/" className="header_a">
                變更密碼
              </a>
            </li>
            <li className="last_li">
              <a href="#/" className="header_a">
                我的訂單
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
