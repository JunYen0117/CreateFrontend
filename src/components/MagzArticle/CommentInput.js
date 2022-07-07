import avatar from '../../img/potato.jpg';
import Boardslist from './Boardslist';
import React from 'react';
import axios from 'axios';

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', comments: [] };

    this.changeText = this.changeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  changeText(event) {
    this.setState({ value: event.target.value });
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3003/api/artmagazine/comment/${this.props.name}`)
      .then((res) => {
        this.setState(res.data);
        console.log(res.data);
      });
  }
  handleSubmit(event) {
    axios
      .post('http://localhost:3003/api/artmagazine/comment', {
        blog_id: this.props.name,
        customer_id: this.props.user.userID,
        comment: this.state.value,
      })
      .then(() => {
        this.setState({ value: '' });
        axios
          .get(
            `http://localhost:3003/api/artmagazine/comment/${this.props.name}`
          )
          .then((res) => {
            this.setState(res.data);
            console.log(res.data);
          });
      });

    event.preventDefault();
  }
  render() {
    return (
      <>
        <div className="compose_wrapper d-flex justify-content-center">
          <div className="avatar">
            <span className="comment_user">
              <img src={avatar} alt="" className="" />
            </span>
          </div>
          <form onSubmit={this.handleSubmit}>
            <textarea
              name="comments"
              cols="100"
              rows="6"
              placeholder="留下你的想法"
              className="comment-text"
              value={this.state.value}
              onChange={this.changeText}
            />
            <input
              type="submit"
              value="送出"
              className="comment-submit align-self-end"
            />
          </form>
        </div>
        <div className="d-flex justify-content-center">
          <div className="comment-demarcation" />
        </div>
        <Boardslist comments={this.state.comments} />
      </>
    );
  }
}

export default CommentInput;
