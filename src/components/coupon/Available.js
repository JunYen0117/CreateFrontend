// 可領取優惠券
import React from 'react';
import Common from './Common';

function Available(props) {
  const couponPromptScript = () => {
    return <>可領取的優惠券</>;
  };
  const couponPrompt = () => {
    return (
      <>
        <div className="coupon_pass text-center py-2 position-absolute">
          可領取
        </div>
      </>
    );
  };
  const couponUseBtn = () => {
    return (
      <>
        <a href="#/" className="text-decoration-none">
          立即領取
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

export default Available;
