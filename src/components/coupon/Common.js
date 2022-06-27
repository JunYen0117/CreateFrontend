import React from 'react';
import Card from './Card';
import Pagination from 'react-bootstrap/Pagination';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';

function Common(props) {
  const { prompt, pass, use } = props;
  const [couponList, setCoupons] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  const [lastPage, setLastPage] = useState();

  useEffect(() => {
    let getCoupons = async () => {
      let response = await axios.get(API_URL + '/coupons', {
        params: {
          page: nowPage,
        },
      });
      setCoupons(response.data.couponList);
      setLastPage(response.data.pagination.lastPage);
    };
    getCoupons();
  }, [nowPage, lastPage]);

  const [active, setActive] = useState(1);
  let items = [];
  for (let number = 1; number <= lastPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={(e) => {
          setActive(number);
          setNowPage(number);
          setLastPage(number);
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
        {/* div不能放在map裡面，因為這樣 d-flex 會一直重複生成，所以要放在外面 */}
        <div className="coupon d-flex d-grid flex-wrap justify-content-between mx-1 row">
          {couponList.map((coupon, index) => {
            return <Card pass={pass} use={use} coupon={coupon} />;
          })}
        </div>
      </div>
      <div>
        <Pagination size="sm">{items}</Pagination>
      </div>
    </>
  );
}

export default Common;
