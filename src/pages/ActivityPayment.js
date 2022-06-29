import PaymentDetails from '../components/ActivityPayment/PaymentDetails';
import PaymentMethod from '../components/ActivityPayment/PaymentMethod';
import PaymentUser from '../components/ActivityPayment/PaymentUser';
import { useState } from 'react';
import axios from 'axios';
function ActivityPayment() {
  sessionStorage.getItem('order');
  let order = JSON.parse(sessionStorage.getItem('order'));
  const [orderName, setOrderName] = useState('');
  const [orderEmail, setOrderEmail] = useState('');
  const [orderPhone, setOrderPhone] = useState('');

  const handleClick = async () => {
    try {
      let response = await axios.post(
        `http://localhost:3003/api/activitypayment`,
        {
          order,
          orderName,
          orderEmail,
          orderPhone,
        }
      );
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
    // todo: clear session,successmessage,page to top
  };

  return (
    <>
      <div className="container mt-4 mb-5 activitypayment">
        <h1 className="text-center payment-title">結帳</h1>
        <PaymentDetails order={order} />
        <PaymentUser
          setOrderName={setOrderName}
          setOrderEmail={setOrderEmail}
          setOrderPhone={setOrderPhone}
        />
        <PaymentMethod />
        <div className="text-end">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClick}
          >
            確認付款
          </button>
        </div>
        <p>
          orderName:{orderName},orderEmail:{orderEmail},orderPhone:{orderPhone}
        </p>
      </div>
    </>
  );
}
export default ActivityPayment;
