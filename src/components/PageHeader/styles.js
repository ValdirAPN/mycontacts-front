import styled from "styled-components";

export const Container = styled.header`
  a {
    display: flex;
    align-items: center;

    img {
      transform: rotate(-90deg);
      margin-right: 8px;
    }

    span {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  h1 {
    font-size: 24px;
  }
`;
