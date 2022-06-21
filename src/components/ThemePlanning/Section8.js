import Section8FlexItem from './Section8FlexItem';

function Section8() {
  return (
    <>
      <section className="planning_section_eight">
        <h4 className="py-5 text-center">畢業後充實自己</h4>
        <p className="pb-5">
          六月畢業季來了，分離的畢業歌聲響起，
          <br />
          還沒想好畢業禮物送什麼比較好？
        </p>
        <div className="d-flex justify-content-center">
          <Section8FlexItem />
          <Section8FlexItem />
          <Section8FlexItem />
        </div>
        <button className="d-flex justify-content-center mt-4 mb-5">
          逛更多〖專屬活動〗
        </button>
      </section>
    </>
  );
}

export default Section8;
