const Done = ({ todo, todoCancleBtnHandler, todoDeleteBtnHandler }) => {
  return (
    <li key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <div>
        <button onClick={() => todoDeleteBtnHandler(todo.id)}>삭제하기</button>
        <button onClick={() => todoCancleBtnHandler(todo.id)}>취소</button>
      </div>
    </li>
  );
};

export default Done;
