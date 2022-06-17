import React from 'react';
import Card from './Card';

function Common(props) {
  const { prompt, pass, use } = props;

  return (
    <>
      <div className="container_coupon">
        <h4 className="coupon_prompt px-3 py-3 my-3">
          {/* 這是 每筆訂單僅可使用一張優惠券 的變數 */}
          {prompt}
        </h4>
        <div className="coupon d-flex d-grid gap-5 flex-wrap justify-content-between mx-3 row">
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
