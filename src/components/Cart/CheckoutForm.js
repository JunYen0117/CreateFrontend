import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';

import CheckoutList from './CheckoutList';

function CheckoutForm(props) {
  const { checkList } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="cart_checkout_btn w-100 py-2" onClick={handleShow}>
        前往結帳
      </button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          className="checkout_modal_header"
        ></Modal.Header>
        <div className="container p-3">
          {checkList.length === 0 ? (
            <>
              <h1 className="checkout_modal_title text-center">
                您沒有選擇任何商品
              </h1>
              <div className="text-center">
                <button
                  className="btn checkout_modal_btn my-3"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClose();
                  }}
                >
                  返回購物車
                </button>
              </div>
            </>
          ) : (
            <form className="checkout_modal_body row g-3">
              <div className="col-12">
                <h1 className="checkout_modal_title text-center">商品資訊</h1>
              </div>
              <div className="col-12">
                <CheckoutList checkList={checkList} />
              </div>
              <div className="col-12 d-flex justify-content-center mb-3">
                <button
                  className="btn mx-3 checkout_modal_btn w-100"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClose();
                  }}
                >
                  返回購物車
                </button>
                <button
                  className="btn mx-3 checkout_modal_btn w-100"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClose();
                    Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: '結帳成功',
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }}
                >
                  確認結帳
                </button>
              </div>
            </form>
          )}
        </div>
      </Modal>
    </>
  );
}

export default CheckoutForm;
