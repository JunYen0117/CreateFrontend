import avatar from '../../img/potato.jpg';
function CommentInput() {
  return (
    <>
      <div className="compose_wrapper d-flex justify-content-center">
        <div className="avatar">
          <span className="comment_user">
            <img src={avatar} alt="" className="" />
          </span>
        </div>
        <textarea
          name="comments"
          cols="100"
          rows="6"
          placeholder="留下你的想法"
          className="comment-text"
        />
        <input
          type="submit"
          value="送出"
          className="comment-submit align-self-end"
        />
      </div>
    </>
  );
}

export default CommentInput;
