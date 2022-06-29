import axios from 'axios';
import { API_URL } from '../utils/config';
import { React, useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { IconContext } from 'react-icons';
import { FaUser } from 'react-icons/fa';

function MemberSet() {
  const [member, setMember] = useState({
    id: '',
    member_num: '',
    member_name: '',
    account: '',
    gender: '',
    age: '',
    phone: '',
    address: '',
    create_time: '',
    valid: '',
  });
  useEffect(() => {
    let getMemberInfo = async () => {
      let response = await axios.get(API_URL + '/member', {
        withCredentials: true,
      });
      console.log(response.data); //從後台拿回前台，是session的資料
      setMember(response.data); //把資料塞進狀態
    };
    getMemberInfo();
  }, []);
  // 驗證用，還沒使用到
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };
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
                  type="text"
                  name="account"
                  value={member.account}
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

                <Form.Control
                  type="text"
                  name="member_name"
                  value={member.member_name}
                  className="member_input"
                  placeholder="Name"
                />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextTel"
              >
                <Form.Label column sm="2">
                  電話
                </Form.Label>

                <Form.Control
                  type="tel"
                  name="phone"
                  value={member.phone}
                  className="member_input"
                  placeholder="Tel"
                />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextAddress"
              >
                <Form.Label column sm="2">
                  地址
                </Form.Label>

                <Form.Control
                  type="text"
                  name="address"
                  value={member.address}
                  className="member_input"
                  placeholder="Address"
                />
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
                  type="text"
                  name="gender"
                  value={member.gender}
                  className="member_input"
                  placeholder="F/M"
                />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-5"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  年齡
                </Form.Label>
                <Form.Control
                  type="text"
                  name="age"
                  value={member.age}
                  className="member_input member_birth"
                />
              </Form.Group>
              <Form.Group className="d-flex justify-content-center justify-content-md-end mb-5">
                <Button className="member_update_btn mx-auto mx-md-0">
                  更新
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberSet;
