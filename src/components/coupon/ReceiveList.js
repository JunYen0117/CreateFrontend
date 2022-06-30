// 可使用的優惠券

import React from 'react';
import Common from './Common';
import { useState } from 'react';

function ReceiveList(props) {
  const {
    availableList,
    setNowPage,
    lastPage,
    setLastPage,
    receiveLastPage,
    receiveList,
    changeState,
  } = props;

  console.log('receiveList', receiveList);
  // console.log('receiveLastPage',receiveLastPage)

  const [notUse, setNotUse] = useState(false);

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
        <div className="coupon_desktop text-decoration-none">
          <h3 className="coupon_p my-1">立即使用</h3>
        </div>
        <div className="coupon_phone d-md-none text-decoration-none">
          <h3 className="coupon_p my-auto">立即使用</h3>
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
        changeState={changeState}
        notUse={notUse}
        setNotUse={setNotUse}
      />
    </>
  );
}

export default ReceiveList;
