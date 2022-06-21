import GraduatePic from '../../img/themeplanning/GraduatePic.png';

function Section2() {
    return (
      <>
      <section className="planning_section_two pb-5 mb-5">
        <h3 className="py-4 mt-5">畢業季 • 出走派對 登場！</h3>
        <ul className="section2_flex d-flex">
          <figure className="section2_flex_item_left">
            <img src={GraduatePic} alt="" />
          </figure>
          <div className="section2_flex_item_right">
            <p className="py-4">
              這樣看來
              <br />
              一般來說
              <br />
              我們都必須務必慎重的考慮考慮
              <br />
              <br />
              要想清楚
              <br />
              畢業，到底是一種怎麼樣的存在
              <br />
              若能夠洞悉畢業各種層面的含義
              <br />
              勢必能讓思維再提高一個層級
            </p>
            <button className="d-flex justify-content-center mb-3">
              看更多
            </button>
          </div>
        </ul>
      </section>
      </>
    );
  }
  
  export default Section2;
  