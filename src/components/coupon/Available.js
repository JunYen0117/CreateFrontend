// 可領取優惠券
import React from 'react';
import PropTypes from 'prop-types';
import Common from './Common';

function Available(props) {
  const couponPass = () => {
    return (
      <div className="coupon_pass text-center py-2 position-absolute">
        可領取
      </div>
    );
  };
  return (
    <>
      <Common pass={couponPass()} />
    </>
  );
}

Available.propTypes = {};

export default Available;
