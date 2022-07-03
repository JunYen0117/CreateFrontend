import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useLogin } from '../../utils/useLogin';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PwdChangingSet = () => {
  const { user } = useLogin();

  const [password, setPassword] = useState({
    userID: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  function handleChangePassword(e) {
    setPassword({
      ...password,
      userID: user.userID,
      [e.target.name]: e.target.value,
    });
  }

  async function handleUpdatePassword(e) {
    e.preventDefault();
    try {
      let response = await axios.post(
        API_URL + '/member/password/change',
        password
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <div className="pwdchanging container-fluid my-5">
        <h2 className="pwdchanging_title mb-5">變更密碼</h2>
        <div>
          <div>
            <Form>
              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextName"
              >
                <Form.Label column sm="3">
                  舊密碼
                </Form.Label>

                <Form.Control
                  className="pwdchanging_input"
                  type="password"
                  name="oldPassword"
                  onChange={handleChangePassword}
                />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextTel"
              >
                <Form.Label column sm="3">
                  新密碼
                </Form.Label>

                <Form.Control
                  className="pwdchanging_input"
                  type="password"
                  name="newPassword"
                  onChange={handleChangePassword}
                />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-5"
                controlId="formPlaintextAddress"
              >
                <Form.Label column sm="3">
                  確認新密碼
                </Form.Label>

                <Form.Control
                  className="pwdchanging_input"
                  type="password"
                  name="confirmNewPassword"
                  onChange={handleChangePassword}
                />
              </Form.Group>

              <Form.Group className="d-flex justify-content-center justify-content-md-end mb-5">
                <Button
                  className="pwdchanging_update_btn mx-auto mx-md-0"
                  onClick={handleUpdatePassword}
                >
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
