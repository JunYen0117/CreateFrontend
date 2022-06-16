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
        <div className="coupon_pass text-center py-2 position-absolute">
          已失效
        </div>
      </>
    );
  };
  const couponUseBtn = () => {
    return <>無法使用</>;
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
