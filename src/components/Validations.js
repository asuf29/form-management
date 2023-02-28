import { object, string, number, date, InferType, ref } from "yup";

const Validations = object({
  email: string().email().required(),
  password: string().min(5).required,
  passwordConfirm: string()
    .oneOf([ref("password")])
    .required(),
});

export default Validations;
