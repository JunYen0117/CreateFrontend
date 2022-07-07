// import '../../styles/_frontpage.scss';

function ArticleCard(props) {
  const { image, title, context } = props;
  return (
    <div className="article_card col-5">
      <a href="/">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center atc">
          <div className="flex-shrink-0 article_img">
            <img
              src={`http://localhost:3003/images/artmagzs/${image}`}
              alt="..."
            />
          </div>
          <div className="flex-grow-1 ms-3 d-flex flex-wrap article_text">
            <h3 className="">{title}</h3>
            <div className="line" />
            <p dangerouslySetInnerHTML={{ __html: context }} />
          </div>
        </div>
      </a>
    </div>
  );
}

export default ArticleCard;
