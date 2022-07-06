function PaymentMethod() {
  return (
    <>
      <div className="border p-4 mar">
        <h1 className="card-title mb-4">付款方式</h1>
        <div className="border mb-3">
          <div class="form-check m-3">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              信用卡
            </label>
          </div>
        </div>
        <div className="border">
          <div class="form-check m-3">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              LINE PAY
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
export default PaymentMethod;
