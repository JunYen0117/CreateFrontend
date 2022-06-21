import Pic5 from '../../img/themeplanning/Pic5.png';
import { ReactComponent as HeartRed } from '../../img/themeplanning/HeartRed.svg';

function Section8() {
  return (
    <>
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
    </>
  );
}

export default Section8;
