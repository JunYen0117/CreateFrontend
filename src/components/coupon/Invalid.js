// 已無效的優惠券

import React from 'react';
import Common from './Common';

function Invalid(props) {
  const couponPromptScript = () => {
    return <>已失效的優惠券</>;
  };
  const couponPrompt = () => {
    return (
      <>
        <div className="coupon_pass_desktop text-center py-2 position-absolute">
          已失效
        </div>
      </>
    );
  };
  const couponUseBtn = () => {
    return (
      <>
        <h3 className="coupon_desktop text-decoration-none my-1">無法使用</h3>
        <h3 className="coupon_phone d-md-none text-decoration-none my-auto">
          無法使用
        </h3>
      </>
    );
  };
  return (
    <>
      <Common
        pass={couponPrompt()}
        use={couponUseBtn()}
        prompt={couponPromptScript()}
      />
    </>
  );
}

export default Invalid;
