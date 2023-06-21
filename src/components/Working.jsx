const Working = ({ todo, todoDoneBtnHandler, todoDeleteBtnHandler }) => {
  return (
    <li key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <div>
        <button onClick={() => todoDeleteBtnHandler(todo.id)}>삭제하기</button>
        <button onClick={() => todoDoneBtnHandler(todo.id)}>완료</button>
      </div>
    </li>
  );
};

export default Working;
