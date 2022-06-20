// 可使用的優惠券

import React from 'react';
import Common from './Common';

function ReceiveList(props) {
  const couponPromptScript = () => {
    return <>每筆訂單僅可使用一張優惠券</>;
  };
  const couponPrompt = () => {
    return (
      <>
        <div className="coupon_pass_desktop text-center py-2 position-absolute">
          即將過期
        </div>
        <div className="coupon_pass_phone position-absolute d-md-none py-2">
          即將過期
        </div>
      </>
    );
  };
  const couponUseBtn = () => {
    return (
      <>
        <a href="#/" className="coupon_desktop text-decoration-none">
          <h3 className="my-1">立即使用</h3>
        </a>
        <a href="#/" className="coupon_phone d-md-none text-decoration-none">
          <h3 className="my-auto">立即使用</h3>
        </a>
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

export default ReceiveList;
