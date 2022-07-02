import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useState } from 'react';
import LogoSvg1 from '../../img/header/logo.svg';

function ForgottenPwdBody() {
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.get(API_URL + '/email');
      console.log(response);
    } catch (e) {
      console.error('前端寄email錯誤' + e);
    }
  }
  return (
    <>
      <form className="forgotten_pwd_form">
        <div className="forgotten_pwd_body">
          <figure className="forgotten_pwd_logo">
            <img src={LogoSvg1} alt="#/" />
          </figure>
          <h3 className="forgotten_pwd_title text-center pb-4">忘記密碼</h3>
          <div className="forgotten_pwd">
            <input className="mx-auto mb-5" placeholder="請輸入註冊信箱" />
          </div>
          <div className="d-flex justify-content-center mb-4">
            <button
              className="forgotten_pwd_btn mx-auto"
              onClick={handleSubmit}
            >
              傳送密碼確認信至信箱
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default ForgottenPwdBody;
