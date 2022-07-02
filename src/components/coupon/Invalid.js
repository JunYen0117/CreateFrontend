// 已無效的優惠券

import React from 'react';
import Common from './Common';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';

function Invalid(props) {
  const { couponList } = props;
  console.log('invalid component', couponList);

  // 撈出全部使用者擁有的優惠券但已失效
  const [invalidLastPage, setInvalidLastPage] = useState();
  const [nowPage, setNowPage] = useState(1);
  const [invalidList, setInvalidList] = useState([]);
  useEffect(() => {
    let getCoupons = async () => {
      let response = await axios.get(API_URL + '/coupons/invalid', {
        params: {
          page: nowPage,
        },
      });
     console.log( response.data.invalidList);
      setInvalidList(response.data.invalidList);
      setInvalidLastPage(response.data.pagination.invalidLastPage);
    };
    getCoupons();
    // console.log('invalidLastPage', invalidLastPage);
    // console.log('nowInvalidPage', nowInvalidPage);
  }, [nowPage, invalidLastPage]);
  console.log('invalidList:', invalidList);
  console.log('invalidLastPage:', invalidLastPage);

  const couponPromptScript = () => {
    return <>已失效的優惠券</>;
  };
  const couponPrompt = () => {
    return (
      <>
        {/* <div className="coupon_pass_desktop text-center py-2 position-absolute">
          已失效
        </div> */}
      </>
    );
  };
  const couponUseBtn = () => {
    return (
      <>
        <h3 className="coupon_desktop coupon_p text-decoration-none my-1 mx-auto">
          無法使用
        </h3>
        <h3 className="coupon_phone d-md-none text-decoration-none my-auto  mx-auto">
          無法使用
        </h3>
      </>
    );
  };
  return (
    <Common
      pass={couponPrompt()}
      use={couponUseBtn()}
      prompt={couponPromptScript()}
      data={invalidList}
      page={invalidLastPage}
      setNowPage={setNowPage}
      notUse={true}
    />
  );
}

export default Invalid;
