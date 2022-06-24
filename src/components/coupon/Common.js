import React from 'react';
import Card from './Card';
import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';

function Common(props) {
  const { prompt, pass, use } = props;
  const [active, setActive] = useState(1);
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={(e) => {
          setActive(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div className="container_coupon">
        <h4 className="coupon_prompt my-4 ms-1">
          {/* 這是 每筆訂單僅可使用一張優惠券 的變數 */}
          {prompt}
        </h4>
        <div className="coupon d-flex d-grid flex-wrap justify-content-between mx-1 row">
          <Card pass={pass} use={use} />
        </div>
      </div>
      <div>
        <Pagination size="sm">{items}</Pagination>
      </div>
    </>
  );
}

export default Common;
