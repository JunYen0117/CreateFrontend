import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

export default function PaymentInputs() {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

  return (
    <PaymentInputsWrapper className="w-100 mx-3" {...wrapperProps}>
      <svg {...getCardImageProps({ images })} />
      <input {...getCardNumberProps()} />
      <input className="mx-3" {...getExpiryDateProps()} />
      <input className="mx-3" {...getCVCProps()} />
    </PaymentInputsWrapper>
  );
}
