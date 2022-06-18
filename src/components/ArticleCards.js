import '../styles/_frontpage.scss';
import A1 from '../img/A1.jpg';
import A2 from '../img/A2.jpg';
import ArticleCard from './ArticleCard'

function ArticleCards(props) {
  return (
    <>
      <h2>
        <a href="/">質感商品</a>
      </h2>
      <div className="all-card d-flex justify-content-between">
      {props.datas.map((data) => (
        <ArticleCard title={data.title} body={data.body} img={data.img} href={data.href} />
      ))}
      </div>
    </>
  );
}

export default ArticleCards;
