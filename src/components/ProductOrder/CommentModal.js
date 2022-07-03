import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Bird  from '../../img/Bird.jpg';

function CommentModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className=" orderlist-b2 px-3 py-2 mt-2 mb-2"
        onClick={handleShow}
      >
        去評論
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="comment_title">撰寫評論</div>
        </Modal.Header>
        <Modal.Body>
          <div className="ms-1 mb-3 row">
            <div className="comment_img col-3 p-0">
              <img src={Bird} alt="" />
            </div>
            <div className="col-3">product name</div>
            <div className="col-3">product price</div>
            <div className="col-3">star</div>
          </div>
          <Form.Control as="textarea" rows={3} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommentModal;
