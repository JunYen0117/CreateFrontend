import Banner from '../img/themeplanning/Banner.png';
import GraduatePic from '../img/themeplanning/GraduatePic.png';
import Pic1 from '../img/themeplanning/Pic1.png';
import Pic2 from '../img/themeplanning/Pic2.png';
import Pic3 from '../img/themeplanning/Pic3.png';
import Pic4 from '../img/themeplanning/Pic4.png';
import Pic5 from '../img/themeplanning/Pic5.png';
import Pic6 from '../img/themeplanning/Pic6.png';
import { ReactComponent as HeartRed } from '../img/themeplanning/HeartRed.svg';

function ThemePlanning() {
  return (
    <>
      <section className="planning_section_one container-fluid">
        <figure>
          <img src={Banner} alt="#/" />
        </figure>
        <div className="p-3">
          <p className="text">
            2022 畢業季將在 6 月到來，想好送什麼畢業禮物給好友、老師或自己了嗎？
            <br />
            創意迴廊
            超過上萬件送禮選擇，客製化畢業禮物、畢業卡片、畢業花束、入職文具...
            <br />
            還有別出心裁的畢業禮物排行榜，給你滿滿的送禮靈感！
          </p>
        </div>
        <ul className="d-flex justify-content-center">
          <li>
            <a className="p-3" href="#/">
              畢業禮物推薦
            </a>
          </li>
          <li>
            <a className="p-3" href="#/">
              友誼回憶體驗
            </a>
          </li>
          <li>
            <a className="p-3" href="#/">
              畢業專欄
            </a>
          </li>
        </ul>
      </section>

      <section className="planning_section_two pb-5 mb-5">
        <h3 className="py-4 mt-5">畢業季 • 出走派對 登場！</h3>
        <ul className="section2_flex d-flex">
          <figure className="section2_flex_item_left">
            <img src={GraduatePic} alt="" />
          </figure>
          <div className="section2_flex_item_right">
            <p className="py-4">
              這樣看來
              <br />
              一般來說
              <br />
              我們都必須務必慎重的考慮考慮
              <br />
              <br />
              要想清楚
              <br />
              畢業，到底是一種怎麼樣的存在
              <br />
              若能夠洞悉畢業各種層面的含義
              <br />
              勢必能讓思維再提高一個層級
            </p>
            <button className="d-flex justify-content-center mb-3">
              看更多
            </button>
          </div>
        </ul>
      </section>

      <section className="planning_section_three">
        <h3 className="py-4 mt-5">送給同學最棒的禮物~</h3>
        <p className="mb-4">
          六月畢業季來了，分離的畢業歌聲響起，
          <br />
          還沒想好畢業禮物送什麼比較好？
          <br />
          創意迴廊精選學生最愛畢業禮物排行榜，獨一無二的客製化/刻字禮物
          <br />
          實用又療癒的創意小物、入職必備的文具和證件套等配件、適合送老師的質感好禮
          <br />
          學生送禮也負擔得起！
        </p>
        <div className="d-flex justify-content-center mb-5">
          <figure className="mx-1 mx-md-2">
            <img src={Pic1} alt="#/" />
          </figure>
          <figure className="mx-1 mx-md-2">
            <img src={Pic1} alt="#/" />
          </figure>
          <figure className="mx-1 mx-md-2">
            <img src={Pic1} alt="#/" />
          </figure>
        </div>
      </section>

      <section className="planning_section_four">
        <h4 className="py-5 text-center">送給同學最棒的禮物~</h4>
        <p className="mb-5">
          六月畢業季來了，分離的畢業歌聲響起
          <br />
          還沒想好畢業禮物送什麼比較好？
        </p>
        <div className="d-flex flex-wrap justify-content-center pb-5">
          <div className="section4_flex_item mx-1 mx-md-2 mt-3">
            <figure>
              <img src={Pic2} alt="#/" />
            </figure>
            <p className="p-1">HOT商品名稱</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="section4_flex_item mx-1 mx-md-2 mt-3">
            <figure>
              <img src={Pic2} alt="#/" />
            </figure>
            <p className="p-1">HOT商品名稱</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="section4_flex_item mx-1 mx-md-2 mt-3">
            <figure>
              <img src={Pic2} alt="#/" />
            </figure>
            <p className="p-1">HOT商品名稱</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="section4_flex_item mx-1 mx-md-2 mt-3">
            <figure>
              <img src={Pic2} alt="#/" />
            </figure>
            <p className="p-1">HOT商品名稱</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>

      <section className="planning_section_five py-5">
        <div>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img src={Pic3} alt="#/" />
              </figure>
              <h4>商品名A</h4>
              <p className="brand">品牌名</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img src={Pic3} alt="#/" />
              </figure>
              <h4>商品名A</h4>
              <p className="brand">品牌名</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img src={Pic3} alt="#/" />
              </figure>
              <h4>商品名A</h4>
              <p className="brand">品牌名</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img src={Pic3} alt="#/" />
              </figure>
              <h4>商品名A</h4>
              <p className="brand">品牌名</p>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-center">
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img src={Pic3} alt="#/" />
              </figure>
              <h4>商品名A</h4>
              <p className="brand">品牌名</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img src={Pic3} alt="#/" />
              </figure>
              <h4>商品名A</h4>
              <p className="brand">品牌名</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img src={Pic3} alt="#/" />
              </figure>
              <h4>商品名A</h4>
              <p className="brand">品牌名</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img src={Pic3} alt="#/" />
              </figure>
              <h4>商品名A</h4>
              <p className="brand">品牌名</p>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-center">
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img src={Pic3} alt="#/" />
              </figure>
              <h4>商品名A</h4>
              <p className="brand">品牌名</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img src={Pic3} alt="#/" />
              </figure>
              <h4>商品名A</h4>
              <p className="brand">品牌名</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img src={Pic3} alt="#/" />
              </figure>
              <h4>商品名A</h4>
              <p className="brand">品牌名</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img src={Pic3} alt="#/" />
              </figure>
              <h4>商品名A</h4>
              <p className="brand">品牌名</p>
            </div>
          </div>

          <button className="d-flex justify-content-center mb-3">
            逛更多〖畢業禮物〗
          </button>
        </div>
      </section>

      <section className="planning_section_six">
        <h3 className="py-4 mt-5">創造最美好的回憶!</h3>
        <p className="mb-5">
          六月畢業季來了，分離的畢業歌聲響起，
          <br />
          還沒想好畢業禮物送什麼比較好？
          <br />
          Pinkoi 精選學生最愛畢業禮物排行榜，獨一無二的客製化/刻字禮物
          <br />
          實用又療癒的創意小物、入職必備的文具和證件套等配件、適合送老師的質感好禮
          <br />
          學生送禮也負擔得起！
        </p>
        <div className="d-flex justify-content-center pb-5">
          <figure className="mx-1 mx-md-2">
            <img src={Pic4} alt="#/" />
          </figure>
          <figure className="mx-1 mx-md-2">
            <img src={Pic4} alt="#/" />
          </figure>
        </div>
      </section>

      <section className="planning_section_seven pb-4">
        <h4 className="py-5 text-center">與同學最好的回憶</h4>
        <p className="pb-5">
          六月畢業季來了，分離的畢業歌聲響起，
          <br />
          還沒想好畢業禮物送什麼比較好？
        </p>
        <div className="d-flex justify-content-center">
          {' '}
          {/* map() x3 */}
          <div className="section7_card mx-1 mx-md-2">
            <figure className="avatar">
              <a href="#/" alt="#/">
                <HeartRed />
              </a>
              <img className="pic" src={Pic5} alt="#/" />
            </figure>
            <h5 className="p-1 p-md-3">
              親手調製你的品味生活 - 擴香 / 蠟燭 / 香水
            </h5>
            <ul className="d-flex justify-content-between p-1 p-md-3 pb-md-5">
              <li className="site">桃園市</li>
              <li className="price">NT 680</li>
            </ul>
          </div>
          <div className="section7_card mx-1 mx-md-2">
            <figure className="avatar">
              <a href="#/" alt="#/">
                <HeartRed />
              </a>
              <img className="pic" src={Pic5} alt="#/" />
            </figure>
            <h5 className="p-1 p-md-3">
              親手調製你的品味生活 - 擴香 / 蠟燭 / 香水
            </h5>
            <ul className="d-flex justify-content-between p-1 p-md-3 pb-md-5">
              <li className="site">桃園市</li>
              <li className="price">NT 680</li>
            </ul>
          </div>
          <div className="section7_card mx-1 mx-md-2">
            <figure className="avatar">
              <a href="#/" alt="#/">
                <HeartRed />
              </a>
              <img className="pic" src={Pic5} alt="#/" />
            </figure>
            <h5 className="p-1 p-md-3">
              親手調製你的品味生活 - 擴香 / 蠟燭 / 香水
            </h5>
            <ul className="d-flex justify-content-between p-1 p-md-3 pb-md-5">
              <li className="site">桃園市</li>
              <li className="price">NT 680</li>
            </ul>
          </div>
        </div>
        <button className="d-flex justify-content-center mt-4 mb-5">
          逛更多〖畢業禮物〗
        </button>
      </section>

      <section className="planning_section_eight">
        <h4 className="py-5 text-center">畢業後充實自己</h4>
        <p className="pb-5">
          六月畢業季來了，分離的畢業歌聲響起，
          <br />
          還沒想好畢業禮物送什麼比較好？
        </p>
        <div className="d-flex justify-content-center">
          {' '}
          {/* map() x3 */}
          <div className="section8_card mx-1 mx-md-2">
            <figure className="avatar">
              <a href="#/" alt="#/">
                <HeartRed />
              </a>
              <img className="pic" src={Pic5} alt="#/" />
            </figure>
            <h5 className="p-1 p-md-3">
              親手調製你的品味生活 - 擴香 / 蠟燭 / 香水
            </h5>
            <ul className="d-flex justify-content-between p-1 p-md-3 pb-md-5">
              <li className="site">桃園市</li>
              <li className="price">NT 680</li>
            </ul>
          </div>
          <div className="section8_card mx-1 mx-md-2">
            <figure className="avatar">
              <a href="#/" alt="#/">
                <HeartRed />
              </a>
              <img className="pic" src={Pic5} alt="#/" />
            </figure>
            <h5 className="p-1 p-md-3">
              親手調製你的品味生活 - 擴香 / 蠟燭 / 香水
            </h5>
            <ul className="d-flex justify-content-between p-1 p-md-3 pb-md-5">
              <li className="site">桃園市</li>
              <li className="price">NT 680</li>
            </ul>
          </div>
          <div className="section8_card mx-1 mx-md-2">
            <figure className="avatar">
              <a href="#/" alt="#/">
                <HeartRed />
              </a>
              <img className="pic" src={Pic5} alt="#/" />
            </figure>
            <h5 className="p-1 p-md-3">
              親手調製你的品味生活 - 擴香 / 蠟燭 / 香水
            </h5>
            <ul className="d-flex justify-content-between p-1 p-md-3 pb-md-5">
              <li className="site">桃園市</li>
              <li className="price">NT 680</li>
            </ul>
          </div>
        </div>
        <button className="d-flex justify-content-center mt-4 mb-5">
          逛更多〖專屬活動〗
        </button>
      </section>

      <section className="planning_section_nine pb-5">
        <h3 className="py-4 mt-5">畢業感文分享</h3>
        <p>
          六月畢業季來了，分離的畢業歌聲響起，
          <br />
          還沒想好畢業禮物送什麼比較好？
          <br />
          Pinkoi 精選學生最愛畢業禮物排行榜，獨一無二的客製化/刻字禮物
          <br />
          實用又療癒的創意小物、入職必備的文具和證件套等配件、適合送老師的質感好禮
          <br />
          學生送禮也負擔得起！
        </p>
        <div className="d-flex justify-content-center">
          {' '}
          {/* map() */}
          <div className="section9_article_card m-1 mx-md-2">
            <figure>
              <img src={Pic6} alt="#/" />
            </figure>
            <span className="my-2">作者/ </span>
            <span className="my-2"> 文章標題1Lorem</span>
          </div>
          <div className="section9_article_card m-1 mx-md-2">
            <figure>
              <img src={Pic6} alt="#/" />
            </figure>
            <span className="my-2">作者/ </span>
            <span className="my-2"> 文章標題1Lorem</span>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="section9_article_card m-1 mx-md-2">
            <figure>
              <img src={Pic6} alt="#/" />
            </figure>
            <span className="my-2">作者/ </span>
            <span className="my-2"> 文章標題1Lorem</span>
          </div>
          <div className="section9_article_card m-1 mx-md-2">
            <figure>
              <img src={Pic6} alt="#/" />
            </figure>
            <span className="my-2">作者/ </span>
            <span className="my-2"> 文章標題1Lorem</span>
          </div>
        </div>
      </section>
    </>
  );
}
export default ThemePlanning;
