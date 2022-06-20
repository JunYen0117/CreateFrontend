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
        <div className="coupon_pass_desktop text-center py-2 position-absolute">
          可領取
        </div>
      </>
    );
  };
  const couponUseBtn = () => {
    return (
      <>
        <a href="#/" className="coupon_desktop text-decoration-none">
          <h3 className="my-1">立即領取</h3>
        </a>
        <a href="#/" className="coupon_phone d-md-none text-decoration-none">
          <h3 className="my-auto">可領取</h3>
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
