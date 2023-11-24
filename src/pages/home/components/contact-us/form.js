import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
  suggestion: yup.string().required('Informe sua sugestão'),
});