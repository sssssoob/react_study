import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map(
        (
          todo //map을 사용하여 TodoListItem으로 이루어진 배열로 변환
        ) => (
          //map을 사용하여 컴포넌트로 변환할 때는 key props를 전달하여야함(고유값)
          <TodoListItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          /> //App 컴포넌트에서 받아온 todos
        )
      )}
    </div>
  );
};

export default TodoList;
