import { useState } from 'react';

function PaymentUser(props) {
  const [orderInformation, setOrderInformation] = useState({
    email: '',
    name: '',
    phone: '',
  });
  function handleChange(e) {
    let orderIn = {
      ...orderInformation,
      [e.target.name]: e.target.value,
    };
    setOrderInformation(orderIn);
    props.setOrderName(orderIn.name);
    props.setOrderEmail(orderIn.email);
    props.setOrderPhone(orderIn.phone);
    // props.setOrderInformation(orderInformation);
  }
  // const [orderInformation, setOrderInformation] = useState('');
  // function handleChange(e) {
  //   let orderIn = e.target.value;
  //   setOrderInformation(orderIn)
  //   props.setOrderInformation1(orderIn);
  // }
  console.log(orderInformation);

  return (
    <>
      <div className="border mar p-4">
        <h1 className="card-title mb-4">填寫聯絡人資料</h1>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            姓名
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="請輸入姓名"
            name="name"
            value={orderInformation.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            E-mail
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="請輸入E-mail"
            name="email"
            value={orderInformation.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            手機
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="請輸入手機"
            name="phone"
            value={orderInformation.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            同會員資料
          </label>
        </div>
      </div>
    </>
  );
}
export default PaymentUser;
