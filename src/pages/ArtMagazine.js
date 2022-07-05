import React from 'react';
import { useLocation } from 'react-router-dom';

import MagzOption from '../components/ArtMagazine/MagzOption';
import MagzList from '../components/ArtMagazine/MagzList';
import ArticleTitle from '../components/MagzArticle/ArticleTitle';
import NextPreNav from '../components/MagzArticle/NextPreNav';
import CommentAPP from '../components/MagzArticle/CommentAPP';
import CommentInput from '../components/MagzArticle/CommentInput';

function ArtMagazine() {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('name');
  console.log('first');
  if (name === null) {
    return (
      <>
        <div className="container">
          <MagzOption />
          <div className="magz_all_line" />
          <div className="row magz_all px-3">
            <MagzList />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container my-4">
        <ArticleTitle name={name} />
        <div className="demarcation" />
        <NextPreNav />
        <CommentInput name={name} />
      </div>
    </>
  );
}

export default ArtMagazine;
