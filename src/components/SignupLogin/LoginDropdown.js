import { ReactComponent as NoLogin } from '../../img/header/nologin.svg';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginDropdown(props) {
  //傳入登入狀態，從App.js -> Header.js -> LoginDropdown.js
  const { isLogin, setIsLogin } = props;

  //dorpdown開關，讓.header_dropdown_menu會不會顯示出來？
  const [showDropdown, setShowDropdown] = useState('d-none');

  const handleLogout = async () => {
    try {
      const logout = await axios.get(API_URL + '/auth/logout', {
        withCredentials: true,
      });
      console.log('logout:', logout);
      setShowDropdown('d-none');
      setIsLogin(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div>
        <div
          onClick={() => {
            showDropdown === 'd-none'
              ? setShowDropdown('d-block')
              : setShowDropdown('d-none');
          }}
          style={{ cursor: 'pointer' }}
        >
          <NoLogin />
        </div>

        <div className={`header_dropdown_menu ${showDropdown}`}>
          <ul>
            <li>
              <Link
                to="/activity"
                className="p-2 text-center"
                onClick={() => {
                  setShowDropdown('d-none');
                }}
              >
                我的活動
              </Link>
            </li>
            <li>
              <Link
                to="/fav"
                className="p-2 text-center"
                onClick={() => {
                  setShowDropdown('d-none');
                }}
              >
                我的收藏
              </Link>
            </li>
            <li>
              <Link
                to="/member"
                className="p-2 text-center"
                onClick={() => {
                  setShowDropdown('d-none');
                }}
              >
                帳戶設定
              </Link>
            </li>
            <li>
              <Link
                to="/pwdchanging"
                className="p-2 text-center"
                onClick={() => {
                  setShowDropdown('d-none');
                }}
              >
                變更密碼
              </Link>
            </li>
            <li>
              <Link
                to="/order"
                className="p-2 text-center"
                onClick={() => {
                  setShowDropdown('d-none');
                }}
              >
                我的訂單
              </Link>
            </li>
            <li>
              <Link
                to="/Front"
                className="p-2 text-center"
                onClick={handleLogout}
              >
                登出
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default LoginDropdown;
// aaaa
