import styled from "styled-components";

export default styled.select`
  width: 100%;
  height: 52px;
  background: #fff;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;

  padding: 0 16px;
  font-size: 16px;

  transition: .2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
