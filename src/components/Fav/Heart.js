import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useState } from 'react';

const Heart = (data) => {
  const [showheart, setShowHeart] = useState(true);
  // console.log(data);

  return (
    <>
      {showheart ? (
        <BsHeartFill
          className="Fp_heart"
          onClick={() => {
            setShowHeart(false);
          }}
        />
      ) : (
        <BsHeart
          className="Fp_heart"
          onClick={() => {
            setShowHeart(true);
          }}
        />
      )}
    </>
  );
};

export default Heart;
