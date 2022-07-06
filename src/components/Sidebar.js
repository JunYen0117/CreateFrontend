import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul className="col-md-4 text-center">
          <li>
            <Link to="/activity" className="text-decoration-none ">
              我的活動
            </Link>
          </li>
          <li>
            <Link to="/fav" className="text-decoration-none">
              我的收藏
            </Link>
          </li>
          <li>
            <Link to="/member" className="text-decoration-none">
              帳戶設定
            </Link>
          </li>
          <li>
            <Link to="/pwdchanging" className="text-decoration-none">
              變更密碼
            </Link>
          </li>
          <li>
            <Link to="/order" className="text-decoration-none">
              我的訂單
            </Link>
          </li>
          <li>
            <Link to="/coupon" className="text-decoration-none">
              優惠券
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
