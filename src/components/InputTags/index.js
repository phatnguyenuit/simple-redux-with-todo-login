import "./style.css";

import React, { Component } from "react";

import Tag from "./Tag";

class InputTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: props.defaultTags || [],
      value: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { tags } = this.state;
    const { tags: prevTags } = prevState;
    let isDifferentTags = false;
    if (!tags.length && !prevTags.length) {
      isDifferentTags = false;
    } else if (tags.length === prevTags.length) {
      isDifferentTags = tags.some(tag => !prevTags.includes(tag));
    } else {
      isDifferentTags = true;
    }
    if (isDifferentTags) {
      this.props.setTagValues(tags);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reset !== this.props.reset) {
      this.setState({
        value: "",
        tags: []
      });
    }
  }

  removeLastestItem() {
    const { tags } = this.state;
    this.setState({
      value: "",
      tags: tags.slice(0, -1)
    });
  }

  // Event Handlers
  handleClickTags = e => {
    // Make the within input focus
    const childInput = e.target.firstElementChild;
    if (childInput) {
      childInput.focus();
    }
  };

  hanldeInputEvents = e => {
    switch (e.type) {
      case "change":
        return this.handleInputChange(e);
      case "keydown": {
        return this.handleInputKeyDown(e);
      }
      default:
        break;
    }
  };
  handleInputKeyDown = e => {
    const { tags } = this.state;
    const inputValue = e.target.value;
    switch (e.key) {
      case "Enter": {
        this.setState({
          value: "",
          tags: [...tags, inputValue],
          suggestedTags: []
        });
        break;
      }
      case "Backspace": {
        if (inputValue === "") {
          this.removeLastestItem();
        }
        break;
      }
      default: {
        this.handleInputChange(e);
        break;
      }
    }
  };

  handleInputChange = e => {
    const inputValue = e.target.value;
    this.setState({
      value: inputValue
    });
  };

  handleDeleteTag = tag => e => {
    e.preventDefault();
    const { tags } = this.state;
    const deleteIndex = tags.indexOf(tag);
    if (deleteIndex > -1) {
      this.setState({
        tags: [...tags.slice(0, deleteIndex), ...tags.slice(deleteIndex + 1)]
      });
    }
  };

  render() {
    const { value, tags } = this.state;
    return (
      <div className="tags" onClick={this.handleClickTags}>
        <div className="input-tags">
          {" "}
          {tags.map(tag => (
            <Tag key={tag} value={tag} onDelete={this.handleDeleteTag(tag)} />
          ))}{" "}
          <input
            value={value}
            onChange={this.hanldeInputEvents}
            onKeyDown={this.hanldeInputEvents}
          />{" "}
        </div>{" "}
      </div>
    );
  }
}

export default InputTags;
