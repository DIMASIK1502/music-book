import React, { Component } from "react";
import { connect } from "react-redux";
import { getMyMusic } from "../../redux/actions/music";

import "./MyMusic.scss";

class MyMusic extends Component {
  state = {
    loading: true
  };
  async componentDidMount() {
    await this.props.getMyMusic();
    this.setState({ loading: false });
    console.log(this.props.myMusic);
  }
  render() {
    return (
      <div className="mymusic-container">
        <div className="playlist-wrapper">
          <div className="" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    myMusic: state.music.myMusic
  };
}

export default connect(
  mapStateToProps,
  {
    getMyMusic
  }
)(MyMusic);
