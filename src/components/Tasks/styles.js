import styled from "styled-components";

export const DivTaks = styled.div`
  margin: 0 auto;
  width: 100%;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  background-color: #262626;

  ul {
    list-style: none;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 5px;
    margin-top: 10px;
    color: #fff;
    border-radius: 5px;
    background-color: #6A6DCD;
    word-break: break-all;
    font-family: "Roboto", sans-serif;
    transition: all 0.5s;
  }
  li:hover {
    background-color: #464646;
  }
  span{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
  .edit {
    color: #ccc;
    font-size: 18px;
    margin-top: 10px;
    cursor: pointer;
  }
  .delete {
    color: #ff2b2b;
    font-size: 20px;
    margin-top: 10px;
    cursor: pointer;
  }
`;
