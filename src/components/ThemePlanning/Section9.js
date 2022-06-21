import Section9FlexItem from './Section9FlexItem';

function Section9() {
  return (
    <>
      <section className="planning_section_nine pb-5">
        <h3 className="py-4 mt-5">畢業感文分享</h3>
        <p>
          六月畢業季來了，分離的畢業歌聲響起，
          <br />
          還沒想好畢業禮物送什麼比較好？
          <br />
          Pinkoi 精選學生最愛畢業禮物排行榜，獨一無二的客製化/刻字禮物
          <br />
          實用又療癒的創意小物、入職必備的文具和證件套等配件、適合送老師的質感好禮
          <br />
          學生送禮也負擔得起！
        </p>
        <div className="d-flex justify-content-center">
          <Section9FlexItem />
          <Section9FlexItem />
        </div>
        <div className="d-flex justify-content-center">
          <Section9FlexItem />
          <Section9FlexItem />
        </div>
      </section>
    </>
  );
}

export default Section9;
