import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { IconContext } from 'react-icons';
import { FaUser } from 'react-icons/fa';

function MemberSet() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <div className="memberset container-fluid my-5">
        <h2 className="memberset_title mb-3">帳戶設定</h2>

        <div>
          <div className="d-flex justify-content-center mb-4">
            <figure className="memberset_figure">
              <IconContext.Provider value={{ color: '#b99664', size: '150px' }}>
                <FaUser className="memberset_figure_SVG mx-auto" />
              </IconContext.Provider>
            </figure>
          </div>
          <div>
            <Form>
              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formFile"
              >
                <Form.Label column sm="2">
                  修改頭像
                </Form.Label>

                <Form.Control type="file" className="member_input" />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  帳號信箱
                </Form.Label>

                <Form.Control
                  readOnly
                  placeholder="Email"
                  className="member_input"
                  disabled
                />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextName"
              >
                <Form.Label column sm="2">
                  用戶名
                </Form.Label>

                <Form.Control className="member_input" placeholder="Name" />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextTel"
              >
                <Form.Label column sm="2">
                  電話
                </Form.Label>

                <Form.Control className="member_input" placeholder="Tel" />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextAddress"
              >
                <Form.Label column sm="2">
                  地址
                </Form.Label>

                <Form.Control className="member_input" placeholder="Address" />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId=""
                disabled
              >
                <Form.Label column sm="2">
                  性別
                </Form.Label>
                <Form.Control
                  className="member_input"
                  readOnly
                  placeholder="F/M"
                  disabled
                />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-5"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  生日
                </Form.Label>
                <div className="d-flex">
                  <Form.Control
                    className="member_input member_birth"
                    readOnly
                    disabled
                  />
                  <p className="d-none d-md-block mx-3 my-auto">年</p>
                  <Form.Control
                    className="member_input member_birth"
                    readOnly
                    disabled
                  />
                  <p className="d-none d-md-block mx-3 my-auto">月</p>
                  <Form.Control
                    className="member_input member_birth"
                    readOnly
                    disabled
                  />
                  <p className="d-none d-md-block mx-3 my-auto">日</p>
                </div>
              </Form.Group>
              <Form.Group className="d-flex justify-content-center justify-content-md-end mb-5">
                <Button className="member_update_btn mx-auto mx-md-0">更新</Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberSet;
