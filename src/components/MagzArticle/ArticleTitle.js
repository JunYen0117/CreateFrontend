import Sin from '../../img/ArticleImg/永和楫文社-3.jpg';
import bookmark from '../../img/bookmark.svg';
function ArticleTitle() {
  return (
    <>
      <div className="article_main_img d-flex justify-content-center">
        <img src={Sin} alt="" />
      </div>
      <div className="article_all_content">
        <div className="d-flex justify-content-between">
          <div className="article_text d-flex">
            <div className="article_author">陳仲茂</div>
            <div className="article_create_time">2022-6-14</div>
          </div>
          <img src={bookmark} alt="收藏" className="" />
        </div>
        <h1 className="article_title">
          101旁有百老匯？一群理工人打造的「南村劇場」，讓你零壓力看劇、只管大笑
        </h1>
        <div className=""></div>
      </div>
    </>
  );
}
export default ArticleTitle;
