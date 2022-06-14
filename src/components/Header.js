import { ReactComponent as LogoSvg } from '../img/logo.svg';
import LogoDesktop from '../img/logo.svg';
import { ReactComponent as Search } from '../img/search.svg';
import { ReactComponent as Shopcart1 } from '../img/shopcart1.svg';
import { ReactComponent as NoLogin } from '../img/nologin.svg';
import { ReactComponent as Hamburger } from '../img/Hamburger.svg';
import { ReactComponent as MobileSearch } from '../img/MobileSearch.svg';
import { ReactComponent as More } from '../img/More.svg';
import styled from '@emotion/styled';

const LogoMobile = styled(LogoSvg)`
  width: 85px;
`;

function Header() {
  return (
    <>
      <header className="container-fluid">
        <div className="d-none d-md-flex justify-content-between">
          <div className="d-flex">
            <figure className="desktop_figure mx-5 mt-4">
              <a href="#/">
                <img src={LogoDesktop} alt="" />
              </a>
            </figure>
            <li className="search_item d-none d-md-block mt-5">
              <input className="search_bar" type="text" />
              <a href="#/" className="search_icon">
                <Search />
              </a>
            </li>
          </div>
          <ul className="menu1 d-none d-md-flex pt-4">
            <li className="shopcart_item mt-3 me-5">
              <Shopcart1 />
            </li>
            <li className="profile_item mt-3 me-5">
              <NoLogin />
            </li>
          </ul>
        </div>
        <ul className="menu2 d-none d-md-flex justify-content-around pt-4">
          <li>
            <a href="#/">主題企劃</a>
          </li>
          <li>
            <a href="#/">活動資訊</a>
          </li>
          <li>
            <a href="#/">購物商城</a>
          </li>
          <li>
            <a href="#/">文章專欄</a>
          </li>
          <li>
            <a href="#/">關於我們</a>
          </li>
        </ul>

        {/* 以下為手機版 */}
        <figure className="mobile_figure d-md-none mx-auto">
          <a href="#/">
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
            >
              <Hamburger />
            </a>
          </figure>
          <ul className="d-flex">
            <figure className="me-3">
              <a href="#/">
                <MobileSearch />
              </a>
            </figure>
            <figure>
              <a
                data-bs-toggle="offcanvas"
                href="#offcanvas_right"
                role="button"
                aria-controls="offcanvasExample"
              >
                <More />
              </a>
            </figure>
          </ul>
        </ul>

        {/* offcanvas效果 */}
        <div
          className="offcanvas_left offcanvas offcanvas-start d-md-none"
          tabindex="-1"
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
              <a href="#/">主題企劃</a>
            </li>
            <li>
              <a href="#/">活動資訊</a>
            </li>
            <li>
              <a href="#/">購物商城</a>
            </li>
            <li>
              <a href="#/">文章專欄</a>
            </li>
            <li className="last_li">
              <a href="#/">關於我們</a>
            </li>
          </ul>
        </div>
        <div
          className="offcanvas_left offcanvas offcanvas-end d-md-none"
          tabindex="-1"
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
              <a href="#/">購物車</a>
            </li>
            <li>
              <a href="#/">我的活動</a>
            </li>
            <li>
              <a href="#/">我的收藏</a>
            </li>
            <li>
              <a href="#/">帳戶設定</a>
            </li>
            <li>
              <a href="#/">變更密碼</a>
            </li>
            <li className="last_li">
              <a href="#/">我的訂單</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
