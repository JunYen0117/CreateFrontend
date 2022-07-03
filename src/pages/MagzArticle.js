import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ArticleTitle from '../components/MagzArticle/ArticleTitle';
import CommentAPP from '../components/MagzArticle/CommentAPP';

function MagzArticle() {
  const [MagzArticle, setMagzArticle] = useState({
    articleTitle: '',
    author: '',
    create_time: '',
    articleContext: '',
    image: '',
  });

  // /ArteMagazine?ArticleId=1
  const location = useLocation();

  // 抓文章資料
  useEffect(() => {
    let axiosArticleById = async () => {
      // 根據URL 建立 Params 物件
      const searchParams = new URLSearchParams(location.search);
      // 取得 Param: BrandId
      const ArticleId = searchParams.get('ArticleId');
      // 向後端要資料
      const response = await axios.get(
        `http://localhost:3003/api/Magzarticle/:articleId/${ArticleId}`
      );
      setMagzArticle(response.data);
    };
    axiosArticleById();
  }, []);
  return (
    <>
      <div className="container my-4">
        <ArticleTitle MagzArticle={MagzArticle} />
        <div className="demarcation" />
        <CommentAPP />
      </div>
    </>
  );
}

export default MagzArticle;
