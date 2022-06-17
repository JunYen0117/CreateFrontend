import '../styles/_frontpage.scss';

import A1 from '../img/A1.jpg';
import A2 from '../img/A2.jpg';

function ArticleCard() {
  return (
    <>
      <h2>
        <a href="/">質感商品</a>
      </h2>
      <div className="all-card d-flex justify-content-between">
        {/* Card 1 */}
        <div className="article_card">
          <a href="/">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 article_img">
                <img src={A1} alt="..." />
              </div>
              <div className="flex-grow-1 ms-3 d-flex flex-wrap article_text">
                <h3 className="">
                  101旁有百老匯？一群理工人打造的「南村劇場」，讓你零壓力看劇、只管大笑
                </h3>
                <div className="line" />
                <p>
                  【Off夜生活】誰說台北信義商圈的夜晚只能逛街、衝夜店？現在有更時髦選擇：進劇場看戲。不用拘謹多禮，也不擔心內容高冷，笑料滿點的讀劇，或口碑爆棚的浪漫音樂劇連日搬演，就在一群理工人打造的南村劇場裡。
                </p>
              </div>
            </div>
          </a>
        </div>
        {/* Card 2 */}
        <div className="article_card">
          <a href="/">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 article_img">
                <img src={A2} alt="..." />
              </div>
              <div className="flex-grow-1 ms-3 d-flex flex-wrap article_text">
                <h3>史詩劇場的發源地──德國慕尼黑室內劇院的黑歷史</h3>
                <div className="line" />
                <p>
                  德國慕尼黑室內劇院的前身叫做喜劇院（Lustspielhaus），原本屬於私人經營，後來為了提升吸引力增加票房，特別從柏林重金禮聘藝術總監尤金．羅伯（Eugen
                  Robert），在 1912
                  年劇院便由喜劇院改名為慕尼黑室內劇院（Münchner
                  Kammerspiele）。
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default ArticleCard;
