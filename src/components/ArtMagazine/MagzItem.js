import A1 from '../../img/A1.jpg';
function MagzItem(props) {
  const { title, context, image, authorName } = props;
  return (
    <>
      <div className="magz_list col-12 justify-content-start mb-3">
        <div className="d-flex align-items-start ">
          <a href="/">
            <div className="magz_img flex-shrink-0">
              <img
                src={`http://localhost:3003/images/artmagzs/${image}`}
                alt=""
              />
            </div>
          </a>
          <div className="magz_text">
            <a href="/" className="magz_title">
              {title}
            </a>
            <p className="magz_author_name">{authorName}</p>
            <div className="magz_list_line"></div>
            <p className="magz_author_context">{context}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default MagzItem;
