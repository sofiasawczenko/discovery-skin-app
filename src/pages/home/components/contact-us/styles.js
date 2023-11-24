import styled from "styled-components";

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  h3 {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 767px) {
    p {
      text-align: center;
    }
  }
`;

export const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 3rem;

  gap: 1rem;

  input {
    width: 20rem;
    height: 2rem;
    text-indent: 0.5rem;
  }

  textarea {
    width: 20rem;
    height: 5rem;
    text-indent: 0.5rem;
  }

  button {
    border: 0;
    color: #fff;
    background-color: #FF7A00;
    padding: 0.5rem 1rem;
    align-self: start;
    cursor: pointer;
    transition: 500ms;

    &:hover {
      background-color: #fff;
      color: #FF7A00;
    }
  }

  @media only screen and (max-width: 767px) {
    button {
      align-self: center;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.7rem;
`