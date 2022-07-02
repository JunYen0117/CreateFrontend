import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ArticleCards(props) {
  const [articles ,setArticles] = useState([]);

  useEffect(() => {
    let getArticles = async () => {
      // http://localhost:3003/api/brandpage
      let response = await axios.get('http://localhost:3003/api/brandpage');
      setArticles(response.data);
    };
    getArticles();
  }, []);
  return (
    <>
      <h2 className="front_h2">
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
