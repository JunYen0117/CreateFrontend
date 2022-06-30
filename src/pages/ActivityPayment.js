import PaymentDetails from '../components/ActivityPayment/PaymentDetails';
import PaymentMethod from '../components/ActivityPayment/PaymentMethod';
import PaymentUser from '../components/ActivityPayment/PaymentUser';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/config';
function ActivityPayment() {
  sessionStorage.getItem('order');
  let order = JSON.parse(sessionStorage.getItem('order'));

  const [orderName, setOrderName] = useState('');
  const [orderEmail, setOrderEmail] = useState('');
  const [orderPhone, setOrderPhone] = useState('');

  const handleClick = async () => {
    try {
      let response = await axios.post(API_URL + 'activitypayment', {
        order,
        orderName,
        orderEmail,
        orderPhone,
      });
      sessionStorage.removeItem('order');
      console.log(response.data);
      Swal.fire({
        title: '購買成功',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/exhibition';
        }
      });
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
