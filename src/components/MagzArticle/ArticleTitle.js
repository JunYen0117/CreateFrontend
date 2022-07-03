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
        <img src={History2} alt="" />
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
          誰說台北信義商圈的夜晚只能逛街、衝夜店？現在有更時髦選擇：進劇場看戲。不用拘謹多禮，也不擔心內容高冷，笑料滿點的讀劇，或口碑爆棚的浪漫音樂劇連日搬演，就在一群理工人打造的南村劇場裡。
          <br />
          <br />
          晚風吹送，酒香微醺。夜色把夕陽蓋掉之後，街上的燈都亮了。台北101是信義區最醒目的地標，在對面走路不過5分鐘的地方，幾座小草丘的背後，也有平房燈火通明。
          <br />
          <br />
          這裡是四四南村，台灣最早興建、也最早被保留的眷村之一。樸實房舍讓人遙想早年的眷村生活，與對街繁華亮麗的百貨公司群形成鮮明的對比。
          <br />
          <br />
          約莫2年前，這裡入夜後開始吸引人流，大家魚貫入場，神情期盼。明明是充滿年代感的小屋，怎麼晚上變得不一樣？黑暗中聚光燈「唰」地打開，你瞬間進入另一個時空，被演員逗得時而捧腹、時而心酸。
          <br />
          <br />
          在村內最南端、如今名為南村劇場的空間裡，和演員幾乎只有一步之遙，聽得見他的呼吸，看得見她的媚眼，甚至連後台的道具和衣服都攤在眼前。
          <br />
          <br />
          你不再正襟危坐，因為表演者穿梭於場內各地，左右上下都有事情發生，宛若自己也走入劇情，身臨其境。最多只能容納幾十人的小場地，短短2小時的魔幻時刻，讓觀眾一瞬間忘卻了白天累積的壓力。
          <br />
          <br />
          隱身在老眷村裡的南村劇場，早上是書店，晚上施展魔法，讓滿腹苦悶的都市人笑了。
          <br />
          <br />
          <img src={art101} alt="" className="text-img" />
          <h2 className="arh2">台灣未有過的戲劇空間</h2>
          小劇場在台灣不稀奇，但南村劇場卻擁有與眾不同的魅力。
          <br />
          <br />
          首先是便利，村外是捷運站，周邊巷內館子林立，再走幾步就抵達百貨公司，小吃到高檔餐廳都有，不愁沒地方覓食。
          <br />
          <br />
          再來，空間從內到外的悠閒氣氛，不用像到國家劇院正裝以對，反而適合和朋友散步、吹風，喝點小酒再入場。疫情緩和後，席間也逐步開放飲食。
          <br />
          <br />
          與其說進劇院，更像到秀場看秀，一週5天都有表演，每一齣精挑細選，歡笑之餘也見證台灣劇場表演能量的最前線。
          <br />
          <br />
          不過，南村劇場之所以有機靈活，開幕2年便獲得矚目，主要是這裡長期的營運方針，其實是參考紐約百老匯的生態所設定。
          <br />
          <br />
          台灣也能有百老匯？教人吃驚的，是企圖實現這理想的，竟是一群理工人。
          <br />
          <br />
          南村劇場背後的主要經營者，是一群清華大學校友創辦的大清華傳媒。董事長成群傑念清大化工，曾在台塑擔任生產顧問，後來橫跨證券、紡織和創投界；其他成員包括同樣投身創投界的廖湘如，初期參與的紀錄片導演蘇志宗，以及現任總監製馬天宗，皆畢業自清大理工科系；共同投資南村劇場的聯合數位文創董事長李彥甫也出身清大電機。
          <br />
          <br />
          「清華雖是理工學校，卻很重人文，『厚德載物』的校訓誰不會背？」成群傑戴著有型的眼鏡，笑著解釋，他們攜手投資藝文看似突然，卻又是理所當然。
          <br />
          <br />
          起初大清華傳媒嘗試拍影片、做音樂，直到馬天宗加入後，才全面轉向劇場。馬天宗從清大核工畢業後，赴耶魯念劇場管理，並在專做百老匯布景的公司ShowMotion成為合夥人；回國後對比紐約發達而完整的劇場生態，和台灣劇場圈長久以來的發育未全，十分有感觸。
          <br />
          <br />
          他和成群傑開會時，畫了一條微笑曲線，並在兩個端點寫上「投資」和「通路」，意指希望透過這兩者，設法帶動曲線谷底的「人才」和「製作」。
          <br />
          <br />
          換言之，讓大清華傳媒扮演提供資金和流通的平台，成為推手，讓有志難伸的台灣劇場被更多人看見。
          <br />
          <br />
          <img src={art1012} alt="" className="text-img" />
          <h2 className="arh2">透過定目劇練兵，把好作品養大</h2>
          實際上該怎麼做呢？
          <br />
          <br />
          關鍵策略是推動定目劇。馬天宗指出，紐約百老匯的演出精湛，是因為一線團隊早在外百老匯、外外百老匯鍛鍊許久，這些「外圍」的中小型劇場空間多達幾十個。以近年如火如荼發展音樂劇的韓國為例，藝文重鎮大學路上，多達幾十間劇場都有定目劇，是豐富藝術表演產業非常重要的一環。
          <br />
          <br />
          南村劇場渴望成為類似外百老匯的「練兵場」。
          <br />
          <br />
          「我們非常尊敬專業和技術，而台灣劇場目前缺的是人才和製作的專業與技術，這必須仰賴不斷實作才能產生，」馬天宗講話慢條斯理，卻透露一股精明。
          <br />
          <br />
          他認為一齣戲必須反覆演出，製作團隊才能從做中學，慢慢把戲磨到最好的狀態。也才能累積更多實力，向大型舞台晉升。否則如今北中南都有上千席次的大劇院，但撐得起場面的劇團又有幾個？
          <br />
          <br />
          長期在高雄耕耘音樂劇的唱歌集團長詹喆君支持這樣的說法，「一部音樂劇作品，要到第二輪上演時，才可能比較成熟，」長期、固定時段演出的定目劇，不但有更多機會回收製作成本，也更易於培養觀眾，「不會只演幾場，口碑才剛出來，戲就結束了。」
          <br />
          <br />
          能推動定目劇，是因為大清華傳媒經營的「通路」——民營場地能自由安排檔期。例如去年和活性界面製作聯手推出，引自外百老匯的愛情音樂劇《I
          Love You, You're Perfect, Now
          Change》（簡稱LPC），一口氣連演35場，獲得熱烈迴響後，今年加碼150場，演出期間長達半年。這在必須平均分配檔期的官方場館中，是難以想像的事。
        </div>
      </div>
    </>
  );
}
export default ArticleTitle;
