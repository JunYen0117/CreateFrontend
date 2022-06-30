// 可領取優惠券
import React from 'react';
import Common from './Common';
import { useState } from 'react';

function Available(props) {
  const {
    availableList,
    setNowPage,
    lastPage,
    setLastPage,
    receiveLastPage,
    receiveList,
    changeState,
    invalidLastPage,
    invalidList,
  } = props;

  const [notUse, setNotUse] = useState(false);

  // 以下是優惠券的畫面
  const couponPromptScript = () => {
    return <>可領取的優惠券</>;
  };
  const couponPrompt = () => {
    return (
      <>
        {/* <div className="coupon_pass_desktop text-center py-2 position-absolute">
          可領取
        </div> */}
      </>
    );
  };
  const couponUseBtn = () => {
    return (
      <>
        <div className="coupon_desktop text-decoration-none">
          <h3 className="coupon_p my-1">立即領取</h3>
        </div>
        <div className="coupon_phone d-md-none text-decoration-none">
          <h3 className="coupon_p my-auto">可領取</h3>
        </div>
      </>
    );
  };
  return (
    <>
      <Common
        pass={couponPrompt()}
        use={couponUseBtn()}
        prompt={couponPromptScript()}
        availableList={availableList}
        setNowPage={setNowPage}
        lastPage={lastPage}
        setLastPage={setLastPage}
        receiveLastPage={receiveLastPage}
        receiveList={receiveList}
        invalidLastPage={invalidLastPage}
        invalidList={invalidList}
        changeState={changeState}
        notUse={notUse}
        setNotUse={setNotUse}
      />
    </>
  );
}

export default Available;
