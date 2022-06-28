import React from 'react';
import MagzOption from '../components/ArtMagazine/MagzOption';
import MagzList from '../components/ArtMagazine/MagzList';

function ArtMagazine() {
  return (
    <>
      <div className="container">
        <MagzOption />
        <div className="magz_all_line" />
        <div className="row magz_all px-3">
          <MagzList />
        </div>
      </div>
    </>
  );
}

export default ArtMagazine;
