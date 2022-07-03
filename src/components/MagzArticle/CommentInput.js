function CommentInput() {
  return (
    <>
      <div className="compose_wrapper">
        <div className="avatar">
          <span className="comment_user">
            <img src="" alt="" className="" />
          </span>
        </div>
        <textarea
          name="comments"
          cols="80"
          rows="4"
          placeholder="留下你的想法"
          className="comment"
        />
        <input type="submit" value="送出" />
      </div>
    </>
  );
}

export default CommentInput;
