import bookmark from '../../img/bookmark.svg';

// 文章圖文
// 1
import Sin1 from '../../img/ArticleImg/Renaissance-in-Singapore-02.jpg';
import Sin2 from '../../img/ArticleImg/Renaissance-in-Singapore-04.jpg';
import Sin3 from '../../img/ArticleImg/Renaissance-in-Singapore-05.jpg';
// 2
import Black2 from '../../img/ArticleImg/超過兩萬張黑膠-1.jpg';
import Black1 from '../../img/ArticleImg/超過兩萬張黑膠-2.jpg';
// 3
// 4
import Flower1 from '../../img/ArticleImg/白色桔梗花語.jpg';
// 5
import Club1 from '../../img/ArticleImg/永和楫文社-1.jpg';
import Club3 from '../../img/ArticleImg/永和楫文社-3.jpg';
// 6
import History from '../../img/ArticleImg/Bertolt-Brecht.jpg';
import History2 from '../../img/ArticleImg/Matthias_Lilienthal.jpg';
// 7
import flo190 from '../../img/ArticleImg/flower190-2.jpg';
// 8
import art101 from '../../img/ArticleImg/art101-2.jpg';
import art1012 from '../../img/ArticleImg/art101-3.jpg';
// 9
import museum1 from '../../img/ArticleImg/museum1.jpeg';
import museum2 from '../../img/ArticleImg/museum2.jpeg';

function ArticleTitle() {
  return (
    <>
      <div className="article_main_img d-flex justify-content-center">
        <img src="" alt="" />
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
        <div className="article_context">文章內容~~~</div>
      </div>
    </>
  );
}
export default ArticleTitle;
