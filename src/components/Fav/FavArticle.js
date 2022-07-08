import React from 'react';
import HeartArticle from './HeartArticle';
import Milu from '../../img/Milu.jpg';

const FavArticle = (props) => {
  const { data } = props;
  // console.log('favarticle' , data);

  return (
    <>

      <div
        className=" col-3 position-relative "
        style={{ width: '10rem', height: '10rem' }}
      >
        <img className="Far_img" src={Milu} alt="" />
      </div>
      <div className="col-9 mx-3 mt-2 ">
        <HeartArticle className="Far_heart" data={data} />
        <h2>{data.title}</h2>
        <p className="Far_context lh-lg">{data.article_context}</p>
      </div>
    </>
  );
};

export default FavArticle;
