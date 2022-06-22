import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';

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
      <div className="container-fluid">
        <div className="memberset mt-5">
          <h2 className="memberset_title">帳戶設定</h2>
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <figure className="memberset_figure">
              <IconContext.Provider value={{ color: '#b99664', size: '150px' }}>
                <FaUser className="memberset_figure_SVG mx-auto" />
              </IconContext.Provider>
            </figure>
          </div>
          <div>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formFile">
                <Form.Label column sm="2">
                  修改頭像
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="file" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  帳號信箱
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue="Email"
                    disabled
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextName"
              >
                <Form.Label column sm="2">
                  用戶名
                </Form.Label>
                <Col sm="6">
                  <Form.Control plaintext defaultValue="Name" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextTel"
              >
                <Form.Label column sm="2">
                  電話
                </Form.Label>
                <Col sm="6">
                  <Form.Control plaintext defaultValue="Tel" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextAddress"
              >
                <Form.Label column sm="2">
                  地址
                </Form.Label>
                <Col sm="6">
                  <Form.Control plaintext defaultValue="Address" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="" disabled>
                <Form.Label column sm="2">
                  性別
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue="F/M"
                    disabled
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  出生日期
                </Form.Label>
                <Col sm="5" className="d-flex">
                  <Form.Control
                    className="memberSet_form"
                    plaintext
                    readOnly
                    defaultValue=""
                    disabled
                  />
                  <p className="mx-3 my-auto">年</p>
                  <Form.Control
                    className="memberSet_form"
                    plaintext
                    readOnly
                    defaultValue=""
                    disabled
                  />
                  <p className="mx-3 my-auto">月</p>
                  <Form.Control
                    className="memberSet_form"
                    plaintext
                    readOnly
                    defaultValue=""
                    disabled
                  />
                  <p className="mx-3 my-auto">日</p>
                </Col>
              </Form.Group>
              <Button className="memberSet_update_btn mb-5">更新</Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberSet;
