import axios from 'axios';
import { API_URL } from '../utils/config';
import { React, useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { IconContext } from 'react-icons';
import { FaUser } from 'react-icons/fa';

function MemberSet() {
  const [avatar, setAvatar] = useState('');
  const [member, setMember] = useState({
    id: '',
    account: '',
    member_name: '',
    phone: '',
    address: '',
    gender: '',
    age: '',
    avatar: '',
  });
  const [updateImg, setUpdateImg] = useState(true);

  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }

  function handleAvatar(e) {
    setMember({ ...member, avatar: e.target.files[0] });
  }

  useEffect(() => {
    let getMemberInfo = async () => {
      try {
        let response = await axios.get(API_URL + '/member/info', {
          withCredentials: true,
        });
        console.log(response.data); //從後台拿回前台，是session的資料
        setMember(response.data.customer); //把資料塞進狀態
        setAvatar(response.data.customer.avatar);
      } catch (e) {
        console.error('尚未登入');
      }
    };
    getMemberInfo();
  }, [updateImg]);

  // 如果沒有登入，則不顯示會員資料
  if (member === null) {
    return <></>;
  }

  // console.log('member', member);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // 如果表單有圖片，會用 FormData 的方式來上傳
      let formData = new FormData();
      formData.append('id', member.id);
      formData.append('avatar', member.avatar);
      formData.append('member_name', member.member_name);
      formData.append('phone', member.phone);
      formData.append('address', member.address);
      formData.append('gender', member.gender);
      formData.append('age', member.age);

      let response = await axios.post(
        `${API_URL}/member/editprofile`,
        formData
      );
      console.log(response.data);
      setUpdateImg(!updateImg);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <div className="memberset container-fluid my-5">
        <h2 className="memberset_title mb-3">帳戶設定</h2>

        <div>
          <div className="d-flex justify-content-center mb-4">
            <figure className="memberset_figure">
              <IconContext.Provider value={{ color: '#b99664', size: '150px' }}>
                {avatar ? (
                  <img
                    src={`http://localhost:3003/images${avatar}`}
                    alt=""
                    className="img-fluid"
                  ></img>
                ) : (
                  <FaUser className="memberset_figure_SVG mx-auto" />
                )}
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

                <Form.Control
                  className="member_input"
                  type="file"
                  name="avatar"
                  onChange={handleAvatar}
                />
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="d-block d-md-flex mb-4" disabled>
                <Form.Label column sm="2">
                  性別
                </Form.Label>
                <Form.Control
                  type="text"
                  name="gender"
                  value={member.gender}
                  className="member_input"
                  placeholder="F/M"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-5"
                controlId="formPlaintextAge"
              >
                <Form.Label column sm="2">
                  年齡
                </Form.Label>
                <Form.Control
                  type="text"
                  name="age"
                  value={member.age}
                  className="member_input member_birth"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="d-flex justify-content-center justify-content-md-end mb-5">
                <Button
                  className="member_update_btn mx-auto mx-md-0"
                  onClick={handleSubmit}
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
}

export default MemberSet;
