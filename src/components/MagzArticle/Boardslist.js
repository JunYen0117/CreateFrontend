import Board from './Board';
import React from 'react';
import axios from 'axios';

class Boardslist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <div className="container">
          {this.props.comments.reverse().map((element) => {
            return <Board>{element.comment}</Board>;
          })}
        </div>
      </>
    );
  }
}

export default Boardslist;
