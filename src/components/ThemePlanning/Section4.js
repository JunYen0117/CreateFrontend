import Pic2 from '../../img/themeplanning/Pic2.png';

function Section4() {
    return (
      <>
      <section className="planning_section_four">
        <h4 className="py-5 text-center">送給同學最棒的禮物~</h4>
        <p className="mb-5">
          六月畢業季來了，分離的畢業歌聲響起
          <br />
          還沒想好畢業禮物送什麼比較好？
        </p>
        <div className="d-flex flex-wrap justify-content-center pb-5">
          <div className="section4_flex_item mx-1 mx-md-2 mt-3">
            <figure>
              <img src={Pic2} alt="#/" />
            </figure>
            <p className="p-1">HOT商品名稱</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="section4_flex_item mx-1 mx-md-2 mt-3">
            <figure>
              <img src={Pic2} alt="#/" />
            </figure>
            <p className="p-1">HOT商品名稱</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="section4_flex_item mx-1 mx-md-2 mt-3">
            <figure>
              <img src={Pic2} alt="#/" />
            </figure>
            <p className="p-1">HOT商品名稱</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="section4_flex_item mx-1 mx-md-2 mt-3">
            <figure>
              <img src={Pic2} alt="#/" />
            </figure>
            <p className="p-1">HOT商品名稱</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>
      </>
    );
  }
  
  export default Section4;