import Section4FlexItem from './Section4FlexItem';

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
          <Section4FlexItem />
          <Section4FlexItem />
          <Section4FlexItem />
          <Section4FlexItem />
        </div>
      </section>
      </>
    );
  }
  
  export default Section4;