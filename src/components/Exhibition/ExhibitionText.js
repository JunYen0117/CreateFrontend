function ExhibitionText(props) {
  const { exhibition } = props;
  const a = '<h1>aa</h1>';
  return (
    <>
      {exhibition.map((item, index) => {
        return (
          <div key={item.id} className="exhibition-text">
            <h1 className="text-title my-4">{item.exhibition_name}</h1>
            <h1 className="my-3" id="exhibition-intro">
              展覽介紹
            </h1>
            <div className="text mx-4">
              <p>
                {item.exhibition_intro}
                {a}
              </p>
            </div>
            <h1 className="my-3" id="exhibition-des">
              展覽說明
            </h1>
            <div className="text mx-4">{item.exhibition_des}</div>
            <h1 className="my-3" id="exhibition-note">
              購買須知
            </h1>
            <div className="text mx-4">{item.exhibition_notes}</div>
            <h1 className="my-3" id="exhibition-buy">
              票卷購買
            </h1>
            <div className="text mx-4"></div>
          </div>
        );
      })}
    </>
  );
}
export default ExhibitionText;
