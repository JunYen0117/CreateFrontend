import Section5FlexItem from './Section5FlexItem';

function Section5() {
  const section5Flex = [1, 2, 3];
  return (
    <>
      <section className="planning_section_five py-5">
        <div>
          {section5Flex.map(() => {
            return (
              <div className="d-flex flex-wrap justify-content-center">
                <Section5FlexItem />
                <Section5FlexItem />
                <Section5FlexItem />
                <Section5FlexItem />
              </div>
            );
          })}
          <button className="d-flex justify-content-center mb-3">
            逛更多〖畢業禮物〗
          </button>
        </div>
      </section>
    </>
  );
}

export default Section5;
