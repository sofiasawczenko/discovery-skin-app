import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 30px;
  margin-top: 1rem;
  font-weight: 300;
  margin-top: 10rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

export const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 16px;
  margin-bottom: 6rem;
  margin-top: 1rem;

`

export const FormContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.div`
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
`;

export const SubmitButton = styled.button`
  background-color: #FF7A00;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
