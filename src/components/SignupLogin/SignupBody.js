function SignupBody() {
  return (
    <>
      <form className="signup_form">
        <div className="signup_body pb-3 mb-2">
          <h3 className="signup_title text-center py-4">新會員註冊</h3>
          <div className="is_required mb-1">*為必填欄位</div>
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
        <div className="signup_footer d-flex flex-column">
          <div className="my-3 d-flex justify-content-center">
            <input type="checkbox" className="align-self-center me-3" />
            <div className="isagree_text d-inline-block">
              我同意網站&ensp;
              <a href="#/" alt="#/">
                隱私權政策
              </a>
              &ensp;和&ensp;
              <a href="#/" alt="#/">
                服務條款
              </a>
            </div>
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
