// 可使用的優惠券

import React from 'react';
import PropTypes from 'prop-types';
import Common from './Common';

function ReceiveList(props) {
  const couponPass = () => {
    return (
      <div className="coupon_pass text-center py-2 position-absolute">
        即將過期
      </div>
    );
  };
  return (
    <>
      <Common pass={couponPass()} />
    </>
  );
}

ReceiveList.propTypes = {};

export default ReceiveList;
