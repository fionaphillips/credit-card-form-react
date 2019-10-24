import styled from "styled-components";

export const CardFormStyled = styled.div`
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;

  .col {
    margin-bottom: 20px;
  }

  .expirDateMonth,
  .expirDateYear {
    margin-right: 10px;
  }

  .submitButton {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
      width: 100%;
  }

  .col-expirDate,
  .col-cvv {
    display: inline-block;
  }
`;
