import { Icon } from "react-fa";
import InputTags from "../InputTags/";
import React from "react";
import { priorityValues } from "../../api/data";

export default class TodoEditable extends React.Component {
  constructor(props) {
    super(props);
    const { description = "", tags = [], priority = "normal" } = props;
    this.state = {
      description,
      tags,
      priority
    };
  }

  setTagValues = tagValues => {
    this.setState({ tags: tagValues });
  };

  handleInputOnchange = e => {
    e.preventDefault();
    this.setState({
      description: e.currentTarget.value
    });
  };

  handlePriorityOnChange = e => {
    e.preventDefault();
    this.setState({
      priority: e.currentTarget.value
    });
  };

  doSave = e => {
    e.preventDefault();
    const { id } = this.props;
    this.props.handleSave(id, { ...this.state });
  };
  doCancel = e => {
    e.preventDefault();
    this.props.handleCancel();
  };

  render() {
    const { description, tags, priority } = this.state;
    const { sequence, icon } = this.props;
    return (
      <tr>
        <th scope="row">{sequence}</th>
        <td>
          <input
            className="form-control"
            value={description}
            onChange={this.handleInputOnchange}
          />
        </td>
        <td>
          <InputTags defaultTags={tags} setTagValues={this.setTagValues} />
        </td>
        <td>
          <select
            className="form-control"
            value={priority}
            onChange={this.handlePriorityOnChange}
          >
            {priorityValues.map(({ name, value }) => (
              <option value={value} key={value}>
                {name}
              </option>
            ))}
          </select>
        </td>
        <td>
          <div className="form-inline">
            <div className="form-group">
              <button
                className="btn btn-outline-primary mx-2 my-sm-0"
                onClick={this.doSave}
              >
                Save
              </button>
            </div>
            <div className="form-group">
              <button
                className="btn btn-outline-danger mx-2 my-sm-0"
                onClick={this.doCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </td>
        <td>
          <Icon name={icon} />
        </td>
      </tr>
    );
  }
}
