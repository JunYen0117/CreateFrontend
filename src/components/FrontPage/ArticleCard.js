// import '../../styles/_frontpage.scss';

function ArticleCard(props) {
  const { href, img, title, body } = props;
  return (
    <>
      <div className="article_card col-12 col-md-6">
        <a href={href}>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center atc">
            <div className="flex-shrink-0 article_img">
              {/* localhost:3003/img/name/pic.jpg */}
              <img src={require(`../../img/${img}`)} alt="..." />
            </div>
            <div className="flex-grow-1 ms-3 d-flex flex-wrap article_text">
              <h3 className="">{title}</h3>
              <div className="line" />
              <p>{body}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default ArticleCard;
