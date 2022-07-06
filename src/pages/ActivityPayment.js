import PaymentDetails from '../components/ActivityPayment/PaymentDetails';
import PaymentMethod from '../components/ActivityPayment/PaymentMethod';
import PaymentUser from '../components/ActivityPayment/PaymentUser';

function ActivityPayment() {
  return (
    <>
      <div className="container mt-4 mb-5 activitypayment">
        <h1 className="text-center payment-title">結帳</h1>
        <PaymentDetails />
        <PaymentUser />
        <PaymentMethod />
        <div className="text-end">
          <button type="button" className="btn btn-primary">
            確認付款
          </button>
        </div>
      </div>
    </>
  );
}
export default ActivityPayment;
