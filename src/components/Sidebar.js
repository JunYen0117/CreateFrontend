import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul className="col-md-4 text-center">
          <li>
            <a href="#/" className="text-decoration-none ">
              我的活動
            </a>
          </li>
          <li>
            <a href="#/" className="text-decoration-none">
              我的收藏
            </a>
          </li>
          <li>
            <a href="#/" className="text-decoration-none">
              帳戶設定
            </a>
          </li>
          <li>
            <a href="#/" className="text-decoration-none">
              變更密碼
            </a>
          </li>
          <li>
            <a href="#/" className="text-decoration-none">
              <Link to='/order'>我的訂單 </Link>
            </a>
          </li>
          <li>
            <a href="#/" className="text-decoration-none">
              優惠券
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
