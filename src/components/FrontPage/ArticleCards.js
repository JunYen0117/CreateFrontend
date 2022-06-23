// import '../../styles/_frontpage.scss';
import ArticleCard from './ArticleCard';

function ArticleCards(props) {
  return (
    <>
      <h2>
        <a href="/">精選文章</a>
      </h2>
      <div className="container article-container">
        <div>
          <div className="all-article-card row justify-content-between">
            {props.datas.map((data) => (
              <ArticleCard
                title={data.title}
                body={data.body}
                img={data.img}
                href={data.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleCards;
