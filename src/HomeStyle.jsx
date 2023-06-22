import { styled } from "styled-components";

const S = {
  TodoListPageLayout: styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  `,

  TodoListPageHeader: styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
    border: 1px solid rgb(243, 243, 243);
    font-size: 16px;
  `,

  TodoListPage_TodoListContainer: styled.div`
    width: 100%;
    padding: 16px;
  `,

  TodoListPage_TodoStateTitle: styled.h2`
    font-weight: bold;
    font-size: 23px;
  `,

  TodoListPage_TodoList: styled.ul`
    width: 100%;
    display: flex;
    gap: 10px;
  `,
};

export default S;
