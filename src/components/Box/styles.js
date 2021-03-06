import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  /* Fazer rolagem tipo netflix */
  /* width: 1920px auto; */
`;
export const Boxs = styled.div`
  width: 300px;
  height: 500px;
  overflow-y: scroll;
  box-shadow: 0px 7px 0px 2px rgba(28, 28, 28, 0.89);
  background-color: #262626;
  margin-top: 40px;
  border-radius: 16px;
  scroll-margin-block-end: 10px;

  div::-webkit-scrollbar-track {
    background-color: #262626;
  }
`;
