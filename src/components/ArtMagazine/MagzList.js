import A1 from '../../img/A1.jpg';
function MagzList() {
  return (
    <>
      <div className="magz_list col-12 justify-content-start mb-3">
        <div className="d-flex align-items-start ">
          <a href="/">
            <div className="magz_img flex-shrink-0">
              <img src={A1} alt="..." />
            </div>
          </a>
          <div className="magz_text">
            <a href="/" className="magz_title">
              文章標題超過兩萬張黑膠，台灣聽音樂最好的咖啡廳！
            </a>
            <p className="magz_author_name">作者XXX</p>
            <div className="magz_list_line"></div>
            <p className="magz_author_context">
              文章內容XXX由黑膠收藏家林珮如經營的黑膠咖啡廳「聲色Sounds
              Good」，有成千上百的唱片收藏，將近百歲的古董留聲機，以及現場刻錄黑膠的驚喜服務，連音樂人黃子佼都稱讚是全台灣民間聽音樂最好的環境。辦不完的音樂活動，說不完的音樂故事，也讓這間咖啡廳不僅洋溢曼妙旋律，還多了幾分人情味。
              <br />
              一台外型典雅，散發溫潤木頭光澤的機台前，把蟲膠（比黑膠更早流行的唱片種類，1950年代後停產）放上，指針對齊，過了一會兒，法國女歌手艾迪特·皮雅芙（Édith
              Piaf）的〈玫瑰人生〉從裡頭流洩出來，美妙的旋律讓人想跳舞。這台是產自1925年，擁有「留聲機之王」美名的Credenza，用手搖發條來播放，不僅是許多樂迷心中的寶物，不通電的音質，和現在的數位音樂完全不同。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default MagzList;
