import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaStar, FaRegStar } from 'react-icons/fa';

const CommentItem = (props) => {
  const { commentList, setCommentList } = props;
  const { productId, image, product_name, subtotal, detail } = props;
  // 初始值為1
  const [star, setStar] = useState(1);

  useEffect(() => {
    setCommentList(detail);
  }, []);

  useEffect(() => {
    if (commentList.length === 0) return;
    handleChangeStar();
  }, [star]);

  function handleChangeStar() {
    const commentIndex = detail.findIndex(
      (item) => item.product_id === productId
    );

    let newList = [...commentList];

    newList[commentIndex] = {
      ...newList[commentIndex],
      star: star,
    };
    setCommentList(newList);
  }

  function handleOnChange(e) {
    const commentIndex = detail.findIndex(
      (item) => item.product_id === productId
    );

    let newList = [...commentList];

    newList[commentIndex] = {
      ...newList[commentIndex],
      customer_id: 1,
      star: star,
      comment: e.target.value,
    };

    setCommentList(newList);
  }

  // console.log('commentList', commentList);

  return (
    <Modal.Body>
      <div className="ms-1 mb-3 row">
        <div className="comment_img col-2 p-0">
          <img src={`http://localhost:3003/images/product/${image}`} alt="" />
        </div>
        <div className="col-3">{product_name}</div>
        <div className="col-3">NT ${subtotal}</div>
        <div className="col-3 ">
          {star >= 1 ? (
            <FaStar
              className="comment_star"
              onClick={(e) => {
                setStar(1);
                // handleOnChange(e);
              }}
            />
          ) : (
            <FaRegStar
              className="comment_star"
              onClick={(e) => {
                setStar(1);
                // handleOnChange(e);
              }}
            />
          )}
          {star >= 2 ? (
            <FaStar
              className="comment_star"
              onClick={(e) => {
                setStar(2);
                // handleOnChange(e);
              }}
            />
          ) : (
            <FaRegStar
              className="comment_star"
              onClick={(e) => {
                setStar(2);
                // handleOnChange(e);
              }}
            />
          )}
          {star >= 3 ? (
            <FaStar
              className="comment_star"
              onClick={(e) => {
                setStar(3);
                // handleOnChange(e);
              }}
            />
          ) : (
            <FaRegStar
              className="comment_star"
              onClick={(e) => {
                setStar(3);
                // handleOnChange(e);
              }}
            />
          )}
          {star >= 4 ? (
            <FaStar
              className="comment_star"
              onClick={(e) => {
                setStar(4);
                // handleOnChange(e);
              }}
            />
          ) : (
            <FaRegStar
              className="comment_star"
              onClick={(e) => {
                setStar(4);
              }}
            />
          )}
          {star >= 5 ? (
            <FaStar
              className="comment_star"
              onClick={(e) => {
                setStar(5);
              }}
            />
          ) : (
            <FaRegStar
              className="comment_star"
              onClick={(e) => {
                setStar(5);
              }}
            />
          )}
        </div>
      </div>
      <Form.Control as="textarea" rows={3} onChange={handleOnChange} />
    </Modal.Body>
  );
};

export default CommentItem;