import React from 'react';
import ASidebar from '../../components/AccountSidebar/ASidebar';
import FavTitle from '../../components/Fav/FavTitle';
import Milu from '../../img/Milu.jpg';
import { FaHeart } from 'react-icons/fa';

const FavArticle = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <ASidebar />
          <div className="col-8 productOrder">
            <FavTitle />
            <div className="row ">
              {[1, 2, 3, 4].map(() => {
                return (
                  <>
                    <div
                      className="col-3 position-relative mb-2"
                      style={{ width: '10rem', height: '10rem' }}
                    >
                      <img className="Far_img" src={Milu} alt="" />
                      <FaHeart className="Far_heart" />
                    </div>
                    <div className="col-10 ms-3 mb-2">
                      <h2>遲遲</h2>
                      <p className="lh-lg">
                        熙熙攘攘 天越亮越緊張 還沒到場 似妳平時一樣 人來人往
                        我等妳逆著光 出嫁衣裳 配妳愛的淡妝 我百計千方 怕美夢不長
                        笑我請 當場 都沸沸揚揚 妳一定在彩雲上 耳朵先撒了謊
                        是妳靠近的聲響 來探我梳妝的模樣 我著白紗登場
                        和妳希望的一樣 我走的很慢 像妳在對面一樣 關於我倆
                        連分開都很長 在 舊友到場 帶遺憾的探望 我百計千方
                        不受妳影響 笑我請 到場 別惹我獨往 再陪妳東飄西蕩...
                        <a className="text-primary">READMORE</a>
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavArticle;
