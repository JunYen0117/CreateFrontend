import React from 'react';
import ASidebar from '../../components/AccountSidebar/ASidebar';
import FavTitle from '../../components/Fav/FavTitle';

const FavActivity = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <ASidebar />
          <div className="col-9 productOrder">
            <FavTitle />
          </div>
        </div>
      </div>
    </>
  );
};

export default FavActivity;
