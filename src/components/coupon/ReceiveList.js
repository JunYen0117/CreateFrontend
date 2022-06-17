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
        <div className="coupon_pass text-center py-2 position-absolute">
          即將過期
        </div>
      </>
    );
  };
  const couponUseBtn = () => {
    return (
      <>
        <a href="/" className="text-decoration-none">
          立即使用
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
