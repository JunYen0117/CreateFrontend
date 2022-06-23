import Section4FlexItem from './Section4FlexItem';

function Section4() {
  return (
    <>
      <section className="planning_section_four">
        <h4 className="py-5 text-center">送給同學最棒的禮物~</h4>
        <p className="mb-5">
          創意迴廊精選多樣客製好禮與質感禮物
          <br />
          透過最具特色的設計
          <br />
          向好友、師長傳遞滿滿祝福與感謝
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
