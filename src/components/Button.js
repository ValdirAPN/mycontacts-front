import styled, { css } from "styled-components";

export default styled.button`
  /* width: 100%; */
  height: 52px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  transition: background .2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }
  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background: #ccc;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }
    &:active {
      background: ${theme.colors.danger.dark};
    }
  `}
`;
