function PaymentUser() {
  return (
    <>
      <div className="border mar p-4">
        <h1 className="card-title mb-4">填寫聯絡人資料</h1>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            姓名
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="請輸入姓名"
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            E-mail
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="請輸入E-mail"
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            手機
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="請輸入手機"
          />
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            同會員資料
          </label>
        </div>
      </div>
    </>
  );
}
export default PaymentUser;
