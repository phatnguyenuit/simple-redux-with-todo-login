import { capitalize, uniqueId } from "lodash";

import { Icon } from "react-fa";
import React from "react";
import { todoAction } from "../../redux/action";

export default class TodoDisplay extends React.Component {
  constructor(props) {
    super(props);
    const { status = "not_start" } = props;
    this.state = {
      status
    };
  }

  handleUpdateStatus = (id, dispatch) => e => {
    e.preventDefault();
    const newStatus = e.currentTarget.value;
    this.setState({
      status: newStatus
    });
    dispatch(todoAction.actionUpdateTodo(id, { status: newStatus }));
  };

  render() {
    const { status } = this.state;
    const {
      id,
      sequence,
      description,
      tags,
      priority,
      className,
      icon,
      statusOptions,
      dispatch,
      handleEdit
    } = this.props;
    return (
      <tr>
        <th scope="row">{sequence}</th>
        <td>{description}</td>
        <td>
          {tags.map(tag => (
            <span
              className="text-left badge badge-pill badge-secondary mr-1"
              key={uniqueId(tag)}
            >
              {tag}
            </span>
          ))}
        </td>
        <td className={className}>{capitalize(priority).replace("_", " ")}</td>
        <td>
          <div className="form-inline">
            <div className="form-group">
              <button
                className="btn btn-outline-danger mx-2 my-sm-0"
                onClick={handleEdit}
              >
                Edit
              </button>
            </div>
            <div className="form-group">
              <select
                className="form-control"
                onChange={this.handleUpdateStatus(id, dispatch)}
                value={status}
              >
                {statusOptions.map(({ name, value }) => {
                  const disabled = value === "all";
                  return (
                    <option value={value} key={value} disabled={disabled}>
                      {name}
                    </option>
                  );
                })}
              </select>
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
