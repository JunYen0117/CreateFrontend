import { useState } from 'react';
import { Modal } from 'react-bootstrap';

function CheckoutForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="cart_checkout_btn" onClick={handleShow}>
        前往結帳
      </button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          className="checkout_modal_header"
        ></Modal.Header>
        <div className="container p-3">
          <form className="checkout_modal_body row g-3">
            <div className="col-12">
              <h1 className="checkout_modal_title text-center">收件資料</h1>
            </div>
            <div className="col-12">
              <label className="w-100 mb-2 h2">收件人姓名</label>
              <input
                type="text"
                placeholder="預設會員姓名"
                name="customer"
                className="w-100 form-control"
                required
              />
            </div>
            <div className="col-12">
              <label className="w-100 mb-2 h2">Email</label>
              <input
                type="email"
                placeholder="name@example.com"
                name="email"
                className="w-100 form-control"
                required
              />
            </div>
            <div className="col-12">
              <label className="w-100 mb-2 h2">行動電話</label>
              <input
                type="text"
                name="phone"
                className="w-100 form-control"
                required
              />
            </div>
            <div className="col-6">
              <label className="w-100 mb-2 h2">縣市</label>
              <select className="form-control" name="county" required>
                <option>桃園市</option>
              </select>
            </div>
            <div className="col-6">
              <label className="w-100 mb-2 h2" name="district">
                鄉鎮市區
              </label>
              <select className="form-control" required>
                <option>桃園市</option>
              </select>
            </div>
            <div className="col-12">
              <label className="w-100 mb-2 h2">地址</label>
              <input type="text" className="w-100 form-control" required />
            </div>
            <div className="col-12 d-flex justify-content-center mb-3">
              <button
                className="btn mx-3 checkout_modal_btn w-100"
                onClick={handleClose}
              >
                返回購物車
              </button>
              <button
                className="btn mx-3 checkout_modal_btn w-100"
                type="submit"
              >
                確認結帳
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default CheckoutForm;
