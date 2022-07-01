import Sin from '../../img/ArticleImg/永和楫文社-3.jpg';
import bookmark from '../../img/bookmark.svg';

import Sin1 from '../../img/ArticleImg/Renaissance-in-Singapore-02.jpg';
import Sin2 from '../../img/ArticleImg/Renaissance-in-Singapore-04.jpg';
import Sin3 from '../../img/ArticleImg/Renaissance-in-Singapore-05.jpg';
import Sin4 from '../../img/ArticleImg/Bertolt-Brecht.jpg';

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
        <div className="article_context">
          說到新加坡，不知道大家的腦海中會浮現出什麼樣的印象呢？是充滿高樓大廈、講求快速效率的國際金融中心？高大威猛的魚尾獅？享負盛名的樟宜機場？還是百貨林立的購物天堂？
          <br />
          <br />
          <img src={Sin1} alt="" className="text-img" />
          <br />
          上述確實都是新加坡長久以來所建立出的國際形象，但你知道新加坡近年來更致力於成為「亞洲的文藝復興城市」嗎？隨著各種大型國家發展計畫的推動以及新加坡國家美術館（National
          Gallery
          Singapore）的落成開幕，新加坡在21世紀以來逐漸站穩了「東南亞視覺藝術中心」的地位。今天我們就來看看，新加坡是如何在短短的幾十年內將自己打造為「文藝復興城市」！
          <br />
          <br />
          <img src={Sin2} alt="" className="text-img" />
          <br />
          <br />
          相較於其他文化大國，新加坡是一個晚期才獨立的國家。1965
          年才宣布脫離馬來亞聯邦正式獨立建國【圖
          1】。但在獨立建國之前，由於其優越的地理位置，早在19
          世紀初期便被英國東印度公司佔領並開始了一連串的現代化建設。過去殖民時期所帶動的商業建設與基礎以及強調經濟至上的國家發展政策，讓新加坡在
          20
          世紀時快速發展，一舉成為世界主要的金融中心之一。在這樣的社會氛圍之下藝術文化發展是不受到重視的，任何國家建設計畫以及政策的制定都是圍繞著如何持續推進新加坡的經濟成長，但這樣的社會氛圍到了
          1980 年代開始出現了轉變。
          <br />
          <br />
          20
          世紀中後國際間陸續爆發幾場嚴重的金融危機，使得原本經濟成長率逐年攀升的新加坡也連帶受到了影響。這讓新加坡政府開始全面檢視既有的經濟政策，並思索要如何再一次的提升新加坡的國際競爭力。此外，隨著國際商業的發展，越來越多的旅客來到新加坡，然而這些觀光客卻普遍將新加坡評價為一個「無趣」的城市，並在當時的許多旅遊雜誌以及遊記中評論新加坡是個「缺乏歷史與文化」的國家。
          <br />
          <br />
          為了改變如此的現況以及翻轉新加坡的國際形象，1988
          年在時任第一副總理（First Deputy Prime Minster）吳作棟（Goh Chok Tong,
          1941-）的建議下，成立了任務編組的「文化與藝術諮詢委員會」（ Advisory
          Council on Culture and the
          Arts）。該委員會邀請了包含有政府相關部門主管、學者、企業家、藝術家、建築師以及詩人等共
          15
          人，共同回顧新加坡自建國以來的文化發展狀況，並對推動新加坡於世紀末時成為國際級藝術文化中心的目標提出建議。
          <br />
          <br />
          經過一年的調查研究，在 1989 年發布了《國家藝術發展報告書》（Report of
          Advisory Council on Culture and the Arts）【圖
          2】。《國家藝術發展報告書》細數了新加坡自建國以來的各項藝文政策與建設，具體地說明了現況的不足以及應該如何改善，可說是為新加坡整體的藝術文化發展打下十分扎實的基礎。
          <br />
          <br />
          <img src={Sin3} alt="" className="text-img" />
          <br />
          <br />
          <img src={Sin4} alt="" className="text-img" />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
export default ArticleTitle;
