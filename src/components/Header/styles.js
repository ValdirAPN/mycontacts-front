import styled from "styled-components";

export const Container = styled.header`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputSearchContainer = styled.form`
  margin-top: 48px;
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    padding: 0 16px;

    border: none;
    border-radius: 25px;
    outline: 0;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;
