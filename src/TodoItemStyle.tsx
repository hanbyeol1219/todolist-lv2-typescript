import { styled } from "styled-components";

const S = {
  TodoListPage_TodoBox: styled.li`
    width: 340px;
    height: 230px;
    border: 4px solid #008080;
    margin: 20px 0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  TodoListPage_TodoContentsWrap: styled.div`
    width: 250px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `,

  TodoListPage_TodoTitle: styled.h3`
    font-weight: bold;
    font-size: 23px;
  `,

  TodoListPage_TodoContent: styled.p`
    margin: 20px 0;
  `,

  TodoListPage_TodoBtns: styled.button<{
    borderColor: string;
    marginRight?: string;
  }>`
    background-color: transparent;
    width: 32%;
    border: 2px solid ${(props) => props.borderColor};
    border-radius: 8px;
    height: 40px;
    cursor: pointer;
    margin-right: ${(props) => props.marginRight};
  `,
};

export default S;
