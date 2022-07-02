// 已無效的優惠券

import React from 'react';
import Common from './Common';
import { useState } from 'react';

function Invalid(props) {
  const {
    availableList,
    setNowPage,
    lastPage,
    setLastPage,
    invalidLastPage,
    receiveList,
    invalidList,
    receiveLastPage,
    changeState,
  } = props;
  console.log('invalid component', invalidList);

  const [notUse, setNotUse] = useState(true);

  const couponPromptScript = () => {
    return <>已失效的優惠券</>;
  };
  const couponPrompt = () => {
    return (
      <>
        {/* <div className="coupon_pass_desktop text-center py-2 position-absolute">
          已失效
        </div> */}
      </>
    );
  };
  const couponUseBtn = () => {
    return (
      <>
        <h3 className="coupon_desktop coupon_p text-decoration-none my-1 mx-auto">
          無法使用
        </h3>
        <h3 className="coupon_phone d-md-none text-decoration-none my-auto  mx-auto">
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
        availableList={availableList}
        setNowPage={setNowPage}
        lastPage={lastPage}
        setLastPage={setLastPage}
        receiveLastPage={receiveLastPage}
        receiveList={receiveList}
        invalidList={invalidList}
        invalidLastPage={invalidLastPage}
        changeState={changeState}
        notUse={notUse}
        setNotUse={setNotUse}
      />
    </>
  );
}

export default Invalid;
