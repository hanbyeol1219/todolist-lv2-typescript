import { styled } from "styled-components";

const S = {
  TodoListPage_Form: styled.form`
    width: 100%;
    background-color: rgb(243, 243, 243);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 27px 25px;
  `,

  TodoListPage_FormInputContainer: styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
  `,

  TodoListPage_FormText: styled.span`
    font-size: 16px;
    font-weight: 600;
  `,

  TodoListPage_FormInput: styled.input`
    border: none;
    border-radius: 10px;
    height: 40px;
    width: 270px;
    padding: 0 10px;
  `,

  TodoListPage_FormBtn: styled.button`
    width: 130px;
    border: none;
    background-color: #008080;
    color: white;
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: 600;
    cursor: pointer;
  `,
};

export default S;
