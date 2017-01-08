import React, {Component} from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

  renderList(){
    return this.props.comments.map(comment => {
      return (
        <li key={comment}>
          {comment}
        </li>
      )
    });
  }
  render() {
    return (
      <ul className="comment-list">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps({ comments }){
  return { comments }
}

export default connect(mapStateToProps)(CommentList);