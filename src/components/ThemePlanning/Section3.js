import Pic1 from '../../img/themeplanning/Pic1.png';


function Section3() {
    return (
      <>
      <section className="planning_section_three">
        <h3 className="py-4 mt-5">送給同學最棒的禮物~</h3>
        <p className="mb-4">
          六月畢業季來了，分離的畢業歌聲響起，
          <br />
          還沒想好畢業禮物送什麼比較好？
          <br />
          創意迴廊精選學生最愛畢業禮物排行榜，獨一無二的客製化
          <br />
          實用又療癒的創意小物、入職必備的文具和證件套等配件、適合送老師的質感好禮
          <br />
          學生送禮也負擔得起！
        </p>
        <div className="d-flex justify-content-center mb-5">
          <figure className="mx-1 mx-md-2">
            <img src={Pic1} alt="#/" />
          </figure>
          <figure className="mx-1 mx-md-2">
            <img src={Pic1} alt="#/" />
          </figure>
          <figure className="mx-1 mx-md-2">
            <img src={Pic1} alt="#/" />
          </figure>
        </div>
      </section>
      </>
    );
  }
  
  export default Section3;