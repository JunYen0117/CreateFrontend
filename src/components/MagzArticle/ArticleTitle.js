import bookmark from '../../img/bookmark.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';


function ArticleTitle(props) {
  const { name } = props;
  const [MagzArticle, setMagzArticle] = useState({
    articleTitle: '',
    createTime: '',
    articleContext: '',
    author: '',
    image: '',
  });
  // 向後端要資料
  axios
    .get(`http://localhost:3003/api/artmagazine/Magzarticle/${name}`)
    .then((res) => {
      setMagzArticle(res.data);
      console.log(res.data);
    });

  return (
    <>
      <div className="article_main_img d-flex justify-content-center">
        <img
          src={`http://localhost:3003/images/artmagzs/${MagzArticle.image}`}
          alt=""
        />
      </div>
      <div className="article_all_content">
        <div className="d-flex justify-content-between">
          <div className="article_text d-flex">
            <div className="article_author">{MagzArticle.author}</div>
            <div className="article_create_time">{MagzArticle.createTime}</div>
          </div>
          <img src={bookmark} alt="收藏" className="" />
        </div>
        <h1 className="article_title">{MagzArticle.articleTitle}</h1>
        <div
          className="article_context"
          dangerouslySetInnerHTML={{ __html: MagzArticle.articleContext }}
        />
      </div>
    </>
  );
}
export default ArticleTitle;
