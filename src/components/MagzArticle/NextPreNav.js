// 箭頭
import prearrow from '../../img/dashicons_arrow-pre.svg';
import nextarrow from '../../img/dashicons_arrow-next.svg';

function NextPreNav() {
  return (
    <>
      <div className="nextpre-nav">
        <div className="d-flex justify-content-between nav">
          <div className="pre-article d-flex align-items-center">
            <a href="/">
              <img src={prearrow} alt="" />
              上一篇
            </a>
          </div>
          <div className="backto-article">
            <a href="/">回列表</a>
          </div>
          <div className="next-article d-flex align-items-center">
            <a href="/">
              下一篇
              <img src={nextarrow} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default NextPreNav;
