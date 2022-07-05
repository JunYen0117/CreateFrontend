import avatar from '../../img/potato.jpg';

function Board() {
  return (
    <>
      <div className="all-comment-board d-flex">
        <div className="board_avatar">
          <span className="board_comment_user">
            <img src={avatar} alt="" className="" />
          </span>
        </div>
        <div className="others-comment">
          <p>這是一篇很棒文章!</p>
        </div>
      </div>
    </>
  );
}

export default Board;
