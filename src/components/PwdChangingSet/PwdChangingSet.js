import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PwdChangingSet = () => {
  return (
    <>
      <div className="pwdchanging container-fluid my-5">
        <h2 className="pwdchanging_title mb-3">變更密碼</h2>
        <div>
          <div>
            <Form>
              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextName"
              >
                <Form.Label column sm="2">
                  舊密碼
                </Form.Label>

                <Form.Control
                  className="pwdchanging_input"
                  placeholder="Name"
                />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextTel"
              >
                <Form.Label column sm="2">
                  新密碼
                </Form.Label>

                <Form.Control className="pwdchanging_input" placeholder="Tel" />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextAddress"
              >
                <Form.Label column sm="2">
                  確認新密碼
                </Form.Label>

                <Form.Control
                  className="pwdchanging_input"
                  placeholder="Address"
                />
              </Form.Group>

              <Form.Group className="d-flex justify-content-center justify-content-md-end mb-5">
                <Button className="pwdchanging_update_btn mx-auto mx-md-0">
                  更新
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PwdChangingSet;
