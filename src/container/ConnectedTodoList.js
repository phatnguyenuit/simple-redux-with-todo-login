import { getTodosByFilter, getTodosByTags } from "../helper/todo";

import TodoList from "../components/TodoList";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const { visibleTodos } = state.todoReducer;
  const { activeFilter } = state.filterReducer;
  const { activeTags } = state.tagReducer;
  const filteredTodos = getTodosByFilter(visibleTodos, activeFilter);
  const new_visibleTodos = getTodosByTags(filteredTodos, activeTags);
  return {
    visibleTodos: new_visibleTodos
  };
};
export default connect(mapStateToProps)(TodoList);
