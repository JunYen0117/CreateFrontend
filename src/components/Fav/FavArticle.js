import React from 'react';
import FartHeart from './FartHeart';
import Milu from '../../img/Milu.jpg';


const FavArticle = (props) => {
  const { data } = props;
  // console.log('favarticle' , data);

  return (
    <>
      <div
        className="col-3 position-relative mb-2"
        style={{ width: '10rem', height: '10rem' }}
      >
        <img className="Far_img" src={Milu} alt="" />
        <FartHeart className="Far_heart" data={data}/>
      </div>
      <div className="col-10 ms-3 mb-2">
        <h2>{data.title}</h2>
        <p className="lh-lg">{data.article_context}</p>
      </div>
    </>
  );
};

export default FavArticle;
