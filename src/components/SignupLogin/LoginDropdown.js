import { ReactComponent as NoLogin } from '../../img/header/nologin.svg';

import React, { useState } from 'react';

function LoginDropdown() {
  const [showDropdown, setShowDropdown] = useState('d-none');
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
              <a className="p-2 text-center" href="#/">
                我的活動
              </a>
            </li>
            <li>
              <a className="p-2 text-center" href="#/">
                我的收藏
              </a>
            </li>
            <li>
              <a
                className="p-2 text-center"
                href="http://localhost:3000/member"
              >
                帳戶設定
              </a>
            </li>
            <li>
              <a
                className="p-2 text-center"
                href="http://localhost:3000/pwdchanging"
              >
                變更密碼
              </a>
            </li>
            <li>
              <a className="p-2 text-center" href="#/">
                我的訂單
              </a>
            </li>
            <li>
              <a className="p-2 text-center" href="#/">
                登出
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default LoginDropdown;
