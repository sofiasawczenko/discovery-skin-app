import { TitleContainer, SubTitle } from "./styles";
import {
  FormContainer,
  StyledForm,
  InputField,
  Input,
  TextArea,
  SubmitButton
} from "./styles";

export function ContactUs() {
  return (
    <FormContainer>
      <TitleContainer>
        <p>Fale Conosco</p>
      </TitleContainer>
      <SubTitle>Possui alguma sugestão ou artigos que gostaria de ler por aqui?</SubTitle>

      <StyledForm>
        <InputField>
          <Input type="text" placeholder="Seu nome" name="name" required />
        </InputField>
        <InputField>
          <Input type="email" placeholder="E-mail" name="email" required />
        </InputField>
        <InputField>
          <TextArea placeholder="Sua mensagem" name="message" required />
        </InputField>
        <InputField>
          <SubmitButton type="submit">Enviar mensagem</SubmitButton>
        </InputField>
      </StyledForm>
    </FormContainer>
  );
}

