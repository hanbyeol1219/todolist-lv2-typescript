import { styled } from "styled-components";

const S = {
  AboutTodoPageLayout: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `,

  AboutTodoPage: styled.div`
    border: 2px solid gray;
    width: 500px;
    height: 300px;
    border-radius: 20px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  AboutTodoPage_TodoIdTitle: styled.p`
    font-weight: 600;
  `,

  AboutTodoPage_TodoIdValue: styled.span`
    font-weight: normal;
    color: gray;
  `,

  AboutTodoPage_TodoTitle: styled.h3`
    font-size: 30px;
    font-weight: 900;
  `,

  AboutTodoPage_TodoContent: styled.p`
    font-size: 18px;
  `,

  AboutTodoPage_PrevButton: styled.button`
    background-color: transparent;
    width: 20%;
    color: white;
    background-color: gray;
    border-radius: 8px;
    height: 40px;
    cursor: pointer;
    border: none;
  `,
};

export default S;
