import Section7FlexItem from './Section7FlexItem';
function Section7() {
  return (
    <>
      <section className="planning_section_seven pb-4">
        <h4 className="py-5 text-center">與同學最好的回憶</h4>
        <p className="pb-5">
          六月畢業季來了，分離的畢業歌聲響起，
          <br />
          還沒想好畢業禮物送什麼比較好？
        </p>
        <div className="d-flex justify-content-center">
          <Section7FlexItem />
          <Section7FlexItem />
          <Section7FlexItem />
        </div>
        <button className="d-flex justify-content-center mt-4 mb-5">
          逛更多〖畢業禮物〗
        </button>
      </section>
    </>
  );
}

export default Section7;
