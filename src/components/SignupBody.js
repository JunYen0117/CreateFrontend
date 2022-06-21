function SignupBody() {
  return (
    <>
      <form className="signup_form">
        <div className="signup_body">
          <h3 className="signup_title text-center py-4">新會員註冊</h3>
          <div className="">*為必填欄位</div>
          <div>
            <input
              className="mx-auto mb-4"
              type="text"
              placeholder="帳號信箱*"
            />
          </div>
          <div>
            <input
              className="mx-auto mb-4"
              type="password"
              placeholder="密碼*"
            />
          </div>
          <div>
            <input
              className="mx-auto mb-4"
              type="password"
              placeholder="請再確認密碼*"
            />
          </div>
          <div>
            <input className="mx-auto mb-4" type="text" placeholder="用戶名*" />
          </div>
          <div>
            <input className="mx-auto mb-4" type="text" placeholder="電話" />
          </div>
          <div>
            <input className="mx-auto mb-4" type="text" placeholder="地址" />
          </div>
          <div>
            <input className="mx-auto mb-4" type="text" placeholder="性別" />
          </div>
          <div>
            <input
              className="mx-auto mb-4"
              type="text"
              placeholder="出生日期"
            />
          </div>
        </div>
        <div className="signup_footer">
          <input type="checkbox" />
          <div>
            我同意網站
            <a href="#/" alt="#/">
              隱私權政策
            </a>
            和
            <a href="#/" alt="#/">
              服務條款
            </a>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <button className="signup_btn mx-auto">註冊</button>
          </div>
        </div>
      </form>
    </>
  );
}
export default SignupBody;
