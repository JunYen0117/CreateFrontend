function PaymentDetails() {
  return (
    <>
      <div className="border mar p-4">
        <h1 className="mb-4 card-title">明細</h1>
        <h2 className="mb-3">
          Eyecandle 親手調製你的品味生活 - 擴香 / 蠟燭 /
          香水品味生活品味生活品味生活品味生活品味生活
        </h2>
        <h4 className="mb-5">日期:2022/5/14 11:00</h4>
        <h2>項目</h2>
        <div className="row">
          <div className="col-4 col-md-3">花草香氛蠟燭</div>
          <div className="col-4 col-md-3 text-center">NT680/每人</div>
          <div className="col-4 col-md-3 text-center">2人</div>
          <div className="col-12 col-md-3 text-end">
            總金額 <span>NT1360</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default PaymentDetails;
