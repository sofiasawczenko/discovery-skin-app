import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./form";
import { ContactUsContainer, ContactUsForm, ErrorMessage } from "./styles";

export function ContactUs() {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    alert("Sugestão enviado com Sucesso!");
    reset();
  };

  return (
    <ContactUsContainer>
      <h3>Fale conosco</h3>

      <p>Possui alguma sugestão ou artigos que gostaria de ler por aqui ?</p>

      <ContactUsForm onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          {...register("name")}
          placeholder="Seu nome"
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

        <input
          type="text"
          name="email"
          placeholder="E-mail"
          {...register("email")}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <textarea
          type="text"
          name="suggestion"
          {...register("suggestion")}
          placeholder="Sua mensagem"
        />
        {errors.suggestion && (
          <ErrorMessage>{errors.suggestion.message}</ErrorMessage>
        )}

        <button type="submit">Enviar mensagem</button>
      </ContactUsForm>
    </ContactUsContainer>
  );
}
