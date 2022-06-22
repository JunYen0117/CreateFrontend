
import LogoSvg1 from '../img/logo.svg';

function ForgottenPwdBody() {
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
            <button className="forgotten_pwd_btn mx-auto">
              傳送密碼確認信至信箱
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default ForgottenPwdBody;
