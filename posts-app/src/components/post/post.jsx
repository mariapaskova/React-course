import React from "react";
import "./post.css";

const voteText = {
  vote: "Vote for this post",
  unvote: "Unvote for this post"
};

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votesCount: this.props.votesCount,
      isHidden: false,
      isVoted: false,
      voteText: voteText.vote
    };
  }

  hidePost = () => {
    this.setState({
      isHidden: true
    });
  };

  voteUnvote = () => {
    if (this.state.isVoted) {
      this.setState({
        isVoted: false,
        voteText: voteText.vote,
        votesCount: this.state.votesCount - 1
      });
    } else {
      this.setState({
        isVoted: true,
        voteText: voteText.unvote,
        votesCount: this.state.votesCount + 1
      });
    }
  };

  render() {
    return (
      <>
        {this.state.isHidden === false && (
          <div className="post">
            <button className="vote-btn" onClick={this.voteUnvote}>
              {this.state.voteText}
            </button>
            <div>
              <div className="first-row">
                <div>{this.props.title}</div>
                <button className="hide-btn" onClick={this.hidePost}>
                  Hide
                </button>
              </div>
              <div className="first-row">
                <div>{this.props.tagline}</div>
                <div> Votes:{this.state.votesCount}</div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
