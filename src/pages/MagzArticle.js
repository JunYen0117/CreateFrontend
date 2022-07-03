import React from 'react';
import ArticleTitleList from '../components/MagzArticle/ArticleTitleList';
import CommentAPP from '../components/MagzArticle/CommentAPP';

function MagzArticle() {
  return (
    <>
      <div className="container my-4">
        <ArticleTitleList />
        <div className="demarcation" />
        <CommentAPP />
      </div>
    </>
  );
}

export default MagzArticle;
