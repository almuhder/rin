import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Story.css";

export default class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  render() {
    return (
      <div className="story bub">
        <div
          className="story-item"
          style={{ backgroundImage: `url(${this.props.story.imgs[0]})` }}
        >
          <p className="link-read-more"> Read Story </p>
        </div>
        <p className="center">{this.props.story.title}</p>
      </div>
    );
  }
}
