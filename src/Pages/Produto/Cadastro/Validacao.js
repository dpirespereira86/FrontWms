import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  codigoBarra: Yup.string()
    .max(13, 'Minimo são 13 caracteris')
    .min(13, 'Minimo são 13 caracteris')
    .required('Campo Obrigatório'),
  descricao: Yup.string().required('Campo Obrigatório'),
  comprimento: Yup.number()
    .positive('O numero deve ser positivo')
    .test('maxDigitsAfterDecimal', 'number field must have 2 digits after decimal or less', (number) =>
      Number.isInteger(number * 10 ** 2),
    ),
  largura: Yup.number()
    .positive('O numero deve ser positivo')
    .test('maxDigitsAfterDecimal', 'number field must have 2 digits after decimal or less', (number) =>
      Number.isInteger(number * 10 ** 2),
    ),
  altura: Yup.number()
    .positive('O numero deve ser positivo')
    .test('maxDigitsAfterDecimal', 'number field must have 2 digits after decimal or less', (number) =>
      Number.isInteger(number * 10 ** 2),
    ),
  peso: Yup.number()
    .positive('O numero deve ser positivo')
    .test('maxDigitsAfterDecimal', 'number field must have 2 digits after decimal or less', (number) =>
      Number.isInteger(number * 10 ** 2),
    ),

  ultimoPrecoCompra: Yup.number()
    .positive('O numero deve ser positivo')
    .test('maxDigitsAfterDecimal', 'number field must have 2 digits after decimal or less', (number) =>
      Number.isInteger(number * 10 ** 2),
    ),
  // unidade: '',
  estoqueMinimo: Yup.number()
    .positive('O numero deve ser positivo')
    .test('maxDigitsAfterDecimal', 'number field must have 2 digits after decimal or less', (number) =>
      Number.isInteger(number * 10 ** 2),
    ),
  estoqueMaximo: Yup.number()
    .positive('O numero deve ser positivo')
    .test('maxDigitsAfterDecimal', 'number field must have 2 digits after decimal or less', (number) =>
      Number.isInteger(number * 10 ** 2),
    ),
  quantidade: Yup.number()
    .positive('O numero deve ser positivo')
    .test('maxDigitsAfterDecimal', 'number field must have 2 digits after decimal or less', (number) =>
      Number.isInteger(number * 10 ** 2),
    ),
  prazoEntrega: Yup.number()
    .positive('O numero deve ser positivo')
    .test('maxDigitsAfterDecimal', 'number field must have 2 digits after decimal or less', (number) =>
      Number.isInteger(number * 10 ** 2),
    ),
  fornecedor: Yup.string()
    .required('Campo Obrigatório')
    .test('Escolha um Fornecedor', (valor) => valor != 'Fornecedor'),
});
