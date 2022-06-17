import '../styles/_frontpage.scss';
import Card from 'react-bootstrap/Card';

import A1 from '../img/A1.jpg';
import A2 from '../img/A2.jpg';

function ArticleCard() {
  return (
    <>
      <h2>
        <a href="/">質感商品</a>
      </h2>

      {/* Card 1 */}
      <div className="d-flex justify-content-between all-card">
        <Card style={{ width: '583px', height: '300px' }}>
          <a href="/">
            <figure className="article_img">
              <Card.Img variant="top" src={A1} className="img-fluid" />
            </figure>
          </a>
          <Card.Body className="text_body">
            <Card.Title>
              <a href="/">
                101旁有百老匯？一群理工人打造的「南村劇場」，讓你零壓力看劇、只管大笑
              </a>
            </Card.Title>
            <Card.Text>
              <a href="/">
                【Off夜生活】誰說台北信義商圈的夜晚只能逛街、衝夜店？現在有更時髦選擇：進劇場看戲。不用拘謹多禮，也不擔心內容高冷，笑料滿點的讀劇，或口碑爆棚的浪漫音樂劇連日搬演，就在一群理工人打造的南村劇場裡。
              </a>
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Card 2 */}
        <Card style={{ width: '583px', height: '300px' }}>
          <a href="/">
            <figure className="article_img">
              <Card.Img variant="top" src={A2} className="img-fluid" />
            </figure>
          </a>
          <Card.Body className="text_body">
            <Card.Title>
              <a href="/">史詩劇場的發源地──德國慕尼黑室內劇院的黑歷史</a>
            </Card.Title>
            <Card.Text>
              <a href="/">
                德國慕尼黑室內劇院的前身叫做喜劇院（Lustspielhaus），原本屬於私人經營，後來為了提升吸引力增加票房，特別從柏林重金禮聘藝術總監尤金．羅伯（Eugen
                Robert），在 1912 年劇院便由喜劇院改名為慕尼黑室內劇院（Münchner
                Kammerspiele）。
              </a>
            </Card.Text>
            <Card.Text variant="primary" className="money">
              NT.699
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ArticleCard;
