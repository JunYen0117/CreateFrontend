import React from 'react';
import Card from './Card';

function Common(props) {
  const { prompt, pass, use } = props;

  return (
    <>
      <div className="container_coupon">
        <h4 className="coupon_prompt my-4 ms-1">
          {/* 這是 每筆訂單僅可使用一張優惠券 的變數 */}
          {prompt}
        </h4>
        <div className="coupon d-flex d-grid flex-wrap justify-content-between mx-1 row">
          <Card pass={pass} use={use} />
          <Card pass={pass} use={use} />
          <Card pass={pass} use={use} />
          <Card pass={pass} use={use} />
          <Card pass={pass} use={use} />
          <Card pass={pass} use={use} />
        </div>
      </div>
    </>
  );
}

export default Common;
