import styled, { css } from "styled-components";

export default styled.input`
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

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `};
`;
