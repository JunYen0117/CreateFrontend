import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul className="col-md-4 text-center">
          <li>
            <NavLink href="#/" className="text-decoration-none">
              我的活動
            </NavLink>
          </li>
          <li>
            <NavLink href="/fav" className="text-decoration-none">
              我的收藏
            </NavLink>
          </li>
          <li>
            <NavLink href="#/" className="text-decoration-none">
              帳戶設定
            </NavLink>
          </li>
          <li>
            <NavLink href="#/" className="text-decoration-none">
              變更密碼
            </NavLink>
          </li>
          <li>
            <NavLink href="/order" className="text-decoration-none">
              我的訂單
            </NavLink>
          </li>
          <li>
            <NavLink href="#/" className="text-decoration-none">
              優惠券
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
