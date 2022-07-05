import PaymentDetails from '../components/ActivityPayment/PaymentDetails';
import PaymentMethod from '../components/ActivityPayment/PaymentMethod';
import PaymentUser from '../components/ActivityPayment/PaymentUser';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../utils/config';
function ActivityPayment() {
  const history = useHistory();
  if (sessionStorage.getItem('order')) {
    console.log('有資料');
  } else {
    console.log('沒資料');
    history.push('/exhibition');
  }
  sessionStorage.getItem('order');
  let order = JSON.parse(sessionStorage.getItem('order'));

  const [orderName, setOrderName] = useState('');
  const [orderEmail, setOrderEmail] = useState('');
  const [orderPhone, setOrderPhone] = useState('');

  const handleClick = async (e) => {
    try {
      let response = await axios.post(API_URL + '/activitypayment', {
        order,
        orderName,
        orderEmail,
        orderPhone,
      });
      sessionStorage.removeItem('order');
      console.log(response.data);
      window.location.href = response.data.payUrl;
      // Swal.fire({
      //   title: '購買成功',
      //   icon: 'success',
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     history.push('/');
      //   }
      // });
    } catch (e) {
      console.error(e);
    }
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
      </div>
    </>
  );
}
export default ActivityPayment;
