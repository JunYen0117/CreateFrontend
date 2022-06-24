import Pic5 from '../../img/themeplanning/Pic5.png';
import { ReactComponent as HeartRed } from '../../img/themeplanning/HeartRed.svg';

function Section8FlexItem() {
  return (
    <>
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
    </>
  );
}

export default Section8FlexItem;
