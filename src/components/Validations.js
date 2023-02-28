import { object, string, number, date, InferType } from "yup";

const userSchema = object({
  email: string().email(),
});

export default Validations;
