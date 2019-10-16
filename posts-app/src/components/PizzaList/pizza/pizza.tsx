import React from "react";
import "./pizza.css";
import Grid from "../grid/grid";

const voteText = {
  vote: "Vote for this pizza",
  unvote: "Unvote for this pizza"
};

interface IProps {
  key: number;
  title: string;
  tagline: string;
  votesCount: number;
}

interface IState {
  votesCount: number;
  isHidden: boolean;
  isVoted: boolean;
  voteText: string;
}

export default class Pizza extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      votesCount: this.props.votesCount,
      isHidden: false,
      isVoted: false,
      voteText: voteText.vote
    };
  }

  hide = () => {
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
      <Grid
        isHidden={this.state.isHidden}
        voteText={this.state.voteText}
        votesCount={this.state.votesCount}
        title={this.props.title}
        tagline={this.props.tagline}
        voteUnvote={this.voteUnvote}
        hide={this.hide}
      ></Grid>
    );
  }
}
